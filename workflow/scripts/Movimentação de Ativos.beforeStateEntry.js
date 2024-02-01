function beforeStateEntry(sequenceId){
	
	if (sequenceId == "48" || sequenceId == "54"){
		if (hAPI.getCardValue("TIPOEQUIPAMENTO") == "MAQUINASECAMINHOES"){
			emailMaquinasCaminhoes();
		} else if (hAPI.getCardValue("TIPOEQUIPAMENTO") == "MAQUINAELETRICA"){
			emailMaquinaEletrica();
		} else if (hAPI.getCardValue("TIPOEQUIPAMENTO") == "EMPILHADEIRA"){
			emailEmpilhadeiraCombustao();
		}
	}
	
	if (sequenceId == "100"){
		emailNotaEmitida()
	}
	
	if (sequenceId == "91"){
		emailNotaEmitida()
	}

}

function emailNotaEmitida(){
	try{
		
		log.info("Entrou TRY Envio de email Nota Emitida:");
		
	    //Monta mapa com parâmetros do template
	    var parametros = new java.util.HashMap();
	    
	    parametros.put("NOMEMOTORISTA", String(hAPI.getCardValue("FRETEINTERNONOMEMOTORISTA")+hAPI.getCardValue("SOLICITACAOFRETENOMEMOTORISTA")));
	    parametros.put("CPFMOTORISTA", String(hAPI.getCardValue("FRETEINTERNOCPFMOTORISTA")+hAPI.getCardValue("SOLICITACAOFRETECPFMOTORISTA")));
	    parametros.put("TRANSPORTADORA", String("TRADIMAQ S.A."+hAPI.getCardValue("SOLICITACAOFRETETRANSPORTADORA")));
	    parametros.put("PLACAVEICULO", String(hAPI.getCardValue("FRETEINTERNOPLACAVEICULO")+hAPI.getCardValue("SOLICITACAOFRETEPLACA")));
	    parametros.put("DATAENVIO", String(hAPI.getValue("DATAENVIO")));
	    parametros.put("FISCALNUMERONF", hAPI.getCardValue("FISCALNUMERONF"));
	    
	    parametros.put("EQUIPAMENTO", hAPI.getCardValue("EQUIPAMENTO"));
	    parametros.put("MODELO", hAPI.getCardValue("MODELO"));
	    parametros.put("SERIE", hAPI.getCardValue("SERIE"));
	    parametros.put("HORIMETRO", hAPI.getCardValue("HORIMETRO"));
	    parametros.put("ANO", hAPI.getCardValue("ANO"));
	    parametros.put("PLACA", hAPI.getCardValue("PLACA"));
	    parametros.put("CHASSI", hAPI.getCardValue("CHASSI"));
	    parametros.put("LOCALORIGEM", hAPI.getCardValue("LOCALORIGEM"));
	    parametros.put("CCORIGEM", hAPI.getCardValue("CCORIGEM"));
	    parametros.put("LOCDESTINO", hAPI.getCardValue("LOCDESTINO"));
	    parametros.put("CCDESTINO", hAPI.getCardValue("CCDESTINO"));
	    parametros.put("TIPOOPERACAO", hAPI.getCardValue("TIPOOPERACAO"));
	    if (hAPI.getCardValue("TIPOEQUIPAMENTO") == "MAQUINASECAMINHOES"){
	    	parametros.put("TIPOEQUIPAMENTO", "Máquinas e Caminhões");
	    } else if (hAPI.getCardValue("TIPOEQUIPAMENTO") == "MAQUINAELETRICA"){
	    	parametros.put("TIPOEQUIPAMENTO", "Máquina Elétrica");
	    } else if (hAPI.getCardValue("TIPOEQUIPAMENTO") == "EMPILHADEIRA"){
	    	parametros.put("TIPOEQUIPAMENTO", "Empilhadeira à Combustão");
	    }
	    
	    
	    var assunto = "Mobilização de equipamento - Data: "+ String(hAPI.getValue("DATAENVIO")) +" - Patrimônio: "+ hAPI.getCardValue("EQUIPAMENTO") +" - Centro de Custo de Destino: "+hAPI.getCardValue("CCDESTINO");
	    
	 
	    //Este parâmetro é obrigatório e representa o assunto do e-mail
	    parametros.put("subject", assunto);
	 
	    //Monta lista de destinatários
	    var destinatarios = new java.util.ArrayList();

	    destinatarios.add("arthur.evangelista@tradimaq.com.br");
	    destinatarios.add("barbara.costa@tradimaq.com.br");
	    destinatarios.add("raquel@tradimaq.com.br");
	    destinatarios.add(hAPI.getCardValue("EMAILREMETENTE"));
	    destinatarios.add(hAPI.getCardValue("EMAILDESTINATARIO"));
	 
	    //Envia e-mail
	    notifier.notify("008310", "023", parametros, destinatarios, "text/html");

		log.info("Email Nota Emitida enviado!");
	 
	} catch(e){
	    log.info("Erro ao enviar email Nota Emitida: " + e);
	}
}

function emailMobilizacaoRealizada(){
	try{
		
		log.info("Entrou TRY Envio de email Mobilização Realizada:");
		
	    //Monta mapa com parâmetros do template
	    var parametros = new java.util.HashMap();
	    
	    parametros.put("LOCALIZACAOATUAL", hAPI.getCardValue("PCMLOCALIZACAOATUAL"));
	    parametros.put("CENTRODECUSTOATUAL", hAPI.getCardValue("PCMCCATUAL"));
	    
	    parametros.put("NOMEMOTORISTA", String(hAPI.getCardValue("FRETEINTERNONOMEMOTORISTA")+hAPI.getCardValue("SOLICITACAOFRETENOMEMOTORISTA")));
	    parametros.put("CPFMOTORISTA", String(hAPI.getCardValue("FRETEINTERNOCPFMOTORISTA")+hAPI.getCardValue("SOLICITACAOFRETECPFMOTORISTA")));
	    parametros.put("TRANSPORTADORA", String("TRADIMAQ S.A."+hAPI.getCardValue("SOLICITACAOFRETETRANSPORTADORA")));
	    parametros.put("PLACAVEICULO", String(hAPI.getCardValue("FRETEINTERNOPLACAVEICULO")+hAPI.getCardValue("SOLICITACAOFRETEPLACA")));
	    parametros.put("DATAENVIO", String(getValue("DATAENVIO")));
	    parametros.put("FISCALNUMERONF", hAPI.getCardValue("FISCALNUMERONF"));
	    
	    parametros.put("EQUIPAMENTO", hAPI.getCardValue("EQUIPAMENTO"));
	    parametros.put("MODELO", hAPI.getCardValue("MODELO"));
	    parametros.put("SERIE", hAPI.getCardValue("SERIE"));
	    parametros.put("HORIMETRO", hAPI.getCardValue("HORIMETRO"));
	    parametros.put("ANO", hAPI.getCardValue("ANO"));
	    parametros.put("PLACA", hAPI.getCardValue("PLACA"));
	    parametros.put("CHASSI", hAPI.getCardValue("CHASSI"));
	    parametros.put("LOCALORIGEM", hAPI.getCardValue("LOCALORIGEM"));
	    parametros.put("CCORIGEM", hAPI.getCardValue("CCORIGEM"));
	    parametros.put("LOCDESTINO", hAPI.getCardValue("LOCDESTINO"));
	    parametros.put("CCDESTINO", hAPI.getCardValue("CCDESTINO"));
	    parametros.put("TIPOOPERACAO", hAPI.getCardValue("TIPOOPERACAO"));
	    if (hAPI.getCardValue("TIPOEQUIPAMENTO") == "MAQUINASECAMINHOES"){
	    	parametros.put("TIPOEQUIPAMENTO", "Máquinas e Caminhões");
	    } else if (hAPI.getCardValue("TIPOEQUIPAMENTO") == "MAQUINAELETRICA"){
	    	parametros.put("TIPOEQUIPAMENTO", "Máquina Elétrica");
	    } else if (hAPI.getCardValue("TIPOEQUIPAMENTO") == "EMPILHADEIRA"){
	    	parametros.put("TIPOEQUIPAMENTO", "Empilhadeira à Combustão");
	    }
	    
	 
			
	    
	    var assunto = "Transferência de Controle de equipamento - Patrimônio: "+ hAPI.getCardValue("EQUIPAMENTO") +" - Centro de Custo de Destino: "+hAPI.getCardValue("CCDESTINO");
	    
	 
	    //Este parâmetro é obrigatório e representa o assunto do e-mail
	    parametros.put("subject", assunto);
	 
	    //Monta lista de destinatários
	    var destinatarios = new java.util.ArrayList();

	    destinatarios.add("arthur.evangelista@tradimaq.com.br");
	    destinatarios.add("barbara.costa@tradimaq.com.br");
	    destinatarios.add("raquel@tradimaq.com.br");
	    destinatarios.add(hAPI.getCardValue("EMAILREMETENTE"));
	    destinatarios.add(hAPI.getCardValue("EMAILDESTINATARIO"));
	 
	    //Envia e-mail
	    notifier.notify("008310", "024", parametros, destinatarios, "text/html");

		log.info("Email Nota Emitida enviado!");
	 
	} catch(e){
	    log.info("Erro ao enviar email Nota Emitida: " + e);
	}
}


