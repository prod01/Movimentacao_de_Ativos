function createDataset(fields, constraints, sortFields) {
    var newDataset = DatasetBuilder.newDataset();
    log.info("QUERY: " + myQuery);
    var dataSource = "/jdbc/Banco Fluig";
    var ic = new javax.naming.InitialContext();
    var ds = ic.lookup(dataSource);
    var created = false;

    var NOME = "%"
		
		for (var i = 0; i < constraints.length; i++) {
			log.info("const " + i + "------");
			log.info("Chave " + i + ": " + constraints[i].fieldName);
			log.info("Valor " + i + ": " + constraints[i].initialValue);

			if (constraints[i].fieldName == "NOME") {
				NOME = constraints[i].initialValue;
			}
		}
    
    var myQuery = getQuery(NOME)
    	
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

function getQuery(NOME){
	
	return "" +
	"SELECT TOP 15" +

	" FDN_USERROLE.ROLE_CODE," +
	" FDN_USERTENANT.USER_CODE," +
	" FDN_USER.FULL_NAME" +
	
	" FROM FDN_USERROLE (NOLOCK)" +
	
	" LEFT OUTER JOIN FDN_USERTENANT (NOLOCK)" +
	" ON (FDN_USERTENANT.LOGIN = FDN_USERROLE.LOGIN)" +
	
	" LEFT OUTER JOIN FDN_USER (NOLOCK)" +
	" ON (FDN_USERTENANT.USER_TENANT_ID = FDN_USER.USER_ID)" +
	
	" WHERE FDN_USERROLE.ROLE_CODE = 'TecnicosTI'" +
	" AND FDN_USER.FULL_NAME  LIKE '%" + NOME + "%'"+
	" ORDER BY FULL_NAME ASC ";
	
}