function createDataset(fields, constraints, sortFields) {
    var newDataset = DatasetBuilder.newDataset();
    log.info("QUERY: " + myQuery);
    var dataSource = "/jdbc/Banco RM";
    var ic = new javax.naming.InitialContext();
    var ds = ic.lookup(dataSource);
    var created = false;

    var patrimonio = ""
		
		for (var i = 0; i < constraints.length; i++) {
			log.info("const " + i + "------");
			log.info("Chave " + i + ": " + constraints[i].fieldName);
			log.info("Valor " + i + ": " + constraints[i].initialValue);

			if (constraints[i].fieldName == "EQUIPAMENTO" || constraints[i].fieldName == "SERIE") {
				patrimonio = constraints[i].initialValue;
			}
		}
    
    var myQuery = getQuery(patrimonio)
    	
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
                    Arr[i - 1] = "Em branco no TOTVS";
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

function getQuery(patrimonio){
	 
	return "" +
	"SELECT TOP 20\
	IPATRIMONIO.CODPATRIMONIO AS 'EQUIPAMENTO',\
	IPATRIMONIOCOMPL.NUMEROSERIE AS 'SERIE',\
	OFMODELO.MODELO + '  |  ' + OFSUBMODELO.DESCRICAO AS 'MODELO',\
	IPATRIMONIOCOMPL.ANOFABRICACAO AS 'ANO',\
	ILOCAL.NOME AS 'LOCALORIGEM',\
	GCCUSTO.CODCCUSTO AS 'CODCCORIGEM',\
	GCCUSTO.NOME AS 'CCORIGEM',\
	VALORMEDIDOR1 AS 'HORIMETRO',\
	PLACA AS PLACA,\
	CHASSI AS CHASSI,\
	PFUNC.NOME AS RESPONSAVEL,\
	IPATRIMONIO.IDPATRIMONIO,\
	IPATRIMONIOMOEDA.AQUISICAO,\
	CONCAT(GFILIAL.CODFILIAL, ' - ', GFILIAL.NOMEFANTASIA) AS 'FILIAL',\
	GFILIAL.CODFILIAL\
	\
	FROM IPATRIMONIO (NOLOCK)\
	\
	LEFT OUTER JOIN IPATRIMONIOCOMPL (NOLOCK)\
	ON (IPATRIMONIO.CODCOLIGADA = IPATRIMONIOCOMPL.CODCOLIGADA AND IPATRIMONIO.IDPATRIMONIO = IPATRIMONIOCOMPL.IDPATRIMONIO)\
	\
	LEFT OUTER JOIN IPATRIMONIOMOEDA (NOLOCK)\
	ON (IPATRIMONIO.CODCOLIGADA = IPATRIMONIOMOEDA.CODCOLIGADA AND IPATRIMONIO.IDPATRIMONIO = IPATRIMONIOMOEDA.IDPATRIMONIO AND IPATRIMONIOMOEDA.MOEDAINDICE = 'R$')\
	\
	LEFT OUTER JOIN GCCUSTO (NOLOCK)\
	ON (IPATRIMONIO.CODCOLIGADACENTROCUSTO = GCCUSTO.CODCOLIGADA AND IPATRIMONIO.CODCENTROCUSTO = GCCUSTO.CODCCUSTO)\
	\
	LEFT OUTER JOIN ILOCAL (NOLOCK)\
	ON (IPATRIMONIO.CODCOLIGADA = ILOCAL.CODCOLIGADA AND IPATRIMONIO.CODLOCAL = ILOCAL.CODLOCAL)\
	\
	LEFT OUTER JOIN GFILIAL (NOLOCK)\
	ON (IPATRIMONIO.CODCOLIGADA = GFILIAL.CODCOLIGADA AND IPATRIMONIO.CODFILIAL = GFILIAL.CODFILIAL)\
	\
	LEFT OUTER JOIN PFUNC (NOLOCK)\
	ON (IPATRIMONIO.CODCOLIGADA = PFUNC.CODCOLIGADA AND IPATRIMONIO.CHAPA = PFUNC.CHAPA)\
	\
	LEFT OUTER JOIN OFOBJOFICINA (NOLOCK)\
	ON (IPATRIMONIO.CODCOLIGADA = OFOBJOFICINA.CODCOLIGADA AND IPATRIMONIO.IDOBJOF = OFOBJOFICINA.IDOBJOF)\
	\
	LEFT OUTER JOIN OFHISTINDICADOR (NOLOCK)\
	ON (OFOBJOFICINA.CODCOLIGADA = OFHISTINDICADOR.CODCOLIGADA AND OFOBJOFICINA.IDOBJOF = OFHISTINDICADOR.IDOBJOF AND OFOBJOFICINA.IDHISTINDICADOR = OFHISTINDICADOR.IDHISTINDICADOR)\
	\
	LEFT OUTER JOIN OFMODELO (NOLOCK)\
	ON (OFOBJOFICINA.IDTIPOOBJ = OFMODELO.IDTIPOOBJ AND OFOBJOFICINA.CODMODELO = OFMODELO.CODMODELO)\
	\
	LEFT OUTER JOIN OFSUBMODELO (NOLOCK)\
	ON (OFOBJOFICINA.IDTIPOOBJ = OFSUBMODELO.IDTIPOOBJ AND OFOBJOFICINA.CODMODELO = OFSUBMODELO.CODMODELO AND OFOBJOFICINA.CODSUBMODELO = OFSUBMODELO.CODSUBMODELO)\
	\
	WHERE IPATRIMONIO.CODCOLIGADA = 1\
		AND IPATRIMONIO.ATIVO = 1\
		AND IPATRIMONIO.TIPOPATRIMONIO = 0\
		AND CONCAT(IPATRIMONIO.CODPATRIMONIO, IPATRIMONIOCOMPL.NUMEROSERIE) LIKE '%"+ patrimonio +"%'";
	
}