function emailMaquinaEletrica(){
	try{
		
		log.info("Entrou TRY Envio de email Checklist Movimentação de Ativos:");
		
	    //Monta mapa com parâmetros do template
	    var parametros = new java.util.HashMap();
	    
	    parametros.put("EQUIPAMENTO", hAPI.getCardValue("EQUIPAMENTO"));
	    parametros.put("MODELO", hAPI.getCardValue("MODELO"));
	    parametros.put("SERIE", hAPI.getCardValue("SERIE"));
	    parametros.put("HORIMETRO", hAPI.getCardValue("HORIMETRO"));
	    parametros.put("ANO", hAPI.getCardValue("ANO"));
	    parametros.put("PLACA", hAPI.getCardValue("PLACA"));
	    parametros.put("CHASSI", hAPI.getCardValue("CHASSI"));
	    parametros.put("LOCALORIGEM", hAPI.getCardValue("LOCALORIGEM"));
	    parametros.put("CCORIGEM", hAPI.getCardValue("CCORIGEM"));
	    parametros.put("LOCDESTINO", hAPI.getCardValue("LOCDESTINO"));
	    parametros.put("CCDESTINO", hAPI.getCardValue("CCDESTINO"));
	    parametros.put("TIPOOPERACAO", hAPI.getCardValue("TIPOOPERACAO"));
	    if (hAPI.getCardValue("TIPOEQUIPAMENTO") == "MAQUINASECAMINHOES"){
	    	parametros.put("TIPOEQUIPAMENTO", "Máquinas e Caminhões");
	    } else if (hAPI.getCardValue("TIPOEQUIPAMENTO") == "MAQUINAELETRICA"){
	    	parametros.put("TIPOEQUIPAMENTO", "Máquina Elétrica");
	    } else if (hAPI.getCardValue("TIPOEQUIPAMENTO") == "EMPILHADEIRA"){
	    	parametros.put("TIPOEQUIPAMENTO", "Empilhadeira à Combustão");
	    }
	    
	    parametros.put("PROTECAODETETOENVIO", hAPI.getCardValue("PROTECAODETETOSAIDA"));
	    parametros.put("ESPELHORETROVISORENVIO", hAPI.getCardValue("ESPELHORETROVISORSAIDA"));
	    parametros.put("FREIOESTACIONAMENTOENVIO", hAPI.getCardValue("FREIOESTACIONAMENTOSAIDA"));
	    parametros.put("ALARMEREENVIO", hAPI.getCardValue("ALARMERESAIDA"));
	    parametros.put("FAROISENVIO", hAPI.getCardValue("FAROISMAQELETRICASAIDA"));
	    parametros.put("BUZINAENVIO", hAPI.getCardValue("BUZINASAIDA"));
	    parametros.put("CINTODESEGURANÇAENVIO", hAPI.getCardValue("CINTODESEGURANCAMAQELETRICASAI"));
	    parametros.put("MANGUEIRASHIDRAULICASENVIO", hAPI.getCardValue("MANGUEIRASHIDRAULICASSAIDA"));
	    parametros.put("EXTINTORDEINCENDIOENVIO", hAPI.getCardValue("EXTINTORDEINCENDIOSAIDA"));
	    parametros.put("RODASCARGATRACAOENVIO", hAPI.getCardValue("RODASCARGATRACAOSAIDA"));
	    parametros.put("CILINDROSDATORREENVIO", hAPI.getCardValue("CILINDROSDATORRESAIDA"));
	    parametros.put("GIROFLEXFLASHADVERTENCIAENVIO", hAPI.getCardValue("GIROFLEXSAIDA"));
	    parametros.put("CORRENTESTORREENVIO", hAPI.getCardValue("CORRENTESTORRESAIDA"));
	    parametros.put("CODIGOSERROOUADVERTENCIAENVIO", hAPI.getCardValue("CODIGOSERROOUADVERTENCIASAIDA"));
	    parametros.put("MASTROEGRADEENVIO", hAPI.getCardValue("MASTROEGRADESAIDA"));
	    parametros.put("LIMPEZAENVIO", hAPI.getCardValue("LIMPEZASAIDA"));
	    parametros.put("BANCOEALAVANCASENVIO", hAPI.getCardValue("BANCOEALAVANCASSAIDA"));
	    parametros.put("LUZESADVERTENCIASENVIO", hAPI.getCardValue("LUZESADVERTENCIASSAIDA"));
	    parametros.put("PEDAISENVIO", hAPI.getCardValue("PEDAISSAIDA"));
	    parametros.put("BATERIAENVIO", hAPI.getCardValue("BATERIAMAQELETRICASAIDA"));
	    parametros.put("FREIODESERVICOENVIO", hAPI.getCardValue("FREIODESERVICOSAIDA"));
	    parametros.put("OLEOHIDRAULICOREDUCAOENVIO", hAPI.getCardValue("OLEOHIDRAULICOREDUCAOSAIDA"));
	    parametros.put("LUBRIFICACAOENVIO", hAPI.getCardValue("LUBRIFICACAOSAIDA"));
	    parametros.put("CHAVEENVIO", hAPI.getCardValue("CHAVESAIDA"));
	    parametros.put("TESTEDEFUNCIONAMENTOENVIO", hAPI.getCardValue("TESTEDEFUNCIONAMENTOSAIDA"));
	    parametros.put("PINTURAENVIO", hAPI.getCardValue("PINTURAMAQELETRICASAIDA"));
	    parametros.put("GARFOSENVIO", hAPI.getCardValue("GARFOSSAIDA"));
	    parametros.put("NUMERODEFROTAENVIO", hAPI.getCardValue("NUMERODEFROTASAIDA"));
	 
		//=========================================================================================================================================
	    var index = hAPI.getChildrenIndexes("TABELA_BATERIA").length;
	    var tabelaBateria = ""
	    if(index >= 1){
		    tabelaBateria = "<table id='CHECKLIST' class='tg' style='undefined;table-layout: fixed; width: 650px' align='center'>" +
								"<colgroup><col style='width: 300px'><col style='width: 175px'></colgroup>" +
								"<thead>" +
								"  <tr>" +
								"    <th class='tg-0w9m' colspan='2'><span style='font-weight:bold'>Bateria</span></th>" +
								"  </tr>" +
								"  <tr>" +
								"    <th class='tg-0w9m'><span style='font-weight:bold'>Descrição</span></th>" +
								"    <th class='tg-0w9m'>Estado Envio</th>" +
								"  </tr>" +
								"</thead><tbody>";
		    
		    var i = 1
		    do{
			    tabelaBateria = tabelaBateria +
						"  <tr>" +
						"    <td class='tg-i7zr'>" + hAPI.getCardValue("NSERIEBATERIA___"+i) + "</td>" +
						"    <td class='tg-i7zr'>" + hAPI.getCardValue("BATERIASAIDA1___"+i)+hAPI.getCardValue("BATERIASAIDA2___"+i)+hAPI.getCardValue("BATERIASAIDA3___"+i) + "</td>" +
						"  </tr>";
			    i++
		    }while (i <= index)
		    
		    tabelaBateria = tabelaBateria + "</tbody></table>";
	    }
		//=========================================================================================================================================
		//=========================================================================================================================================
	    var index = hAPI.getChildrenIndexes("TABELA_CARREGADORES").length;
	    var tabelaCarregadores = ""
	    if(index >= 1){
		    tabelaCarregadores = "<table id='CHECKLIST' class='tg' style='undefined;table-layout: fixed; width: 650px' align='center'>" +
									"<colgroup><col style='width: 300px'><col style='width: 175px'></colgroup>" +
									"<thead>" +
									"  <tr>" +
									"    <th class='tg-0w9m' colspan='2'><span style='font-weight:bold'>Carregadores</span></th>" +
									"  </tr>" +
									"  <tr>" +
									"    <th class='tg-0w9m'><span style='font-weight:bold'>Descrição</span></th>" +
									"    <th class='tg-0w9m'>Estado Envio</th>" +
									"  </tr>" +
									"</thead><tbody>";
		    
		    var i = 1
		    do{
		    	tabelaCarregadores = tabelaCarregadores +
						"  <tr>" +
						"    <td class='tg-i7zr'>" + hAPI.getCardValue("NSERIECARREGADORES___"+i) + "</td>" +
						"    <td class='tg-i7zr'>" + hAPI.getCardValue("CARREGADORESSAIDA1___"+i)+hAPI.getCardValue("CARREGADORESSAIDA2___"+i)+hAPI.getCardValue("CARREGADORESSAIDA3___"+i) + "</td>" +
						"  </tr>";
			    i++
		    }while (i <= index)
		    
		    tabelaCarregadores = tabelaCarregadores + "</tbody></table>";
	    }
		//=========================================================================================================================================
		//=========================================================================================================================================
		var index = hAPI.getChildrenIndexes("TABELA_ACESSORIOS").length;
		var tabelaAcessorios = ""
		if(index >= 1){
		    tabelaAcessorios = "<table id='CHECKLIST' class='tg' style='undefined;table-layout: fixed; width: 650px' align='center'>" +
									"<colgroup><col style='width: 300px'><col style='width: 175px'></colgroup>" +
									"<thead>" +
									"  <tr>" +
									"    <th class='tg-0w9m' colspan='2'><span style='font-weight:bold'>Carrinhos / Suportes / Acessórios</span></th>" +
									"  </tr>" +
									"  <tr>" +
									"    <th class='tg-0w9m'><span style='font-weight:bold'>Descrição</span></th>" +
									"    <th class='tg-0w9m'>Estado Envio</th>" +
									"  </tr>" +
									"</thead><tbody>";
		    
		    var i = 1
		    do{
		    	tabelaAcessorios = tabelaAcessorios +
						"  <tr>" +
						"    <td class='tg-i7zr'>" + hAPI.getCardValue("NSERIEACESSORIOS___"+i) + "</td>" +
						"    <td class='tg-i7zr'>" + hAPI.getCardValue("ACESSORIOSSAIDA1___"+i)+hAPI.getCardValue("ACESSORIOSSAIDA2___"+i)+hAPI.getCardValue("ACESSORIOSSAIDA3___"+i) + "</td>" +
						"  </tr>";
			    i++
		    }while (i <= index)
	    
	    	tabelaAcessorios = tabelaAcessorios + "</tbody></table>";
		}
		//=========================================================================================================================================

	    parametros.put("TABELABATERIAS", tabelaBateria);
	    parametros.put("TABELACARREGADORES", tabelaCarregadores);
	    parametros.put("TABELAACESSORIOS", tabelaAcessorios);
	    
	    
	    var assunto = "Aviso de Mobilização de equipamento - Patrimônio: "+ hAPI.getCardValue("EQUIPAMENTO") +" - Centro de Custo de Destino: " + hAPI.getCardValue("CCDESTINO");
	    
	 
	    //Este parâmetro é obrigatório e representa o assunto do e-mail
	    parametros.put("subject", assunto);
	 
	    //Monta lista de destinatários
	    var destinatarios = new java.util.ArrayList();

	    destinatarios.add("arthur.evangelista@tradimaq.com.br");
	    destinatarios.add("barbara.costa@tradimaq.com.br");
	    destinatarios.add("raquel@tradimaq.com.br");
	    destinatarios.add(hAPI.getCardValue("EMAILREMETENTE"));
	    destinatarios.add(hAPI.getCardValue("EMAILDESTINATARIO"));
	 
	    //Envia e-mail
	    notifier.notify("008310", "020", parametros, destinatarios, "text/html");

		log.info("Email Checklist Movimentação de Ativos enviado!");
	 
	} catch(e){
	    log.info("Erro ao enviar email Checklist Movimentação de Ativos: " + e);
	}
}

