function createDataset(fields, constraints, sortFields) {
    var newDataset = DatasetBuilder.newDataset();
    log.info("QUERY: " + myQuery);
    var dataSource = "/jdbc/Banco Fluig";
    var ic = new javax.naming.InitialContext();
    var ds = ic.lookup(dataSource);
    var created = false;

    var SOLICITACAO_FLUIG = "%"
		
		for (var i = 0; i < constraints.length; i++) {
			log.info("const " + i + "------");
			log.info("Chave " + i + ": " + constraints[i].fieldName);
			log.info("Valor " + i + ": " + constraints[i].initialValue);

			if (constraints[i].fieldName == "SOLICITACAO_FLUIG") {
				SOLICITACAO_FLUIG = constraints[i].initialValue;
			}
		}
    
    var myQuery = getQuery(SOLICITACAO_FLUIG)
    	
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

function getQuery(SOLICITACAO_FLUIG){
	
	return "" +
	"SELECT TOP 10 " +
	" PROCES_WORKFLOW.NUM_PROCES AS SOLICITACAO_FLUIG" +
	
	" FROM ML001036 (NOLOCK)" +
	
	" LEFT OUTER JOIN PROCES_WORKFLOW (NOLOCK)" +
	" ON (PROCES_WORKFLOW.NR_DOCUMENTO_CARD = ML001036.documentid)" +
	
	" WHERE PROCES_WORKFLOW.STATUS <> 1" +
	"   AND PROCES_WORKFLOW.NUM_PROCES LIKE '%" + SOLICITACAO_FLUIG + "%'";
	
}