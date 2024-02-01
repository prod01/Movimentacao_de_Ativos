function createDataset(fields, constraints, sortFields) {
    var newDataset = DatasetBuilder.newDataset();
    log.info("QUERY: " + myQuery);
    var dataSource = "/jdbc/Banco RM";
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
	"SELECT TOP 10 NUMEROMOV, TMOV.CODCOLIGADA, CODFILIAL, TTB3.DESCRICAO" +
	" FROM TMOV (NOLOCK), TTB3 (NOLOCK)" +
	" WHERE TMOV.CODCOLIGADA = TTB3.CODCOLIGADA" +
	" 	AND TMOV.CODTB3FAT = TTB3.CODTB3FAT" +
	" 	AND CODTMV IN ('1.1.20', '1.1.21', '1.1.22', '1.1.23', '1.1.24', '1.1.25')" +
	" 	AND NUMEROMOV LIKE '%" + NUMEROMOV + "%'" +
	" ORDER BY NUMEROMOV DESC";
	
}