function emailEmpilhadeiraCombustao(){
	try{
		
		log.info("Entrou TRY Envio de email Checklist Movimentação de Ativos (Empilhadeira a Combustão): ");
		

	    //Monta mapa com parâmetros do template
	    var parametros = new java.util.HashMap();
	    
	    parametros.put("EQUIPAMENTO", hAPI.getCardValue("EQUIPAMENTO"));
	    parametros.put("MODELO", hAPI.getCardValue("MODELO"));
	    parametros.put("SERIE", hAPI.getCardValue("SERIE"));
	    parametros.put("HORIMETRO", hAPI.getCardValue("HORIMETRO"));
	    parametros.put("ANO", hAPI.getCardValue("ANO"));
	    parametros.put("PLACA", hAPI.getCardValue("PLACA"));
	    parametros.put("CHASSI", hAPI.getCardValue("CHASSI"));
	    parametros.put("LOCALORIGEM", hAPI.getCardValue("LOCALORIGEM"));
	    parametros.put("CCORIGEM", hAPI.getCardValue("CCORIGEM"));
	    parametros.put("LOCDESTINO", hAPI.getCardValue("LOCDESTINO"));
	    parametros.put("CCDESTINO", hAPI.getCardValue("CCDESTINO"));
	    parametros.put("TIPOOPERACAO", hAPI.getCardValue("TIPOOPERACAO"));
	    if (hAPI.getCardValue("TIPOEQUIPAMENTO") == "MAQUINASECAMINHOES"){
	    	parametros.put("TIPOEQUIPAMENTO", "Máquinas e Caminhões");
	    } else if (hAPI.getCardValue("TIPOEQUIPAMENTO") == "MAQUINAELETRICA"){
	    	parametros.put("TIPOEQUIPAMENTO", "Máquina Elétrica");
	    } else if (hAPI.getCardValue("TIPOEQUIPAMENTO") == "EMPILHADEIRA"){
	    	parametros.put("TIPOEQUIPAMENTO", "Empilhadeira à Combustão");
	    }
	    
		parametros.put("ADESIVODEMODELOCAPACIDADESAIDA", hAPI.getCardValue("ADESIVODEMODELOCAPACIDADESAIDA"));
		parametros.put("ADESIVODETOMBAMENTOSAIDA", hAPI.getCardValue("ADESIVODETOMBAMENTOSAIDA"));
		parametros.put("ADESIVODEICAMENTOSAIDA", hAPI.getCardValue("ADESIVODEICAMENTOSAIDA"));
		parametros.put("CONTRAPESOSAIDA", hAPI.getCardValue("CONTRAPESOSAIDA"));
		parametros.put("CAPOSAIDA", hAPI.getCardValue("CAPOSAIDA"));
		parametros.put("EXTENSAOPARALAMASAIDA", hAPI.getCardValue("EXTENSAOPARALAMASAIDA"));
		parametros.put("GRADEPROTECAOCARGASAIDA", hAPI.getCardValue("GRADEPROTECAOCARGASAIDA"));
		parametros.put("DESLOCADORLATERALSAIDA", hAPI.getCardValue("DESLOCADORLATERALSAIDA"));
		parametros.put("AVENTALSAIDA", hAPI.getCardValue("AVENTALSAIDA"));
		parametros.put("EMPGARFOSSAIDA", hAPI.getCardValue("EMPGARFOSSAIDA"));
		parametros.put("ESTADOCORRENTESSAIDA", hAPI.getCardValue("ESTADOCORRENTESSAIDA"));
		parametros.put("ROLDANASDASCORRENTESSAIDA", hAPI.getCardValue("ROLDANASDASCORRENTESSAIDA"));
		parametros.put("BATENTESDEINCLINACAOSAIDA", hAPI.getCardValue("BATENTESDEINCLINACAOSAIDA"));
		parametros.put("EMPMANGUEIRASSAIDA", hAPI.getCardValue("EMPMANGUEIRASSAIDA"));
		parametros.put("CILINDROELEVACAOSAIDA", hAPI.getCardValue("CILINDROELEVACAOSAIDA"));
		parametros.put("CILINDROSELEVACAOSAIDA", hAPI.getCardValue("CILINDROSELEVACAOSAIDA"));
		parametros.put("EMBUXAMENTOTORRESAIDA", hAPI.getCardValue("EMBUXAMENTOTORRESAIDA"));
		parametros.put("ROLAMENTOSTORRESAIDA", hAPI.getCardValue("ROLAMENTOSTORRESAIDA"));
		parametros.put("FITAENCOSTOSUPERIORSAIDA", hAPI.getCardValue("FITAENCOSTOSUPERIORSAIDA"));
		parametros.put("BOMBASAIDA", hAPI.getCardValue("BOMBASAIDA"));
		parametros.put("CONVERSORSAIDA", hAPI.getCardValue("CONVERSORSAIDA"));
		parametros.put("PACOTEFRENTE1SAIDA", hAPI.getCardValue("PACOTEFRENTE1SAIDA"));
		parametros.put("PACOTEFRENTE2SAIDA", hAPI.getCardValue("PACOTEFRENTE2SAIDA"));
		parametros.put("PACOTEFRENTE3SAIDA", hAPI.getCardValue("PACOTEFRENTE3SAIDA"));
		parametros.put("PACOTERE1SAIDA", hAPI.getCardValue("PACOTERE1SAIDA"));
		parametros.put("PACOTERE2SAIDA", hAPI.getCardValue("PACOTERE2SAIDA"));
		parametros.put("PNEUSSUPERELASTICOSSAIDA", hAPI.getCardValue("PNEUSSUPERELASTICOSSAIDA"));
		parametros.put("PNEUSPNEUMATICOSSAIDA", hAPI.getCardValue("PNEUSPNEUMATICOSSAIDA"));
		parametros.put("PRISIONEIROSPORCASRODASAIDA", hAPI.getCardValue("PRISIONEIROSPORCASRODASAIDA"));
		parametros.put("RODASSAIDA", hAPI.getCardValue("RODASSAIDA"));
		parametros.put("PINTURAGERALSAIDA", hAPI.getCardValue("PINTURAGERALSAIDA"));
		parametros.put("CONDICOESDALATARIASAIDA", hAPI.getCardValue("CONDICOESDALATARIASAIDA"));
		parametros.put("OLEOMOTORSAIDA", hAPI.getCardValue("OLEOMOTORSAIDA"));
		parametros.put("OLEOTRANSMICAOSAIDA", hAPI.getCardValue("OLEOTRANSMICAOSAIDA"));
		parametros.put("OLEODIFERENCIALSAIDA", hAPI.getCardValue("OLEODIFERENCIALSAIDA"));
		parametros.put("FLUIDOFREIOSAIDA", hAPI.getCardValue("FLUIDOFREIOSAIDA"));
		parametros.put("RESERVATORIOAGUASAIDA", hAPI.getCardValue("RESERVATORIOAGUASAIDA"));
		parametros.put("OLEOHIDRAULICOSAIDA", hAPI.getCardValue("OLEOHIDRAULICOSAIDA"));
		parametros.put("CORREIAVENTILADORSAIDA", hAPI.getCardValue("CORREIAVENTILADORSAIDA"));
		parametros.put("CORREIAALTERNADORSAIDA", hAPI.getCardValue("CORREIAALTERNADORSAIDA"));
		parametros.put("FAROISSAIDA", hAPI.getCardValue("EMPFAROISSAIDA"));
		parametros.put("LANTERNASSAIDA", hAPI.getCardValue("EMPLANTERNASSAIDA"));
		parametros.put("PAINELDISPLAYSAIDA", hAPI.getCardValue("PAINELDISPLAYSAIDA"));
		parametros.put("EMPALARMERESAIDA", hAPI.getCardValue("EMPALARMERESAIDA"));
		parametros.put("EMPBUZINASAIDA", hAPI.getCardValue("EMPBUZINASAIDA"));
		parametros.put("FUNCIONAMENTOALTERNADORSAIDA", hAPI.getCardValue("FUNCIONAMENTOALTERNADORSAIDA"));
		parametros.put("FUNCIONAMENTOMOTORPARTIDASAIDA", hAPI.getCardValue("FUNCIONAMENTOMOTORPARTIDASAIDA"));
		parametros.put("INDICTEMPERATURAMOTORSAIDA", hAPI.getCardValue("INDICTEMPERATURAMOTORSAIDA"));
		parametros.put("ALAVANCASBOTOESSAIDA", hAPI.getCardValue("ALAVANCASBOTOESSAIDA"));
		parametros.put("INDICTEMPTRANSMISSAOSAIDA", hAPI.getCardValue("INDICTEMPTRANSMISSAOSAIDA"));
		parametros.put("EMPGIROFLEXSAIDA", hAPI.getCardValue("EMPGIROFLEXSAIDA"));
		parametros.put("BLUESPOTSAIDA", hAPI.getCardValue("BLUESPOTSAIDA"));
		parametros.put("LEDSAZUISSAIDA", hAPI.getCardValue("LEDSAZUISSAIDA"));
		parametros.put("LIMPADORPARABRISASAIDA", hAPI.getCardValue("LIMPADORPARABRISASAIDA"));
		parametros.put("ARCONDICIONADOSAIDA", hAPI.getCardValue("EMPARCONDICIONADOSAIDA"));
		parametros.put("KITFECHAMENTOSAIDA", hAPI.getCardValue("KITFECHAMENTOSAIDA"));
		parametros.put("BANCOOPERADORSAIDA", hAPI.getCardValue("BANCOOPERADORSAIDA"));
		parametros.put("EXTINTORINCENDIOSAIDA", hAPI.getCardValue("EXTINTORINCENDIOSAIDA"));
		parametros.put("CINTOSEGURANCASAIDA", hAPI.getCardValue("CINTOSEGURANCASAIDA"));
		parametros.put("ESPELHOSRETROVISORESSAIDA", hAPI.getCardValue("ESPELHOSRETROVISORESSAIDA"));
		parametros.put("PLAQUETAIDENTIFICACAOSAIDA", hAPI.getCardValue("PLAQUETAIDENTIFICACAOSAIDA"));
		parametros.put("TAPETESAIDA", hAPI.getCardValue("TAPETESAIDA"));
		parametros.put("QUADRODIRECIONALSAIDA", hAPI.getCardValue("QUADRODIRECIONALSAIDA"));
		parametros.put("CILINDRODIRECAOSAIDA", hAPI.getCardValue("CILINDRODIRECAOSAIDA"));
		parametros.put("MANGAEIXOSAIDA", hAPI.getCardValue("MANGAEIXOSAIDA"));
		parametros.put("MANGUEIRASDIRECAOSAIDA", hAPI.getCardValue("MANGUEIRASDIRECAOSAIDA"));
		parametros.put("EMBUXAMENTODIRECAOSAIDA", hAPI.getCardValue("EMBUXAMENTODIRECAOSAIDA"));
		parametros.put("MARCHALENTASAIDA", hAPI.getCardValue("MARCHALENTASAIDA"));
		parametros.put("MAXIMAROTACAOSAIDA", hAPI.getCardValue("MAXIMAROTACAOSAIDA"));
		parametros.put("CILINDRO1SAIDA", hAPI.getCardValue("CILINDRO1SAIDA"));
		parametros.put("CILINDRO2SAIDA", hAPI.getCardValue("CILINDRO2SAIDA"));
		parametros.put("CILINDRO3SAIDA", hAPI.getCardValue("CILINDRO3SAIDA"));
		parametros.put("CILINDRO4SAIDA", hAPI.getCardValue("CILINDRO4SAIDA"));
		parametros.put("CILINDRO5SAIDA", hAPI.getCardValue("CILINDRO5SAIDA"));
		parametros.put("CILINDRO6SAIDA", hAPI.getCardValue("CILINDRO6SAIDA"));
		parametros.put("EMPFREIOESTACIONAMENTOSAI", hAPI.getCardValue("EMPFREIOESTACIONAMENTOSAI"));
		parametros.put("FREIOSERVICOSAIDA", hAPI.getCardValue("FREIOSERVICOSAIDA"));
		parametros.put("NIVELAGUASAIDA", hAPI.getCardValue("NIVELAGUASAIDA"));
		parametros.put("TENSAONOMINALSAIDA", hAPI.getCardValue("TENSAONOMINALSAIDA"));
		parametros.put("DENSIDADEDOSELEMENTOSSAIDA", hAPI.getCardValue("DENSIDADEDOSELEMENTOSSAIDA"));
		parametros.put("ESTADOBANCOBATERIASSAIDA", hAPI.getCardValue("ESTADOBANCOBATERIASSAIDA"));
		parametros.put("PRESSAOINCLINACAOSAIDA", hAPI.getCardValue("PRESSAOINCLINACAOSAIDA"));
		parametros.put("PRESSAODIRECAOSAIDA", hAPI.getCardValue("PRESSAODIRECAOSAIDA"));
		parametros.put("PRESSAOELECACAOSAIDA", hAPI.getCardValue("PRESSAOELECACAOSAIDA"));
		parametros.put("IMPLEMENTOSAIDA", hAPI.getCardValue("IMPLEMENTOSAIDA"));
		parametros.put("COMANDOHIDRAULICOSAIDA", hAPI.getCardValue("EMPCOMANDOHIDRAULICOSAIDA"));
		parametros.put("MANGUEIRASHIDRAULICOSAIDA", hAPI.getCardValue("MANGUEIRASHIDRAULICOSAIDA"));	 
	   
			
	    
		var assunto = "Aviso de Mobilização de equipamento - Patrimônio: "+ hAPI.getCardValue("EQUIPAMENTO") +" - Centro de Custo de Destino: " + hAPI.getCardValue("CCDESTINO");
	    
	 
	    //Este parâmetro é obrigatório e representa o assunto do e-mail
	    parametros.put("subject", assunto);
	 
	    //Monta lista de destinatários
	    var destinatarios = new java.util.ArrayList();

	    destinatarios.add("arthur.evangelista@tradimaq.com.br");
	    destinatarios.add("barbara.costa@tradimaq.com.br");
	    destinatarios.add("raquel@tradimaq.com.br");
	    destinatarios.add(hAPI.getCardValue("EMAILREMETENTE"));
	    destinatarios.add(hAPI.getCardValue("EMAILDESTINATARIO"));
	 
	    //Envia e-mail
	    notifier.notify("008310", "021", parametros, destinatarios, "text/html");

		log.info("Email Checklist Movimentação de Ativos enviado!");
	 
	} catch(e){
	    log.info("Erro ao enviar email Checklist Movimentação de Ativos: " + e);
	}
}

