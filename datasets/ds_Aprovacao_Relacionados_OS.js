function createDataset(fields, constraints, sortFields) {
    var newDataset = DatasetBuilder.newDataset();
    log.info("QUERY: " + myQuery);
    var dataSource = "/jdbc/Banco RMteste ";
    var ic = new javax.naming.InitialContext();
    var ds = ic.lookup(dataSource);
    var created = false;

    var NUMEROMOV = "%"
		
		for (var i = 0; i < constraints.length; i++) {
			log.info("const " + i + "------");
			log.info("Chave " + i + ": " + constraints[i].fieldName);
			log.info("Valor " + i + ": " + constraints[i].initialValue);

			if (constraints[i].fieldName == "NUMEROMOV") {
				NUMEROMOV = constraints[i].initialValue;
			}
		}
    
    var myQuery = getQuery(NUMEROMOV)
    	
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

function getQuery(NUMEROMOV){
	
	return "" +
	"SELECT" +
	" TMOVOS.NUMEROMOV," +
	" TMOV.IDMOV," +
	" ISNULL((SELECT TOP 1 CASE WHEN DATAAPROVACAO IS NULL THEN 'NAOAPROVADO' ELSE 'APROVADO' END " +
	"			FROM TMOVAPROVA (NOLOCK)" +
	"			WHERE TIPOAPROVACAO = 1 AND TMOVAPROVA.IDMOV = TMOV.IDMOV ORDER BY RECMODIFIEDON DESC),'NAOAPROVADO') AS APROVACAO" +
	
	" FROM TMOV AS TMOVOS (NOLOCK)" +
		
	" LEFT OUTER JOIN OFMOV (NOLOCK)" +
	" ON (TMOVOS.CODCOLIGADA = OFMOV.CODCOLIGADAOS AND TMOVOS.IDMOV = OFMOV.IDMOVOS)" +
		
	" LEFT OUTER JOIN TMOV (NOLOCK)" +
	" ON (OFMOV.CODCOLIGADA = TMOV.CODCOLIGADA AND OFMOV.IDMOV = TMOV.IDMOV)" +
		
	" WHERE TMOV.IDMOV IS NOT NULL" +
	"   AND TMOVOS.NUMEROMOV = '" + NUMEROMOV + "'";
	
}