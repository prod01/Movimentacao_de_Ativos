function createDataset(fields, constraints, sortFields) {
    var newDataset = DatasetBuilder.newDataset();
    log.info("QUERY: " + myQuery);
    var dataSource = "/jdbc/Banco RM Teste";
    var ic = new javax.naming.InitialContext();
    var ds = ic.lookup(dataSource);
    var created = false;

    var parametro = "%"
		
		for (var i = 0; i < constraints.length; i++) {
			log.info("const " + i + "------");
			log.info("Chave " + i + ": " + constraints[i].fieldName);
			log.info("Valor " + i + ": " + constraints[i].initialValue);

			if (constraints[i].fieldName == "IDMOV") {
				parametro = constraints[i].initialValue;
			}
		}
    
    var myQuery = getQuery(parametro)
    	
    try {
        var conn = ds.getConnection();
        var stmt = conn.createStatement();
        var rs = stmt.executeQuery(myQuery);
        var columnCount = rs.getMetaData().getColumnCount();
        while (rs.next()) {
            if (!created) {
            	var i = 1
            	do{

                    newDataset.addColumn(rs.getMetaData().getColumnName(i));

                i++
            	} while (i <= columnCount)
                created = true;
            }
            var Arr = new Array();
            var i = 1
            do{

                var obj = rs.getObject(rs.getMetaData().getColumnName(i));
                if (null != obj) {
                    Arr[i - 1] = rs.getObject(rs.getMetaData().getColumnName(i)).toString();
                } else {
                    Arr[i - 1] = "null";
                }
                
            i++
            } while (i <= columnCount)
            newDataset.addRow(Arr);
        }
    } catch (e) {
        log.error("ERRO==============> " + e.message);
    } finally {
        if (rs != null) {
            rs.close();
        }
        if (stmt != null) {
            stmt.close();
        }
        if (conn != null) {
            conn.close();
        }
    }
    return newDataset;
}

function getQuery(parametro){
	
	return "" +
	"SELECT  TOP 1 TMOV.CODCOLIGADA,\
	TMOV.IDMOV,\
	TMOV.CODTMV,\
	CASE\
	WHEN TMOVAPROVA.DATAAPROVACAO IS NULL OR TMOVAPROVA.DATADESAPROVA IS NOT NULL THEN 'NÃO APROVADO'\
	ELSE 'APROVADO'\
	END AS APROVACAO,\
	\
	CASE STATUS\
	WHEN 'A' THEN 'Pendente'\
	WHEN 'B' THEN 'Bloqueado'\
	WHEN 'C' THEN 'Cancelado'\
	WHEN 'F' THEN 'Faturado '\
	WHEN 'G' THEN 'Parcialmente Faturado'\
	WHEN 'U' THEN 'Em Faturamento'\
	END AS STATUS\
	\
	FROM TMOV (NOLOCK)\
	\
	LEFT OUTER JOIN TMOVAPROVA (NOLOCK)\
	ON (TMOV.CODCOLIGADA = TMOVAPROVA.CODCOLIGADA AND TMOV.IDMOV = TMOVAPROVA.IDMOV)\
	\
	WHERE TMOV.CODCOLIGADA = 1\
	  AND TMOV.CODTMV IN ('1.1.12')\
	  AND TMOV.STATUS <> 'C'\
	  AND TMOV.IDMOV LIKE '%"+parametro+"%'\
	\
	ORDER BY TMOVAPROVA.DATAAPROVACAO DESC";
	
}