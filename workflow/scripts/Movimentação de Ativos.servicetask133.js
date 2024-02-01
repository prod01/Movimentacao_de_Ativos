function servicetask133(attempt, message) {
	
	var user = DatasetFactory.getDataset("ds_connector", null, null, null);
	log.info("user: "+user)
	
	var usuario = user.getValue(0, "INTEGRADOR")
	log.info("usuario: "+usuario)
	var senha = user.getValue(0, "SENHA")
	//log.info("senha: "+senha)
	var email = user.getValue(0, "EMAIL")
	log.info("email: "+email)
	
	var login = fluigAPI.getUserService().getCurrent().getLogin();
	var primeiraLetra = login.substring(0, 1).toUpperCase();
	log.info("primeiraLetra: "+primeiraLetra)
	var restoDaString = login.slice(1);
	log.info("restoDaString: "+restoDaString)
	var codusuario = primeiraLetra + restoDaString;
	
	var contexto = "codcoligada=1;codusuario="+codusuario+";codsistema=N"
		log.info("contexto: "+contexto)
		
	var authService = getWebService(usuario, senha);
	log.info("authService: "+authService)
	
	var nomeDataserver = "MOVMOVIMENTOTBCDATA";
	log.info("nomeDataserver: "+nomeDataserver)
	
    //xml que envia as informaçoes para o RM    
	var xml = ""+
	"<MovMovimento>"+
	
		"<TMOV>"+
		    "<CODCOLIGADA>1</CODCOLIGADA>"+
		    "<IDMOV>-1</IDMOV>"+
		    "<CODFILIAL>"+hAPI.getCardValue("COD_FILIAL")+"</CODFILIAL>";
		    xml = xml+ (hAPI.getCardValue("FRETETIPOLOGISTICA") == "on" ? "<CODTMV>1.1.07</CODTMV>" : "<CODTMV>1.1.05</CODTMV>"+ 
																							  "<CODCFO>"+hAPI.getCardValue("CODCFO")+"</CODCFO>"+
																							  "<CODCOLCFO>0</CODCOLCFO>"+
																							  "<DATASAIDA>"+hAPI.getCardValue("DATACOLETA")+"T09:00:00</DATASAIDA>");
		    xml = xml+ "<STATUS>A</STATUS>"+
		    "<CODTB1FAT>02</CODTB1FAT>"+
			"<CODTB3FAT>03</CODTB3FAT>"+
		"</TMOV>";
	
	//==================================================================================================
	var indexes = hAPI.getChildrenIndexes("TABELA_ITENSSOLICITACAO");

	for (var i = 1; i <= indexes.length; ++i) {
		var temValor = hAPI.getCardValue("ITENSPRODUTO___"+i) == "" ? true :
						   hAPI.getCardValue("ITENSQUANTIDADE___"+i) == "" ? true :
							   hAPI.getCardValue("ITENSPRECOUNITARIO___"+i) == "" ? true : false;
		if (!temValor){
				xml = xml+ "<TITMMOV>"+
						   		"<CODCOLIGADA>1</CODCOLIGADA>"+
							    "<IDMOV>-1</IDMOV>"+
							    "<NSEQITMMOV>"+i+"</NSEQITMMOV>"+
							    "<CODFILIAL>"+hAPI.getCardValue("COD_FILIAL")+"</CODFILIAL>"+
							    "<IDPRD>"+hAPI.getCardValue("ITENSIDPRD___"+i)+"</IDPRD>"+
							    "<QUANTIDADE>"+hAPI.getCardValue("ITENSQUANTIDADE___"+i)+"</QUANTIDADE>"+
							    "<PRECOUNITARIO>"+hAPI.getCardValue("ITENSPRECOUNITARIO___"+i)+"</PRECOUNITARIO>"
							    xml = xml+ (hAPI.getCardValue("FRETETIPOLOGISTICA") == "on" ? "<CODTB1FLX>2.2.01.07</CODTB1FLX>" : "<CODTB1FLX>3.1.05.04</CODTB1FLX>")
							    xml = xml+ "<CODUND>"+hAPI.getCardValue("ITENSUNIDADE___"+i)+"</CODUND>"+
							"</TITMMOV>";
		}
	}
	//====================================================
	for (var i = 1; i <= indexes.length; ++i) {
		var temValor = hAPI.getCardValue("ITENSPRODUTO___"+i) == "" ? true :
						   hAPI.getCardValue("ITENSQUANTIDADE___"+i) == "" ? true :
							   hAPI.getCardValue("ITENSPRECOUNITARIO___"+i) == "" ? true : false;
		if (!temValor){
				xml = xml+"<TITMMOVRATCCU>"+
						    "<CODCOLIGADA>1</CODCOLIGADA>"+
						    "<IDMOV>-1</IDMOV>"+
						    "<NSEQITMMOV>"+i+"</NSEQITMMOV>"+
						    "<CODCCUSTO>"+hAPI.getCardValue("COD_CCUSTO")+"</CODCCUSTO>"+
						    "<VALOR>"+(parseFloat(hAPI.getCardValue("ITENSQUANTIDADE___"+i)) * parseFloat(hAPI.getCardValue("ITENSPRECOUNITARIO___"+i)))+"</VALOR>"+
						    "<IDMOVRATCCU>-1</IDMOVRATCCU>"+
						"</TITMMOVRATCCU>";
		}
	}
	//====================================================
	for (var i = 1; i <= indexes.length; ++i) {
		var temValor = hAPI.getCardValue("ITENSPRODUTO___"+i) == "" ? true :
						   hAPI.getCardValue("ITENSQUANTIDADE___"+i) == "" ? true :
							   hAPI.getCardValue("ITENSPRECOUNITARIO___"+i) == "" ? true : false;
		if (!temValor){
				xml = xml+"<TITMMOVRATDEP>"+
						    "<CODCOLIGADA>1</CODCOLIGADA>"+
						    "<IDMOV>-1</IDMOV>"+
						    "<NSEQITMMOV>"+i+"</NSEQITMMOV>"+ 
						    "<CODFILIAL>"+hAPI.getCardValue("COD_FILIAL")+"</CODFILIAL>"+
						    "<CODDEPARTAMENTO>"+hAPI.getCardValue("COD_DEPARTAMENTO")+"</CODDEPARTAMENTO>"+
						    "<VALOR>"+(parseFloat(hAPI.getCardValue("ITENSQUANTIDADE___"+i)) * parseFloat(hAPI.getCardValue("ITENSPRECOUNITARIO___"+i)))+"</VALOR>"+
						"</TITMMOVRATDEP>";
		}
	}
 	
	xml = xml+"</MovMovimento>";
			
			log.error("xml: ")
			log.error(xml)
			
	try{		
		var result = new String( authService.saveRecord(nomeDataserver, xml, contexto) );
		hAPI.setCardValue("SOLICITANFIDMOV", result.split(";")[1]);
		log.error("result: "+result);
		//String DataServerName, String XML, String UserName, String UserPassword, String contexto, String emailUsuarioContexto
		
		if (result.split(";")[0] != "1"){
			throw "ERRO AO CRIAR A MOVIMENTO"+result.split("=")[0]+"\n\n"
		} else {
			var dataset = DatasetFactory.getDataset("ds_OSE_Numero_OS", 
					        null, 
					        [DatasetFactory.createConstraint("IDMOV", result.split(";")[1], result.split(";")[1], ConstraintType.MUST)],
					        null);
			hAPI.setCardValue("SOLICITANFNUMEROMOV",  dataset.getValue(0, "NUMEROMOV"))
		}
	} catch(e) {
		log.error("Erro ao gerar movimento: "+e);
		throw "Erro ao gerar movimento: "+e
	}
	
}