function emailMaquinasCaminhoes(){
	try{
		
		log.info("Entrou TRY Envio de email Checklist Movimentação de Ativos (Maquinas e Caminhões): ");
		

	    //Monta mapa com parâmetros do template
	    var parametros = new java.util.HashMap();
	    
	    parametros.put("EQUIPAMENTO", hAPI.getCardValue("EQUIPAMENTO"));
	    parametros.put("MODELO", hAPI.getCardValue("MODELO"));
	    parametros.put("SERIE", hAPI.getCardValue("SERIE"));
	    parametros.put("HORIMETRO", hAPI.getCardValue("HORIMETRO"));
	    parametros.put("ANO", hAPI.getCardValue("ANO"));
	    parametros.put("PLACA", hAPI.getCardValue("PLACA"));
	    parametros.put("CHASSI", hAPI.getCardValue("CHASSI"));
	    parametros.put("LOCALORIGEM", hAPI.getCardValue("LOCALORIGEM"));
	    parametros.put("CCORIGEM", hAPI.getCardValue("CCORIGEM"));
	    parametros.put("LOCDESTINO", hAPI.getCardValue("LOCDESTINO"));
	    parametros.put("CCDESTINO", hAPI.getCardValue("CCDESTINO"));
	    parametros.put("TIPOOPERACAO", hAPI.getCardValue("TIPOOPERACAO"));
	    if (hAPI.getCardValue("TIPOEQUIPAMENTO") == "MAQUINASECAMINHOES"){
	    	parametros.put("TIPOEQUIPAMENTO", "Máquinas e Caminhões");
	    } else if (hAPI.getCardValue("TIPOEQUIPAMENTO") == "MAQUINAELETRICA"){
	    	parametros.put("TIPOEQUIPAMENTO", "Máquina Elétrica");
	    } else if (hAPI.getCardValue("TIPOEQUIPAMENTO") == "EMPILHADEIRA"){
	    	parametros.put("TIPOEQUIPAMENTO", "Empilhadeira à Combustão");
	    }
	    
		parametros.put("FUNCIONAMENTOMOTORSAIDA", hAPI.getCardValue("FUNCIONAMENTOMOTORSAIDA"));
		parametros.put("RUIDOSMOTORSAIDA", hAPI.getCardValue("RUIDOSMOTORSAIDA"));
		parametros.put("NIVELDEOLEOSAIDA", hAPI.getCardValue("NIVELDEOLEOSAIDA"));
		parametros.put("SISTEMADEARREFECIMENTOSAIDA", hAPI.getCardValue("SISTEMADEARREFECIMENTOSAIDA"));
		parametros.put("NIVELLIQUIDOARREFECIMENTOSAIDA", hAPI.getCardValue("NIVELLIQUIDOARREFECIMENTOSAIDA"));
		parametros.put("TEMPERATURADOMOTORSAIDA", hAPI.getCardValue("TEMPERATURADOMOTORSAIDA"));
		parametros.put("FILTROSDEARSAIDA", hAPI.getCardValue("FILTROSDEARSAIDA"));
		parametros.put("SEPARADORAGUACOMBUSTIVELSAIDA", hAPI.getCardValue("SEPARADORAGUACOMBUSTIVELSAIDA"));
		parametros.put("CORREIASDOMOTORSAIDA", hAPI.getCardValue("CORREIASDOMOTORSAIDA"));
		parametros.put("POLIASETENSORESSAIDA", hAPI.getCardValue("POLIASETENSORESSAIDA"));
		parametros.put("INTERCOOLERSAIDA", hAPI.getCardValue("INTERCOOLERSAIDA"));
		parametros.put("COXINSESUPORTESAIDA", hAPI.getCardValue("COXINSESUPORTESAIDA"));
		parametros.put("TURBINASAIDA", hAPI.getCardValue("TURBINASAIDA"));
		parametros.put("SISTEMADEESCAPESAIDA", hAPI.getCardValue("SISTEMADEESCAPESAIDA"));
		parametros.put("VAZAMENTOSSAIDA", hAPI.getCardValue("VAZAMENTOSSAIDA"));
		parametros.put("MANGUEIRASEABRACADEIRASSAIDA", hAPI.getCardValue("MANGUEIRASEABRACADEIRASSAIDA"));
		parametros.put("CONDICOESDAFUMACASAIDA", hAPI.getCardValue("CONDICOESDAFUMACASAIDA"));
		parametros.put("COMPRESSORDEARSAIDA", hAPI.getCardValue("COMPRESSORDEARSAIDA"));
		parametros.put("VALVULADESEGURANCASAIDA", hAPI.getCardValue("VALVULADESEGURANCASAIDA"));
		parametros.put("VALVULAAPUAPSSAIDA", hAPI.getCardValue("VALVULAAPUAPSSAIDA"));
		parametros.put("VALVULAPEDALSAIDA", hAPI.getCardValue("VALVULAPEDALSAIDA"));
		parametros.put("LONAPASTILHASAIDA", hAPI.getCardValue("LONAPASTILHASAIDA"));
		parametros.put("BALAODEARSAIDA", hAPI.getCardValue("BALAODEARSAIDA"));
		parametros.put("TESTEDEFRENAGEMSAIDA", hAPI.getCardValue("TESTEDEFRENAGEMSAIDA"));
		parametros.put("FREIODEESTACIONAMENTOSAIDA", hAPI.getCardValue("FREIODEESTACIONAMENTOSAIDA"));
		parametros.put("FREIOMOTORSAIDA", hAPI.getCardValue("FREIOMOTORSAIDA"));
		parametros.put("NIVELDEOLEOFREIOSAIDA", hAPI.getCardValue("NIVELDEOLEOFREIOSAIDA"));
		parametros.put("FREIOSAUXILIARESSAIDA", hAPI.getCardValue("FREIOSAUXILIARESSAIDA"));
		parametros.put("TRINCASPARAFUSOSQUEBRADOSSAIDA", hAPI.getCardValue("TRINCASPARAFUSOSQUEBRADOSSAIDA"));
		parametros.put("PARALAMASSAIDA", hAPI.getCardValue("PARALAMASSAIDA"));
		parametros.put("PARABARROSAIDA", hAPI.getCardValue("PARABARROSAIDA"));
		parametros.put("EXTRATORESDEPEDRASAIDA", hAPI.getCardValue("EXTRATORESDEPEDRASAIDA"));
		parametros.put("PONTOSDEGRAXASAIDA", hAPI.getCardValue("PONTOSDEGRAXASAIDA"));
		parametros.put("PLACAPINTURAESELOSAIDA", hAPI.getCardValue("PLACAPINTURAESELOSAIDA"));
		parametros.put("MOLASSAIDA", hAPI.getCardValue("MOLASSAIDA"));
		parametros.put("GRAMPOSSAIDA", hAPI.getCardValue("GRAMPOSSAIDA"));
		parametros.put("PARAFUSOSDECENTROSAIDA", hAPI.getCardValue("PARAFUSOSDECENTROSAIDA"));
		parametros.put("PINOSEBUXASSAIDA", hAPI.getCardValue("PINOSEBUXASSAIDA"));
		parametros.put("SUPORTESSAIDA", hAPI.getCardValue("SUPORTESSAIDA"));
		parametros.put("AMORTECEDORSAIDA", hAPI.getCardValue("AMORTECEDORSAIDA"));
		parametros.put("MANGADEEIXOSAIDA", hAPI.getCardValue("MANGADEEIXOSAIDA"));
		parametros.put("LUBRIFICACAOPONTOSDEGRAXASAIDA", hAPI.getCardValue("LUBRIFICACAOPONTOSDEGRAXASAIDA"));
		parametros.put("BIELETASAIDA", hAPI.getCardValue("BIELETASAIDA"));
		parametros.put("BARRAESTABILIZADORASAIDA", hAPI.getCardValue("BARRAESTABILIZADORASAIDA"));
		parametros.put("ESTADODECONSERVACAOSAIDA", hAPI.getCardValue("ESTADODECONSERVACAOSAIDA"));
		parametros.put("LINHASHIDRAULICASSAIDA", hAPI.getCardValue("LINHASHIDRAULICASSAIDA"));
		parametros.put("CABOSDEACOSAIDA", hAPI.getCardValue("CABOSDEACOSAIDA"));
		parametros.put("FIXACAODEIMPLEMENTOSAIDA", hAPI.getCardValue("FIXACAODEIMPLEMENTOSAIDA"));
		parametros.put("FAIXASREFLETIVASSAIDA", hAPI.getCardValue("FAIXASREFLETIVASSAIDA"));
		parametros.put("QUINTARODASAIDA", hAPI.getCardValue("QUINTARODASAIDA"));
		parametros.put("TOMADADEFORCASAIDA", hAPI.getCardValue("TOMADADEFORCASAIDA"));
		parametros.put("PINOREISAIDA", hAPI.getCardValue("PINOREISAIDA"));
		parametros.put("BARRASDEIRRIGACAOPIPASAIDA", hAPI.getCardValue("BARRASDEIRRIGACAOPIPASAIDA"));
		parametros.put("ELETROVALVULACOMREGISTROSSAIDA", hAPI.getCardValue("ELETROVALVULACOMREGISTROSSAIDA"));
		parametros.put("BOMBADAGUASAIDA", hAPI.getCardValue("BOMBADAGUASAIDA"));
		parametros.put("REDUTORSAIDA", hAPI.getCardValue("REDUTORSAIDA"));
		parametros.put("TRINCASEMCHASSISSAIDA", hAPI.getCardValue("TRINCASEMCHASSISSAIDA"));
		parametros.put("OLHAISDEARTICULACAOSAIDA", hAPI.getCardValue("OLHAISDEARTICULACAOSAIDA"));
		parametros.put("CORRENTESBRACOSARTICULADOSSAID", hAPI.getCardValue("CORRENTESBRACOSARTICULADOSSAID"));
		parametros.put("VAZAMENTOSIMPLEMENTOSSAIDA", hAPI.getCardValue("VAZAMENTOSIMPLEMENTOSSAIDA"));
		parametros.put("EMBUCHAMENTOSSAIDA", hAPI.getCardValue("EMBUCHAMENTOSSAIDA"));
		parametros.put("SIRENEDERESAIDA", hAPI.getCardValue("SIRENEDERESAIDA"));
		parametros.put("MOTORDEPARTIDASAIDA", hAPI.getCardValue("MOTORDEPARTIDASAIDA"));
		parametros.put("ALTERNADORDOMOTORSAIDA", hAPI.getCardValue("ALTERNADORDOMOTORSAIDA"));
		parametros.put("FAROISSAIDA", hAPI.getCardValue("FAROISSAIDA"));
		parametros.put("FAROISAUXILIARESSAIDA", hAPI.getCardValue("FAROISAUXILIARESSAIDA"));
		parametros.put("LANTERNASSAIDA", hAPI.getCardValue("LANTERNASSAIDA"));
		parametros.put("REFLETORESSAIDA", hAPI.getCardValue("REFLETORESSAIDA"));
		parametros.put("LAMPADASDOSREFLETORESSAIDA", hAPI.getCardValue("LAMPADASDOSREFLETORESSAIDA"));
		parametros.put("LUZDEFREIOSAIDA", hAPI.getCardValue("LUZDEFREIOSAIDA"));
		parametros.put("LUZDERESAIDA", hAPI.getCardValue("LUZDERESAIDA"));
		parametros.put("ILUMINACAOINTERNASAIDA", hAPI.getCardValue("ILUMINACAOINTERNASAIDA"));
		parametros.put("CHICOTEELETRICOSAIDA", hAPI.getCardValue("CHICOTEELETRICOSAIDA"));
		parametros.put("BATERIASAIDA", hAPI.getCardValue("BATERIASAIDA"));
		parametros.put("BUZINASSAIDA", hAPI.getCardValue("BUZINASSAIDA"));
		parametros.put("GERADORDEENERGIASAIDA", hAPI.getCardValue("GERADORDEENERGIASAIDA"));
		parametros.put("CODIGOSDEFALHASAIDA", hAPI.getCardValue("CODIGOSDEFALHASAIDA"));
		parametros.put("TRANSMISSAOCAIXADEMARCHASSAIDA", hAPI.getCardValue("TRANSMISSAOCAIXADEMARCHASSAIDA"));
		parametros.put("NIVELOLEOTRANSMISSAOSAIDA", hAPI.getCardValue("NIVELOLEOTRANSMISSAOSAIDA"));
		parametros.put("DIFERENCIALSAIDA", hAPI.getCardValue("DIFERENCIALSAIDA"));
		parametros.put("BLOQUEIODEDIFERENCIALSAIDA", hAPI.getCardValue("BLOQUEIODEDIFERENCIALSAIDA"));
		parametros.put("NIVELOLEODIFERENCIALSAIDA", hAPI.getCardValue("NIVELOLEODIFERENCIALSAIDA"));
		parametros.put("CRUZETASECARDANSSAIDA", hAPI.getCardValue("CRUZETASECARDANSSAIDA"));
		parametros.put("ROLAMENTOSSAIDA", hAPI.getCardValue("ROLAMENTOSSAIDA"));
		parametros.put("VAZAMENTOSTRANSMISSOESSAIDA", hAPI.getCardValue("VAZAMENTOSTRANSMISSOESSAIDA"));
		parametros.put("RUIDOSSAIDA", hAPI.getCardValue("RUIDOSSAIDA"));
		parametros.put("RUIDOSCOMANDOSSAIDA", hAPI.getCardValue("RUIDOSCOMANDOSSAIDA"));
		parametros.put("VAZAMENTOSCOMANDOSSAIDA", hAPI.getCardValue("VAZAMENTOSCOMANDOSSAIDA"));
		parametros.put("PARABRISASAIDA", hAPI.getCardValue("PARABRISASAIDA"));
		parametros.put("RETROVISORESSAIDA", hAPI.getCardValue("RETROVISORESSAIDA"));
		parametros.put("VIDROSSAIDA", hAPI.getCardValue("VIDROSSAIDA"));	 
		parametros.put("QUEBRASOLSAIDA", hAPI.getCardValue("QUEBRASOLSAIDA"));
		parametros.put("TAPECARIASAIDA", hAPI.getCardValue("TAPECARIASAIDA"));
		parametros.put("PREFIXOSLOGOTIPOSSAIDA", hAPI.getCardValue("PREFIXOSLOGOTIPOSSAIDA"));
		parametros.put("SUSPENSAODACABINESAIDA", hAPI.getCardValue("SUSPENSAODACABINESAIDA"));
		parametros.put("ESTADODACABINESAIDA", hAPI.getCardValue("ESTADODACABINESAIDA"));
		parametros.put("PINTURASAIDA", hAPI.getCardValue("PINTURASAIDA"));
		parametros.put("CORRIMAOSAIDA", hAPI.getCardValue("CORRIMAOSAIDA"));
		parametros.put("ESTRIBOSSAIDA", hAPI.getCardValue("ESTRIBOSSAIDA"));
		parametros.put("PORTATRANCASAIDA", hAPI.getCardValue("PORTATRANCASAIDA"));
		parametros.put("CINTODESEGURANCASAIDA", hAPI.getCardValue("CINTODESEGURANCASAIDA"));
		parametros.put("LIMPADORESSAIDA", hAPI.getCardValue("LIMPADORESSAIDA"));
		parametros.put("ESTADODOSBANCOSSAIDA", hAPI.getCardValue("ESTADODOSBANCOSSAIDA"));
		parametros.put("PAINELDEINSTRUMENTOSSAIDA", hAPI.getCardValue("PAINELDEINSTRUMENTOSSAIDA"));
		parametros.put("HORIMETROCABINESAIDA", hAPI.getCardValue("HORIMETROCABINESAIDA"));
		parametros.put("CODIGODEFALHASAIDA", hAPI.getCardValue("CODIGODEFALHASAIDA"));
		parametros.put("DIFUSORESDEARSAIDA", hAPI.getCardValue("DIFUSORESDEARSAIDA"));
		parametros.put("CLIMATIZADORSAIDA", hAPI.getCardValue("CLIMATIZADORSAIDA"));
		parametros.put("ARCONDICIONADOSAIDA", hAPI.getCardValue("ARCONDICIONADOSAIDA"));
		parametros.put("BASCULAMENTODECABINESAIDA", hAPI.getCardValue("BASCULAMENTODECABINESAIDA"));
		parametros.put("LAMINASESAIDA", hAPI.getCardValue("LAMINASESAIDA"));
		parametros.put("BORDASESAIDA", hAPI.getCardValue("BORDASESAIDA"));
		parametros.put("CANTOSDELAMINASAIDA", hAPI.getCardValue("CANTOSDELAMINASAIDA"));
		parametros.put("ADAPTADORESSAIDA", hAPI.getCardValue("ADAPTADORESSAIDA"));
		parametros.put("DENTESEENTREDENTESSAIDA", hAPI.getCardValue("DENTESEENTREDENTESSAIDA"));
		parametros.put("CALCOSDAMESAELAMINASESAIDA", hAPI.getCardValue("CALCOSDAMESAELAMINASESAIDA"));
		parametros.put("ESCARIFICADORESSAIDA", hAPI.getCardValue("ESCARIFICADORESSAIDA"));
		parametros.put("NIVELDEOLEOHIDRAULICOSAIDA", hAPI.getCardValue("NIVELDEOLEOHIDRAULICOSAIDA"));
		parametros.put("MANGUEIRASSAIDA", hAPI.getCardValue("MANGUEIRASSAIDA"));
		parametros.put("COMANDOHIDRAULICOSAIDA", hAPI.getCardValue("COMANDOHIDRAULICOSAIDA"));
		parametros.put("CILINDROSHIDRAULICOSSAIDA", hAPI.getCardValue("CILINDROSHIDRAULICOSSAIDA"));
		parametros.put("LINHASHIDRAULICASHIDRASAIDA", hAPI.getCardValue("LINHASHIDRAULICASHIDRASAIDA"));
		parametros.put("BOMBASEMOTORESHIDRAULICOSSAIDA", hAPI.getCardValue("BOMBASEMOTORESHIDRAULICOSSAIDA"));
		parametros.put("MOTORESHIDRAULICOSSAIDA", hAPI.getCardValue("MOTORESHIDRAULICOSSAIDA"));
		parametros.put("RUIDOSHIDRAULICOSAIDA", hAPI.getCardValue("RUIDOSHIDRAULICOSAIDA"));
		parametros.put("VAZAMENTOSHIDRAULICOSSAIDA", hAPI.getCardValue("VAZAMENTOSHIDRAULICOSSAIDA"));
		parametros.put("VERIFICARNIVELDEOLEOSAIDA", hAPI.getCardValue("VERIFICARNIVELDEOLEOSAIDA"));
		parametros.put("SETORDEDIRECAOSAIDA", hAPI.getCardValue("SETORDEDIRECAOSAIDA"));
		parametros.put("BARRASDEDIRECAOSAIDA", hAPI.getCardValue("BARRASDEDIRECAOSAIDA"));
		parametros.put("BOMBADEDIRECAOSAIDA", hAPI.getCardValue("BOMBADEDIRECAOSAIDA"));
		parametros.put("TERMINAISSAIDA", hAPI.getCardValue("TERMINAISSAIDA"));
		parametros.put("CILINDROSHIDRAULICOSDIRECSAIDA", hAPI.getCardValue("CILINDROSHIDRAULICOSDIRECSAIDA"));
		parametros.put("LINHASHIDRAULICASDIRECAOSAIDA", hAPI.getCardValue("LINHASHIDRAULICASDIRECAOSAIDA"));
		parametros.put("RUIDOSDIRECAOSAIDA", hAPI.getCardValue("RUIDOSDIRECAOSAIDA"));
		parametros.put("VAZAMENTOSDIRECAOSAIDA", hAPI.getCardValue("VAZAMENTOSDIRECAOSAIDA"));
		parametros.put("EXTINTORSAIDA", hAPI.getCardValue("EXTINTORSAIDA"));
		parametros.put("CHAVEDERODASAIDA", hAPI.getCardValue("CHAVEDERODASAIDA"));
		parametros.put("MACACOSAIDA", hAPI.getCardValue("MACACOSAIDA"));
		parametros.put("TRIANGULOSAIDA", hAPI.getCardValue("TRIANGULOSAIDA"));
		parametros.put("PISOSAIDA", hAPI.getCardValue("PISOSAIDA"));
		parametros.put("ESCAPAMENTOSAIDA", hAPI.getCardValue("ESCAPAMENTOSAIDA"));
		parametros.put("CHAVEDEIGNICAOSAIDA", hAPI.getCardValue("CHAVEDEIGNICAOSAIDA"));
		parametros.put("LIMPEZAGERALSAIDA", hAPI.getCardValue("LIMPEZAGERALSAIDA"));
		parametros.put("PNEUSSAIDA", hAPI.getCardValue("PNEUSSAIDA"));
		parametros.put("ESTEPESAIDA", hAPI.getCardValue("ESTEPESAIDA"));
		parametros.put("RODASESEUSPARAFUSOSSAIDA", hAPI.getCardValue("RODASESEUSPARAFUSOSSAIDA"));
		parametros.put("SEGMENTOSMOTRIZSAIDA", hAPI.getCardValue("SEGMENTOSMOTRIZSAIDA")); 
		parametros.put("ROLETESINFERIORESSAIDA", hAPI.getCardValue("ROLETESINFERIORESSAIDA")); 
		parametros.put("ROLETESSUPERIORESSAIDA", hAPI.getCardValue("ROLETESSUPERIORESSAIDA"));
		parametros.put("RODASGUIASSAIDA", hAPI.getCardValue("RODASGUIASSAIDA"));
		parametros.put("TENSORESSAIDA", hAPI.getCardValue("TENSORESSAIDA"));
		parametros.put("CORRENTEDEESTEIRASAIDA", hAPI.getCardValue("CORRENTEDEESTEIRASAIDA"));
		parametros.put("SAPATASDAESTEIRASAIDA", hAPI.getCardValue("SAPATASDAESTEIRASAIDA"));
		parametros.put("PINOSEBUCHASSAIDA", hAPI.getCardValue("PINOSEBUCHASSAIDA"));
	 
		//=========================================================================================================================================
	    var index = hAPI.getChildrenIndexes("TABELA_OUTROS").length;
	    var tabelaOutros = ""
	    if(index >= 1){
		    var tabelaOutros = "<table class='tg' style='undefined;table-layout: fixed; width: 650px' align='center'>" +
								"<colgroup>" +
								"<col style='width: 125px'>" +
								"<col style='width: 275px'>" +
								"<col style='width: 125px'>" +
								"</colgroup>" +
								"<thead>" +
								"  <tr>" +
								"    <th class='tg-wzu8' colspan='3'>Outros</th>" +
								"  </tr>" +
								"</thead>" +
								"<tbody>" +
								"  <tr>" +
								"    <td class='tg-wzu8'>#</td>" +
								"    <td class='tg-wzu8'>Descrição</td>" +
								"    <td class='tg-wzu8'>Estado</td>" +
								"  </tr>";
		    
		    var i = 1
		    do{
		    	tabelaOutros = tabelaOutros +
						"<tr>" +
					    "  <td class='tg-wzu8'>15."+ i +"</td>" +
					    "  <td class='tg-gvcd'>" + hAPI.getCardValue("OUTROS1DESCRICAO___"+i) + "</td>" +
					    "  <td class='tg-gvcd'>" + hAPI.getCardValue("OUTROSSAIDA1___"+i)+hAPI.getCardValue("OUTROSSAIDA2___"+i)+hAPI.getCardValue("OUTROSSAIDA3___"+i) + "</td>" +
					    "</tr>" +
			    i++
		    }while (i <= index)
	    
	    	tabelaOutros = tabelaOutros + "</tbody></table>";
	    }
		//=========================================================================================================================================

		parametros.put("TABELAOUTROS", tabelaOutros);
	    
		var assunto = "Aviso de Mobilização de equipamento - Patrimônio: "+ hAPI.getCardValue("EQUIPAMENTO") +" - Centro de Custo de Destino: " + hAPI.getCardValue("CCDESTINO");
	    	 
	    //Este parâmetro é obrigatório e representa o assunto do e-mail
	    parametros.put("subject", assunto);
	 
	    //Monta lista de destinatários
	    var destinatarios = new java.util.ArrayList();

	    destinatarios.add("arthur.evangelista@tradimaq.com.br");
	    destinatarios.add("barbara.costa@tradimaq.com.br");
	    destinatarios.add("raquel@tradimaq.com.br");
	    destinatarios.add(hAPI.getCardValue("EMAILREMETENTE"));
	    destinatarios.add(hAPI.getCardValue("EMAILDESTINATARIO"));
	 
	    //Envia e-mail
	    notifier.notify("008310", "022", parametros, destinatarios, "text/html");

		log.info("Email Checklist Movimentação de Ativos enviado!");
	 
	} catch(e){
	    log.info("Erro ao enviar email Checklist Movimentação de Ativos: " + e);
	}
}