function getWebService(usuario, senha){
	
	var nomeServico = "wsDataServer"
		log.info("nomeServico: "+nomeServico)
		
	var caminhoServico = "com.totvs.WsDataServer"
		log.info("caminhoServico: "+caminhoServico)
		
	var dataServerService = ServiceManager.getServiceInstance(nomeServico);
	log.info("dataServerService: "+dataServerService)
	
	if (dataServerService == null){
		throw "Erro ao encontrar serviço!";
	}
	
	var locator = dataServerService.instantiate(caminhoServico);
	log.info("locator: "+locator)

	if (locator == null){
		throw "Erro ao instanciar serviço!";
	}
	
	var service = locator.getRMIwsDataServer();
	log.info("service: "+service)

	if (service == null){
		throw "Erro instancia incorreta ou com problemas!";
	}
	
	var serviceHelper = dataServerService.getBean();
	log.info("serviceHelper: "+serviceHelper)

	if (serviceHelper == null){
		throw "Erro no serviço de autenticação!";
	}
	
	var authService = serviceHelper.getBasicAuthenticatedClient(service, "com.totvs.IwsDataServer", usuario, senha)
	log.info("authService: "+authService)

	if (authService == null){
		throw "Erro ao autenticar dataserver!";
	}
	
	return authService;

}