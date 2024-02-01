function validateForm(form){
	
	var NumeroPros = getValue("WKNumState");
	var NextPros = getValue("WKNextState");


	var msg = "<hr><h4>Erro:</h4><p>";

	if (NumeroPros == "0" || NumeroPros == "4"){
		msg += validacaoInicio(form, NextPros);
	}
	//==============================================================================================================================================
	if (NumeroPros == "5" && form.getValue("TIPOEQUIPAMENTO") == "MAQUINASECAMINHOES"){
		//msg += validacaoCheckListMaquinasECaminhoesSaida(form, NextPros);
	} else if (NumeroPros == "5" && form.getValue("TIPOEQUIPAMENTO") == "MAQUINAELETRICA"){
		//msg += validacaoCheckListMaquinasEletricasSaida(form, NextPros);
	} else if (NumeroPros == "5" && form.getValue("TIPOEQUIPAMENTO") == "EMPILHADEIRA"){
		msg += validacaoCheckListEmpilhadeirasSaida(form, NextPros);
	}
	//==============================================================================================================================================
	if (NumeroPros == "48"){
		msg += validacaoAprovacaoChecklistSaida(form, NextPros);
	}
	//==============================================================================================================================================
	if (NumeroPros == "16"){
		msg += validacaoAceiteMobilizacao(form, NextPros);
	}
	//==============================================================================================================================================
	if (NumeroPros == "20"){
		msg += validacaoAnaliseDeFrete(form, NextPros);
	}
	//==============================================================================================================================================
//	if (NumeroPros == "81" || NumeroPros == "110"){
//		msg += validacaoSolicitacaoDeFrete(form, NextPros);
//	}
	//==============================================================================================================================================
	if (NumeroPros == "31"){
		msg += validacaoSolicitacaoNF(form, NextPros);
	}
	//==============================================================================================================================================
	if (NumeroPros == "33"){
		msg += validacaoEmissaoNF(form, NextPros);
	}
	//==============================================================================================================================================
	if (NumeroPros == "54"){
		msg += validacaoDeAcordoChecklistEntrada(form, NextPros);
	}
	//==============================================================================================================================================
	if (NumeroPros == "116"){
		msg += validacaoLevantamentoManutencaoSaida(form, NextPros);
	}
	//==============================================================================================================================================
	if (NumeroPros == "58"){
		msg += validacaoLevantamentoManutencaoEntrada(form, NextPros);
	}
	//==============================================================================================================================================
	if (NumeroPros == "118"){
		msg += validacaoAprovacaoRmRsSaida(form, NextPros);
	}
	//==============================================================================================================================================
	if (NumeroPros == "66"){
		msg += validacaoAprovacaoRmRsEntrada(form, NextPros);
	}
	//==============================================================================================================================================
	if (NumeroPros == "39"){
		msg += validacaoAlocacaoPCM(form, NextPros);
	}
	//==============================================================================================================================================
	if (msg != "<hr><h4>Erro:</h4><p>"){
		msg += "</p><hr>"; 
		throw msg;
	}
}
//==============================================================================================================================================
function validacaoInicio(form, NextPros){
	var msg = "";
	if (form.getValue("EQUIPAMENTO") == ""){
		msg += "Escolha uma ativo para seguir o processo.\n";
	}
	if (form.getValue("DATAENVIO") == ""){
		msg += "Preencha o campo Data prevista de envio.\n";
	}
	if (form.getValue("LOCDESTINO") == ""){
		msg += "Preencha o campo Localização Destino.\n";
	}
	if (form.getValue("CCDESTINO") == ""){
		msg += "Preencha o campo Centro de Custo Destino.\n";
	}
	if (form.getValue("RESPDESTINO") == ""){
		msg += "Preencha o campo Responsável Destino.\n";
	}
	if (form.getValue("TIPOOPERACAO") == "SELECIONE"){
		msg += "Preencha o campo Tipo de Operação.\n";
	}
	if (form.getValue("MAQUINARODANDO") == "SELECIONE"){
		msg += "Preencha o campo Maquina está rodando.\n";
	}
	if (form.getValue("TIPOEQUIPAMENTO") == "SELECIONE"){
		msg += "Preencha o campo Tipo Equipamento.\n";
	}
	if (form.getValue("PAGADORFRETE") == "SELECIONE"){
		msg += "Preencha o campo Pagador do frete.\n";
	}
	if (form.getValue("EMISSORNFTRANSPORTE") == "SELECIONE"){
		msg += "Preencha o campo Emissor NF para Transporte.\n";
	}
	/*if (form.getValue("NFTRANSPORTE") == "" && form.getValue("EMISSORNFTRANSPORTE") == "Tradimaq"){
		msg += "Preencha o campo NF Remessa (Tradimaq x Tradimaq).\n";
	}*/
	if (form.getValue("LARGURAEQUIP") == ""){
		msg += "Preencha o campo Largura do equipamento.\n";
	}
	if (form.getValue("ALTURAEQUIP") == ""){
		msg += "Preencha o campo Altura do equipamento.\n";
	}
	if (form.getValue("PESOEQUIP") == ""){
		msg += "Preencha o campo Peso do equipamento.\n";
	}
	if (form.getValue("TIPOTRANSTORRE") != "N/A" ){
		if (form.getValue("LARGURATORRE") == ""){
			msg += "Preencha o campo Largura da torre.\n";
		}
		if (form.getValue("ALTURATORRE") == ""){
			msg += "Preencha o campo Altura da torre.\n";
		}
		if (form.getValue("PESOTORRE") == ""){
			msg += "Preencha o campo Peso da torre.\n";
		}
		if (form.getValue("TIPOTRANSTORRE") == "Montada"){
			if (form.getValue("ALTURAFINAL") == ""){
				msg += "Preencha o campo Altura Final.\n";
			}
		}
	}
	if (form.getValue("REMETENTECNPJ") == ""){
		msg += "Preencha o campo CNPJ do Remetente.\n";
	}
	if (form.getValue("DESTINATARIOCNPJ") == ""){
		msg += "Preencha o campo CNPJ do Destinatario.\n";
	}
	return msg;
}
//==============================================================================================================================================
function validacaoAprovacaoChecklistSaida(form, NextPros){
	var msg = "";
	if (form.getValue("CHECKLISTACORDOGESTORSAIDA") == ""){
		if (form.getValue("CHECKLISTOBSGESTORSAIDA") == ""){
			msg += "Preencha o campo Observações.\n";
		}
	}
	return msg;
}
//==============================================================================================================================================
function validacaoAceiteMobilizacao(form, NextPros){
	var msg = "";
	if (form.getValue("MOBILIZACAOACEITEDESTINATARIO") == "" && NextPros != "18"){
		msg += "Por não aceitar a mobilização do ativo você deve finalizar o processo.\n";
	}
	if (form.getValue("MOBILIZACAOACEITEDESTINATARIO") == "on" && NextPros == "18"){
		msg += "Por ter aceito a mobilização do ativo, você não pode finalizar o processo.\n";
	}
	if (form.getValue("MOBILIZACAOOSREMETENTEDEST") == "on" && NextPros == "20"){
		msg += "Você está solicitando a abertura de OS antes da mobilização, então envie para a atividade Abrir OS.\n";
	}
	if (form.getValue("MOBILIZACAOOSREMETENTEDEST") == "" && NextPros != "20"){
		msg += "Você não solicitou a abertura de OS antes da mobilização, então envie para a atividade Analise de Frete.\n";
	}
	return msg;
}
//==============================================================================================================================================
function validacaoAnaliseDeFrete(form, NextPros){
	var msg = "";
	if (form.getValue("FRETETIPOLOGISTICA") == "on" && form.getValue("FRETEVALORLOGISTICA") == ""){
		msg += "Preencha o campo Valor do Frete.\n";
	}
	if (form.getValue("FRETETIPOLOGISTICA") == "" && NextPros == "104"){
		msg += "Com o tipo de frete ''Externo'' o processo deve ir para a atividade 'Cotação' para cotar o frete.\n";
	}
	if (form.getValue("FRETETIPOLOGISTICA") == "on" && NextPros != "104"){
		msg += "Com o tipo de frete ''Interno'' o processo não precisa ir para a atividade 'Cotação' para cotar o frete.\n";
	}
	return msg;
}
//==============================================================================================================================================
function validacaoSolicitacaoDeFrete(form, NextPros){
	var msg = "";
	if (form.getValue("SOLICITANFNUMEROMOV") == ""){
		msg += "Preencha o campo Número do Movimento (2.1.06).\n";
	}
	if (form.getValue("SOLICITACAOFRETENOMEMOTORISTA") == ""){
		msg += "Preencha o campo Nome Motorista.\n";
	}
	if (form.getValue("SOLICITACAOFRETECPFMOTORISTA") == ""){
		msg += "Preencha o campo CPF Motorista.\n";
	}
	if (form.getValue("SOLICITACAOFRETETRANSPORTADORA") == ""){
		msg += "Preencha o campo Transportadora.\n";
	}
	if (form.getValue("SOLICITACAOFRETEPLACA") == ""){
		msg += "Preencha o campo Placa Veículo.\n";
	}
	if (form.getValue("SOLICITACAOFRETEDATACOLETA") == ""){
		msg += "Preencha o campo Data/Hora Coleta.\n";
	}
	return msg;
}
//==============================================================================================================================================
function validacaoSolicitacaoNF(form, NextPros){
	var msg = "";
	if (form.getValue("FISCALSOLICITANF") == ""){
		msg += "Favor preencher o campo Solicitação de NF (2.1.06).\n";
	}
	return msg;
}
//==============================================================================================================================================
function validacaoEmissaoNF(form, NextPros){
	var msg = "";
	if (form.getValue("FISCALNUMERONF") == ""){
		msg += "Favor preencher o campo Número da NF Emitida.\n";
	}
	return msg;
}
//==============================================================================================================================================
function validacaoDeAcordoChecklistEntrada(form, NextPros){
	var msg = "";
	if (form.getValue("CHECKLISTACORDOGESTORENTR") == "" && form.getValue("CHECKLISTOBSGESTORENTR") == ""){
		msg += "Favor justificar a não aprovação do checklist.\n";
	}
	if (form.getValue("CHECKLISTOSGESTORENTR") == "" && NextPros == "58"){
		msg += "Você marcou que não é necessário OS, envie a tarefa para a Alocação do Bem.\n";
	}
	if (form.getValue("CHECKLISTOSGESTORENTR") == "on" && NextPros != "58"){
		msg += "Você marcou que é necessário OS, envie a tarefa para o Levantamento de Manutenção.\n";
	}
	return msg;
}
//==============================================================================================================================================
function validacaoLevantamentoManutencaoSaida(form, NextPros){
	var msg = "";
	if (form.getValue("LEVANTAMENTONUMEROOSSAIDA") == ""){
		msg += "Favor preencher o Número da OS.\n";
	}
	return msg;
}
//==============================================================================================================================================
function validacaoLevantamentoManutencaoEntrada(form, NextPros){
	var msg = "";
	if (form.getValue("LEVANTAMENTONUMEROOSENTR") == ""){
		msg += "Favor preencher o Número da OS.\n";
	}
	return msg;
}
//==============================================================================================================================================
function validacaoAprovacaoRmRsSaida(form, NextPros){
	var msg = "";
	if (form.getValue("LEVANTAMENTOOSMOVAPROVSAID") == ""){
		msg += "Favor aprovar movimentos e clicar no botão para verificar a aprovação.\n";
	}
	return msg;
}
//==============================================================================================================================================
function validacaoAprovacaoRmRsEntrada(form, NextPros){
	var msg = "";
	if (form.getValue("LEVANTAMENTOOSMOVAPROVENTR") == ""){
		msg += "Favor aprovar movimentos e clicar no botão para verificar a aprovação.\n";
	}
	return msg;
}
//==============================================================================================================================================
function validacaoAlocacaoPCM(form, NextPros){
	var msg = "";
	if (form.getValue("PCMLOCALIZACAOATUAL") == ""){
		msg += "Favor clicar no botão para verificar a Localização Atual do Bem.\n";
	}
	if (form.getValue("PCMCCATUAL") == form.getValue("CCORIGEM") && form.getValue("PCMLOCALIZACAOATUAL") == form.getValue("LOCALORIGEM")){
		msg += "Favor realizar a alocação correta do bem.\n";
	}
	return msg;
}
//==============================================================================================================================================
function validacaoCheckListMaquinasECaminhoesSaida(form, NextPros){
	var msg = "";
	if (form.getValue("FUNCIONAMENTOMOTORSAIDA") == ""){
		msg += "Preencha o campo Funcionamento do Motor no checklist.\n";
	}
	if (form.getValue("RUIDOSMOTORSAIDA") == ""){
		msg += "Preencha o campo Ruídos do Motor no checklist\n";
	}
	if (form.getValue("NIVELDEOLEOSAIDA") == ""){
		msg += "Preencha o campo Nível de Óleo no checklist\n";
	}
	if (form.getValue("SISTEMADEARREFECIMENTOSAIDA") == ""){
		msg += "Preencha o campo Sistema de Arrefecimento no checklist\n";
	}
	if (form.getValue("NIVELLIQUIDOARREFECIMENTOSAIDA") == ""){
		msg += "Preencha o campo Nível do Líquido de Arrefecimento no checklist\n";
	}
	if (form.getValue("TEMPERATURADOMOTORSAIDA") == ""){
		msg += "Preencha o campo Temperatura do Motor no checklist\n";
	}
	if (form.getValue("FILTROSDEARSAIDA") == ""){
		msg += "Preencha o campo Filtros de Ar no checklist\n";
	}
	if (form.getValue("SEPARADORAGUACOMBUSTIVELSAIDA") == ""){
		msg += "Preencha o campo Filtros Separador de Água e Combustível no checklist\n";
	}
	if (form.getValue("CORREIASDOMOTORSAIDA") == ""){
		msg += "Preencha o campo Correias do Motor no checklist\n";
	}
	if (form.getValue("POLIASETENSORESSAIDA") == ""){
		msg += "Preencha o campo Polias e Tensores no checklist\n";
	}
	if (form.getValue("INTERCOOLERSAIDA") == ""){
		msg += "Preencha o campo Intercooler no checklist\n";
	}
	if (form.getValue("COXINSESUPORTESAIDA") == ""){
		msg += "Preencha o campo Coxins e Suporte no checklist\n";
	}
	if (form.getValue("TURBINASAIDA") == ""){
		msg += "Preencha o campo Turbina no checklist\n";
	}
	if (form.getValue("SISTEMADEESCAPESAIDA") == ""){
		msg += "Preencha o campo Sistema de Escape no checklist\n";
	}
	if (form.getValue("VAZAMENTOSSAIDA") == ""){
		msg += "Preencha o campo Vazamentos no checklist\n";
	}
	if (form.getValue("MANGUEIRASEABRACADEIRASSAIDA") == ""){
		msg += "Preencha o campo Mangueiras e Abraçaceiras no checklist\n";
	}
	if (form.getValue("CONDICOESDAFUMACASAIDA") == ""){
		msg += "Preencha o campo Condições da Fumaça no checklist\n";
	}
	if (form.getValue("COMPRESSORDEARSAIDA") == ""){
		msg += "Preencha o campo Compressor de Ar no checklist\n";
	}
	if (form.getValue("VALVULADESEGURANCASAIDA") == ""){
		msg += "Preencha o campo Válvula de Segurança no checklist\n";
	}
	if (form.getValue("VALVULAAPUAPSSAIDA") == ""){
		msg += "Preencha o campo Válvula A.P.U / A.P.S no checklist\n";
	}
	if (form.getValue("VALVULAPEDALSAIDA") == ""){
		msg += "Preencha o campo Válvula Pedal no checklist\n";
	}
	if (form.getValue("LONAPASTILHASAIDA") == ""){
		msg += "Preencha o campo Lona / Pastilha no checklist\n";
	}
	if (form.getValue("BALAODEARSAIDA") == ""){
		msg += "Preencha o campo Balão de Ar no checklist\n";
	}
	if (form.getValue("TESTEDEFRENAGEMSAIDA") == ""){
		msg += "Preencha o campo Teste de Frenagem no checklist\n";
	}
	if (form.getValue("FREIODEESTACIONAMENTOSAIDA") == ""){
		msg += "Preencha o campo Freio de Estacionamento no checklist\n";
	}
	if (form.getValue("FREIOMOTORSAIDA") == ""){
		msg += "Preencha o campo Freio Motor no checklist\n";
	}
	if (form.getValue("NIVELDEOLEOFREIOSAIDA") == ""){
		msg += "Preencha o campo Nível de Óleo no checklist\n";
	}
	if (form.getValue("FREIOSAUXILIARESSAIDA") == ""){
		msg += "Preencha o campo Freios Auxiliares no checklist\n";
	}
	if (form.getValue("TRINCASPARAFUSOSQUEBRADOSSAIDA") == ""){
		msg += "Preencha o campo Trincas e Parafusos Quebrados no checklist\n";
	}
	if (form.getValue("PARALAMASSAIDA") == ""){
		msg += "Preencha o campo Paralamas no checklist\n";
	}
	if (form.getValue("PARABARROSAIDA") == ""){
		msg += "Preencha o campo Para-Barro no checklist\n";
	}
	if (form.getValue("EXTRATORESDEPEDRASAIDA") == ""){
		msg += "Preencha o campo Extratores de Pedra no checklist\n";
	}
	if (form.getValue("PONTOSDEGRAXASAIDA") == ""){
		msg += "Preencha o campo Pontos de Graxa no checklist\n";
	}
	if (form.getValue("PLACAPINTURAESELOSAIDA") == ""){
		msg += "Preencha o campo Placa, Pintura e Selo no checklist\n";
	}
	if (form.getValue("MOLASSAIDA") == ""){
		msg += "Preencha o campo Molas no checklist\n";
	}
	if (form.getValue("GRAMPOSSAIDA") == ""){
		msg += "Preencha o campo Grampos no checklist\n";
	}
	if (form.getValue("PARAFUSOSDECENTROSAIDA") == ""){
		msg += "Preencha o campo Parafusos de Centro no checklist\n";
	}
	if (form.getValue("PINOSEBUXASSAIDA") == ""){
		msg += "Preencha o campo Pinos e Buchas no checklist\n";
	}
	if (form.getValue("SUPORTESSAIDA") == ""){
		msg += "Preencha o campo Suportes no checklist\n";
	}
	if (form.getValue("AMORTECEDORSAIDA") == ""){
		msg += "Preencha o campo Amortecedor no checklist\n";
	}
	if (form.getValue("MANGADEEIXOSAIDA") == ""){
		msg += "Preencha o campo Manga de Eixo no checklist\n";
	}
	if (form.getValue("LUBRIFICACAOPONTOSDEGRAXASAIDA") == ""){
		msg += "Preencha o campo Lubrificação Pontos de Graxa no checklist\n";
	}
	if (form.getValue("BIELETASAIDA") == ""){
		msg += "Preencha o campo Bieleta no checklist\n";
	}
	if (form.getValue("BARRAESTABILIZADORASAIDA") == ""){
		msg += "Preencha o campo Barra Estabilizadora no checklist\n";
	}
	if (form.getValue("ESTADODECONSERVACAOSAIDA") == ""){
		msg += "Preencha o campo Estado de Conservação no checklist\n";
	}
	if (form.getValue("LINHASHIDRAULICASSAIDA") == ""){
		msg += "Preencha o campo Linhas Hidraulicas no checklist\n";
	}
	if (form.getValue("CABOSDEACOSAIDA") == ""){
		msg += "Preencha o campo Cabos de Aço (Guindaste) no checklist\n";
	}
	if (form.getValue("FIXACAODEIMPLEMENTOSAIDA") == ""){
		msg += "Preencha o campo Fixação de Implemento (Parafuso, Grampos) no checklist\n";
	}
	if (form.getValue("FAIXASREFLETIVASSAIDA") == ""){
		msg += "Preencha o campo Faixas Refletivas no checklist\n";
	}
	if (form.getValue("QUINTARODASAIDA") == ""){
		msg += "Preencha o campo Quinta Roda no checklist\n";
	}
	if (form.getValue("TOMADADEFORCASAIDA") == ""){
		msg += "Preencha o campo Tomada de Força no checklist\n";
	}
	if (form.getValue("PINOREISAIDA") == ""){
		msg += "Preencha o campo Pino Rei no checklist\n";
	}
	if (form.getValue("BARRASDEIRRIGACAOPIPASAIDA") == ""){
		msg += "Preencha o campo Barras de Irrigação Pipa no checklist\n";
	}
	if (form.getValue("ELETROVALVULACOMREGISTROSSAIDA") == ""){
		msg += "Preencha o campo Eletroválvula com Resgistros no checklist\n";
	}
	if (form.getValue("BOMBADAGUASAIDA") == ""){
		msg += "Preencha o campo Bomba d'água (Pipa) no checklist\n";
	}
	if (form.getValue("REDUTORSAIDA") == ""){
		msg += "Preencha o campo Redutor (Pipa) no checklist\n";
	}
	if (form.getValue("TRINCASEMCHASSISSAIDA") == ""){
		msg += "Preencha o campo Verificar Trincas em Chassis das Pranchas e Plataformas no checklist\n";
	}
	if (form.getValue("OLHAISDEARTICULACAOSAIDA") == ""){
		msg += "Preencha o campo Olhais de Articulação no checklist\n";
	}
	if (form.getValue("CORRENTESBRACOSARTICULADOSSAID") == ""){
		msg += "Preencha o campo Correntes e Braços Articulados (Facão) no checklist\n";
	}
	if (form.getValue("VAZAMENTOSIMPLEMENTOSSAIDA") == ""){
		msg += "Preencha o campo Vazamentos no checklist\n";
	}
	if (form.getValue("EMBUCHAMENTOSSAIDA") == ""){
		msg += "Preencha o campo Embuchamentos no checklist\n";
	}
	if (form.getValue("SIRENEDERESAIDA") == ""){
		msg += "Preencha o campo Sirene de Ré no checklist\n";
	}
	if (form.getValue("MOTORDEPARTIDASAIDA") == ""){
		msg += "Preencha o campo Motor de Partida no checklist\n";
	}
	if (form.getValue("ALTERNADORDOMOTORSAIDA") == ""){
		msg += "Preencha o campo Alternador do Motor no checklist\n";
	}
	if (form.getValue("FAROISSAIDA") == ""){
		msg += "Preencha o campo Faróis no checklist\n";
	}
	if (form.getValue("FAROISAUXILIARESSAIDA") == ""){
		msg += "Preencha o campo Faróis Auxiliares no checklist\n";
	}
	if (form.getValue("LANTERNASSAIDA") == ""){
		msg += "Preencha o campo Lanternas no checklist\n";
	}
	if (form.getValue("REFLETORESSAIDA") == ""){
		msg += "Preencha o campo Refletores no checklist\n";
	}
	if (form.getValue("LAMPADASDOSREFLETORESSAIDA") == ""){
		msg += "Preencha o campo Lâmpadas dos Refletores no checklist\n";
	}
	if (form.getValue("LUZDEFREIOSAIDA") == ""){
		msg += "Preencha o campo Luz de Freio no checklist\n";
	}
	if (form.getValue("LUZDERESAIDA") == ""){
		msg += "Preencha o campo Luz de Ré no checklist\n";
	}
	if (form.getValue("ILUMINACAOINTERNASAIDA") == ""){
		msg += "Preencha o campo Iluminação Interna (Cabine) no checklist\n";
	}
	if (form.getValue("CHICOTEELETRICOSAIDA") == ""){
		msg += "Preencha o campo Chicote Elétrico no checklist\n";
	}
	if (form.getValue("BATERIASAIDA") == ""){
		msg += "Preencha o campo Bateria no checklist\n";
	}
	if (form.getValue("BUZINASSAIDA") == ""){
		msg += "Preencha o campo Buzinas no checklist\n";
	}
	if (form.getValue("GERADORDEENERGIASAIDA") == ""){
		msg += "Preencha o campo Gerador de Energia (Torre e Gerador) no checklist\n";
	}
	if (form.getValue("CODIGOSDEFALHASAIDA") == ""){
		msg += "Preencha o campo Códigos de Falha no checklist\n";
	}
	if (form.getValue("TRANSMISSAOCAIXADEMARCHASSAIDA") == ""){
		msg += "Preencha o campo Transmissão / Caixa de Marchas no checklist\n";
	}
	if (form.getValue("NIVELOLEOTRANSMISSAOSAIDA") == ""){
		msg += "Preencha o campo Nível de Óleo da Transmissão / Caixa de Marchas no checklist\n";
	}
	if (form.getValue("DIFERENCIALSAIDA") == ""){
		msg += "Preencha o campo Diferencial no checklist\n";
	}
	if (form.getValue("BLOQUEIODEDIFERENCIALSAIDA") == ""){
		msg += "Preencha o campo Bloqueio de Diferencial no checklist\n";
	}
	if (form.getValue("NIVELOLEODIFERENCIALSAIDA") == ""){
		msg += "Preencha o campo Nível de Óleo do Diferencial no checklist\n";
	}
	if (form.getValue("CRUZETASECARDANSSAIDA") == ""){
		msg += "Preencha o campo Cruzetas e Cardans no checklist\n";
	}
	if (form.getValue("ROLAMENTOSSAIDA") == ""){
		msg += "Preencha o campo Rolamentos no checklist\n";
	}
	if (form.getValue("VAZAMENTOSTRANSMISSOESSAIDA") == ""){
		msg += "Preencha o campo Vazamentos no checklist\n";
	}
	if (form.getValue("RUIDOSSAIDA") == ""){
		msg += "Preencha o campo Ruídos no checklist\n";
	}
	if (form.getValue("RUIDOSCOMANDOSSAIDA") == ""){
		msg += "Preencha o campo Ruídos no checklist\n";
	}
	if (form.getValue("VAZAMENTOSCOMANDOSSAIDA") == ""){
		msg += "Preencha o campo Vazamentos no checklist\n";
	}
	if (form.getValue("PARABRISASAIDA") == ""){
		msg += "Preencha o campo Para-Brisa no checklist\n";
	}
	if (form.getValue("RETROVISORESSAIDA") == ""){
		msg += "Preencha o campo Retrovisores no checklist\n";
	}
	if (form.getValue("VIDROSSAIDA") == ""){
		msg += "Preencha o campo Vidros no checklist\n";
	}
	if (form.getValue("QUEBRASOLSAIDA") == ""){
		msg += "Preencha o campo Quebra-Sol no checklist\n";
	}
	if (form.getValue("TAPECARIASAIDA") == ""){
		msg += "Preencha o campo Tapeçaria no checklist\n";
	}
	if (form.getValue("PREFIXOSLOGOTIPOSSAIDA") == ""){
		msg += "Preencha o campo Prefixos / Logotipos no checklist\n";
	}
	if (form.getValue("SUSPENSAODACABINESAIDA") == ""){
		msg += "Preencha o campo Suspensão da Cabine no checklist\n";
	}
	if (form.getValue("ESTADODACABINESAIDA") == ""){
		msg += "Preencha o campo Estado da Cabine no checklist\n";
	}
	if (form.getValue("PINTURASAIDA") == ""){
		msg += "Preencha o campo Pintura no checklist\n";
	}
	if (form.getValue("CORRIMAOSAIDA") == ""){
		msg += "Preencha o campo Corrimão no checklist\n";
	}
	if (form.getValue("ESTRIBOSSAIDA") == ""){
		msg += "Preencha o campo Estribos no checklist\n";
	}
	if (form.getValue("PORTATRANCASAIDA") == ""){
		msg += "Preencha o campo Porta / Tranca no checklist\n";
	}
	if (form.getValue("CINTODESEGURANCASAIDA") == ""){
		msg += "Preencha o campo Cinto de Segurança no checklist\n";
	}
	if (form.getValue("LIMPADORESSAIDA") == ""){
		msg += "Preencha o campo Limpadores no checklist\n";
	}
	if (form.getValue("ESTADODOSBANCOSSAIDA") == ""){
		msg += "Preencha o campo Estado dos Bancos no checklist\n";
	}
	if (form.getValue("PAINELDEINSTRUMENTOSSAIDA") == ""){
		msg += "Preencha o campo Painel de Instrumentos no checklist\n";
	}
	if (form.getValue("HORIMETROCABINESAIDA") == ""){
		msg += "Preencha o campo Horímetro no checklist\n";
	}
	if (form.getValue("CODIGODEFALHASAIDA") == ""){
		msg += "Preencha o campo Código de Falha no checklist\n";
	}
	if (form.getValue("DIFUSORESDEARSAIDA") == ""){
		msg += "Preencha o campo Difusores de Ar no checklist\n";
	}
	if (form.getValue("CLIMATIZADORSAIDA") == ""){
		msg += "Preencha o campo Climatizador no checklist\n";
	}
	if (form.getValue("ARCONDICIONADOSAIDA") == ""){
		msg += "Preencha o campo Funcionamento do Ar Condicionado no checklist\n";
	}
	if (form.getValue("BASCULAMENTODECABINESAIDA") == ""){
		msg += "Preencha o campo Basculamento de Cabine no checklist\n";
	}
	if (form.getValue("LAMINASESAIDA") == ""){
		msg += "Preencha o campo Lâminas no checklist\n";
	}
	if (form.getValue("BORDASESAIDA") == ""){
		msg += "Preencha o campo Bordas no checklist\n";
	}
	if (form.getValue("CANTOSDELAMINASAIDA") == ""){
		msg += "Preencha o campo Cantos de Lâmina no checklist\n";
	}
	if (form.getValue("ADAPTADORESSAIDA") == ""){
		msg += "Preencha o campo Adaptadores no checklist\n";
	}
	if (form.getValue("DENTESEENTREDENTESSAIDA") == ""){
		msg += "Preencha o campo Dentes e Entre Dentes no checklist\n";
	}
	if (form.getValue("CALCOSDAMESAELAMINASESAIDA") == ""){
		msg += "Preencha o campo Calços da Mesa e das Lâminas (Motoniveladora) no checklist\n";
	}
	if (form.getValue("ESCARIFICADORESSAIDA") == ""){
		msg += "Preencha o campo Escarificadores no checklist\n";
	}
	if (form.getValue("NIVELDEOLEOHIDRAULICOSAIDA") == ""){
		msg += "Preencha o campo Nível de Óleo no checklist\n";
	}
	if (form.getValue("MANGUEIRASSAIDA") == ""){
		msg += "Preencha o campo Mangueiras, Conexões e Tubos no checklist\n";
	}
	if (form.getValue("COMANDOHIDRAULICOSAIDA") == ""){
		msg += "Preencha o campo Comando Hidráulico (Alavancas) no checklist\n";
	}
	if (form.getValue("CILINDROSHIDRAULICOSSAIDA") == ""){
		msg += "Preencha o campo Cilindros Hidráulicos no checklist\n";
	}
	if (form.getValue("LINHASHIDRAULICASHIDRASAIDA") == ""){
		msg += "Preencha o campo Linhas Hidráulicas no checklist\n";
	}
	if (form.getValue("BOMBASEMOTORESHIDRAULICOSSAIDA") == ""){
		msg += "Preencha o campo Bombas e Motores Hidráulicas no checklist\n";
	}
	if (form.getValue("MOTORESHIDRAULICOSSAIDA") == ""){
		msg += "Preencha o campo Motores Hidráulicos no checklist\n";
	}
	if (form.getValue("RUIDOSHIDRAULICOSAIDA") == ""){
		msg += "Preencha o campo Ruídos no checklist\n";
	}
	if (form.getValue("VAZAMENTOSHIDRAULICOSSAIDA") == ""){
		msg += "Preencha o campo Vazamentos no checklist\n";
	}
	if (form.getValue("VERIFICARNIVELDEOLEOSAIDA") == ""){
		msg += "Preencha o campo Verificar Nível de Óleo no checklist\n";
	}
	if (form.getValue("SETORDEDIRECAOSAIDA") == ""){
		msg += "Preencha o campo Setor de Direção no checklist\n";
	}
	if (form.getValue("BARRASDEDIRECAOSAIDA") == ""){
		msg += "Preencha o campo Barras de Direção no checklist\n";
	}
	if (form.getValue("BOMBADEDIRECAOSAIDA") == ""){
		msg += "Preencha o campo Bomba de Direção no checklist\n";
	}
	if (form.getValue("TERMINAISSAIDA") == ""){
		msg += "Preencha o campo Terminais no checklist\n";
	}
	if (form.getValue("CILINDROSHIDRAULICOSDIRECSAIDA") == ""){
		msg += "Preencha o campo Cilindros Hidráulicos no checklist\n";
	}
	if (form.getValue("LINHASHIDRAULICASDIRECAOSAIDA") == ""){
		msg += "Preencha o campo Linhas Hidráulicas no checklist\n";
	}
	if (form.getValue("RUIDOSDIRECAOSAIDA") == ""){
		msg += "Preencha o campo Ruídos no checklist\n";
	}
	if (form.getValue("VAZAMENTOSDIRECAOSAIDA") == ""){
		msg += "Preencha o campo Vazamentos no checklist\n";
	}
	if (form.getValue("EXTINTORSAIDA") == ""){
		msg += "Preencha o campo Extintor no checklist\n";
	}
	if (form.getValue("CHAVEDERODASAIDA") == ""){
		msg += "Preencha o campo Chave de Roda no checklist\n";
	}
	if (form.getValue("MACACOSAIDA") == ""){
		msg += "Preencha o campo Macaco no checklist\n";
	}
	if (form.getValue("TRIANGULOSAIDA") == ""){
		msg += "Preencha o campo Triangulo no checklist\n";
	}
	if (form.getValue("PISOSAIDA") == ""){
		msg += "Preencha o campo Piso no checklist\n";
	}
	if (form.getValue("ESCAPAMENTOSAIDA") == ""){
		msg += "Preencha o campo Escapamento no checklist\n";
	}
	if (form.getValue("CHAVEDEIGNICAOSAIDA") == ""){
		msg += "Preencha o campo Chave de Ignição no checklist\n";
	}
	if (form.getValue("LIMPEZAGERALSAIDA") == ""){
		msg += "Preencha o campo Limpeza Geral no checklist\n";
	}
	if (form.getValue("PNEUSSAIDA") == ""){
		msg += "Preencha o campo Pneus no checklist\n";
	}
	if (form.getValue("ESTEPESAIDA") == ""){
		msg += "Preencha o campo Estepe no checklist\n";
	}
	if (form.getValue("RODASESEUSPARAFUSOSSAIDA") == ""){
		msg += "Preencha o campo Rodas e seus Parafusos no checklist\n";
	}
	if (form.getValue("SEGMENTOSMOTRIZSAIDA") == ""){
		msg += "Preencha o campo Segmentos Motriz no checklist\n";
	}
	if (form.getValue("ROLETESINFERIORESSAIDA") == ""){
		msg += "Preencha o campo Roletes Inferiores no checklist\n";
	}
	if (form.getValue("ROLETESSUPERIORESSAIDA") == ""){
		msg += "Preencha o campo Roletes Superiores no checklist\n";
	}
	if (form.getValue("RODASGUIASSAIDA") == ""){
		msg += "Preencha o campo Rodas Guias no checklist\n";
	}
	if (form.getValue("TENSORESSAIDA") == ""){
		msg += "Preencha o campo Tensores no checklist\n";
	}
	if (form.getValue("CORRENTEDEESTEIRASAIDA") == ""){
		msg += "Preencha o campo Corrente de Esteira no checklist\n";
	}
	if (form.getValue("SAPATASDAESTEIRASAIDA") == ""){
		msg += "Preencha o campo Sapatas da Esteira no checklist\n";
	}
	if (form.getValue("PINOSEBUCHASSAIDA") == ""){
		msg += "Preencha o campo Pinos e Buchas no checklist\n";
	}
	return msg;
}
//==============================================================================================================================================
function validacaoCheckListMaquinasEletricasSaida(form, NextPros){
	var msg = "";
	if (form.getValue("PROTECAODETETOSAIDA") == ""){
		msg += "Preencha o campo Proteção de Teto no checklist.\n";
	}
	if (form.getValue("ESPELHORETROVISORSAIDA") == ""){
		msg += "Preencha o campo Espelho Retrovisor no checklist.\n";
	}
	if (form.getValue("FREIOESTACIONAMENTOSAIDA") == ""){
		msg += "Preencha o campo Freio Estacionamento no checklist.\n";
	}
	if (form.getValue("ALARMERESAIDA") == ""){
		msg += "Preencha o campo Alarme Ré no checklist.\n";
	}
	if (form.getValue("FAROISMAQELETRICASAIDA") == ""){
		msg += "Preencha o campo Faróis no checklist.\n";
	}
	if (form.getValue("BUZINASAIDA") == ""){
		msg += "Preencha o campo Buzina no checklist.\n";
	}
	if (form.getValue("CINTODESEGURANCAMAQELETRICASAI") == ""){
		msg += "Preencha o campo Cinto de Segurança no checklist.\n";
	}
	if (form.getValue("MANGUEIRASHIDRAULICASSAIDA") == ""){
		msg += "Preencha o campo Mangueiras Hidráulicas no checklist.\n";
	}
	if (form.getValue("EXTINTORDEINCENDIOSAIDA") == ""){
		msg += "Preencha o campo Extintor de Incêndio no checklist.\n";
	}
	if (form.getValue("RODASCARGATRACAOSAIDA") == ""){
		msg += "Preencha o campo Rodas (Carga/Tração) no checklist.\n";
	}
	if (form.getValue("CILINDROSDATORRESAIDA") == ""){
		msg += "Preencha o campo Cilindros da Torre no checklist.\n";
	}
	if (form.getValue("GIROFLEXSAIDA") == ""){
		msg += "Preencha o campo Giroflex / Flash Advertência no checklist.\n";
	}
	if (form.getValue("CORRENTESTORRESAIDA") == ""){
		msg += "Preencha o campo Correntes Torre no checklist.\n";
	}
	if (form.getValue("CODIGOSERROOUADVERTENCIASAIDA") == ""){
		msg += "Preencha o campo Códigos Erro ou Advertência no checklist.\n";
	}
	if (form.getValue("MASTROEGRADESAIDA") == ""){
		msg += "Preencha o campo Mastro e Grade no checklist.\n";
	}
	if (form.getValue("LIMPEZASAIDA") == ""){
		msg += "Preencha o campo Limpeza no checklist.\n";
	}
	if (form.getValue("BANCOEALAVANCASSAIDA") == ""){
		msg += "Preencha o campo Banco e Alavancas no checklist.\n";
	}
	if (form.getValue("LUZESADVERTENCIASSAIDA") == ""){
		msg += "Preencha o campo Luzes Advertências no checklist.\n";
	}
	if (form.getValue("PEDAISSAIDA") == ""){
		msg += "Preencha o campo Pedais no checklist.\n";
	}
	if (form.getValue("BATERIAMAQELETRICASAIDA") == ""){
		msg += "Preencha o campo Bateria no checklist.\n";
	}
	if (form.getValue("FREIODESERVICOSAIDA") == ""){
		msg += "Preencha o campo Freio de Serviço no checklist.\n";
	}
	if (form.getValue("OLEOHIDRAULICOREDUCAOSAIDA") == ""){
		msg += "Preencha o campo Óleo Hidráulico / Redução no checklist.\n";
	}
	if (form.getValue("LUBRIFICACAOSAIDA") == ""){
		msg += "Preencha o campo Lubrificação no checklist.\n";
	}
	if (form.getValue("CHAVESAIDA") == ""){
		msg += "Preencha o campo Chave no checklist.\n";
	}
	if (form.getValue("TESTEDEFUNCIONAMENTOSAIDA") == ""){
		msg += "Preencha o campo Teste de Funcionamento no checklist.\n";
	}
	if (form.getValue("PINTURAMAQELETRICASAIDA") == ""){
		msg += "Preencha o campo Pintura no checklist.\n";
	}
	if (form.getValue("GARFOSSAIDA") == ""){
		msg += "Preencha o campo Garfos no checklist.\n";
	}
	if (form.getValue("NUMERODEFROTASAIDA") == ""){
		msg += "Preencha o campo Número de Frota no checklist.\n";
	}
	return msg;
}
//==============================================================================================================================================
function validacaoCheckListEmpilhadeirasSaida(form, NextPros){
	var msg = "";
	if (form.getValue("ADESIVODEMODELOCAPACIDADESAIDA") == ""){
		msg += "Preencha o campo Adesivo de Modelo e Capacidade no checklist.\n";
	}
	if (form.getValue("ADESIVODETOMBAMENTOSAIDA") == ""){
		msg += "Preencha o campo Adesivo de Tombamento no checklist.\n";
	}
	if (form.getValue("ADESIVODEICAMENTOSAIDA") == ""){
		msg += "Preencha o campo Adesivo de Içamento no checklist.\n";
	}
	if (form.getValue("CONTRAPESOSAIDA") == ""){
		msg += "Preencha o campo Contra Peso no checklist.\n";
	}
	if (form.getValue("CAPOSAIDA") == ""){
		msg += "Preencha o campo Capô no checklist.\n";
	}
	if (form.getValue("EXTENSAOPARALAMASAIDA") == ""){
		msg += "Preencha o campo Extensão de Para-Lama no checklist.\n";
	}
	if (form.getValue("GRADEPROTECAOCARGASAIDA") == ""){
		msg += "Preencha o campo Grade de Proteção de Carga no checklist.\n";
	}
	if (form.getValue("DESLOCADORLATERALSAIDA") == ""){
		msg += "Preencha o campo Deslocador Lateral no checklist.\n";
	}
	if (form.getValue("AVENTALSAIDA") == ""){
		msg += "Preencha o campo Avental no checklist.\n";
	}
	if (form.getValue("EMPGARFOSSAIDA") == ""){
		msg += "Preencha o campo Garfos no checklist.\n";
	}
	if (form.getValue("ESTADOCORRENTESSAIDA") == ""){
		msg += "Preencha o campo Estado das Correntes no checklist.\n";
	}
	if (form.getValue("ROLDANASDASCORRENTESSAIDA") == ""){
		msg += "Preencha o campo Estado das Correntes no checklist.\n";
	}
	if (form.getValue("BATENTESDEINCLINACAOSAIDA") == ""){
		msg += "Preencha o campo Batentes de Inclinação no checklist.\n";
	}
	if (form.getValue("EMPMANGUEIRASSAIDA") == ""){
		msg += "Preencha o campo Mangueiras no checklist.\n";
	}
	if (form.getValue("CILINDROELEVACAOSAIDA") == ""){
		msg += "Preencha o campo Cilindro de Elevação no checklist.\n";
	}
	if (form.getValue("CILINDROSELEVACAOSAIDA") == ""){
		msg += "Preencha o campo Cilindros de Inclinação no checklist.\n";
	}
	if (form.getValue("EMBUXAMENTOTORRESAIDA") == ""){
		msg += "Preencha o campo Embuxamento da Torre no checklist.\n";
	}
	if (form.getValue("ROLAMENTOSTORRESAIDA") == ""){
		msg += "Preencha o campo Rolamentos da Torre no checklist.\n";
	}
	if (form.getValue("FITAENCOSTOSUPERIORSAIDA") == ""){
		msg += "Preencha o campo Fita de Encosto Superior no checklist.\n";
	}
	if (form.getValue("BOMBASAIDA") == ""){
		msg += "Preencha o campo Bomba no checklist.\n";
	}
	if (form.getValue("CONVERSORSAIDA") == ""){
		msg += "Preencha o campo Conversor no checklist.\n";
	}
	if (form.getValue("PACOTEFRENTE1SAIDA") == ""){
		msg += "Preencha o campo Pacote Frente 1 no checklist.\n";
	}
	if (form.getValue("PACOTEFRENTE2SAIDA") == ""){
		msg += "Preencha o campo Pacote Frente 2 no checklist.\n";
	}
	if (form.getValue("PACOTEFRENTE3SAIDA") == ""){
		msg += "Preencha o campo Pacote Frente 3 no checklist.\n";
	}
	if (form.getValue("PACOTERE1SAIDA") == ""){
		msg += "Preencha o campo Pacote Ré 1 no checklist.\n";
	}
	if (form.getValue("PACOTERE2SAIDA") == ""){
		msg += "Preencha o campo Pacote Ré 2 no checklist.\n";
	}
	if (form.getValue("PNEUSSUPERELASTICOSSAIDA") == ""){
		msg += "Preencha o campo Pneus Superelasticos no checklist.\n";
	}
	if (form.getValue("PNEUSPNEUMATICOSSAIDA") == ""){
		msg += "Preencha o campo Pneus Pneumaticos no checklist.\n";
	}
	if (form.getValue("PRISIONEIROSPORCASRODASAIDA") == ""){
		msg += "Preencha o campo Prisioneiros e Porcas da Roda no checklist.\n";
	}
	if (form.getValue("RODASSAIDA") == ""){
		msg += "Preencha o campo Rodas no checklist.\n";
	}
	if (form.getValue("PINTURAGERALSAIDA") == ""){
		msg += "Preencha o campo Pintura Geral no checklist.\n";
	}
	if (form.getValue("CONDICOESDALATARIASAIDA") == ""){
		msg += "Preencha o campo Condições da Lataria no checklist.\n";
	}
	if (form.getValue("OLEOMOTORSAIDA") == ""){
		msg += "Preencha o campo Óleo do Motor no checklist.\n";
	}
	if (form.getValue("OLEOTRANSMICAOSAIDA") == ""){
		msg += "Preencha o campo Óleo da Transmissão no checklist.\n";
	}
	if (form.getValue("OLEODIFERENCIALSAIDA") == ""){
		msg += "Preencha o campo Óleo do Diferencial no checklist.\n";
	}
	if (form.getValue("FLUIDOFREIOSAIDA") == ""){
		msg += "Preencha o campo Fluído de Freio no checklist.\n";
	}
	if (form.getValue("RESERVATORIOAGUASAIDA") == ""){
		msg += "Preencha o campo Reservatório de Água no checklist.\n";
	}
	if (form.getValue("OLEOHIDRAULICOSAIDA") == ""){
		msg += "Preencha o campo Óleo do Hidráulico no checklist.\n";
	}
	if (form.getValue("CORREIAVENTILADORSAIDA") == ""){
		msg += "Preencha o campo Correia do Ventilador no checklist.\n";
	}
	if (form.getValue("CORREIAALTERNADORSAIDA") == ""){
		msg += "Preencha o campo Correia do Alternador no checklist.\n";
	}
	if (form.getValue("EMPFAROISSAIDA") == ""){
		msg += "Preencha o campo Faróis no checklist.\n";
	}
	if (form.getValue("EMPLANTERNASSAIDA") == ""){
		msg += "Preencha o campo Lanternas no checklist.\n";
	}
	if (form.getValue("PAINELDISPLAYSAIDA") == ""){
		msg += "Preencha o campo Painel Display no checklist.\n";
	}
	if (form.getValue("EMPALARMERESAIDA") == ""){
		msg += "Preencha o campo Alarme de Ré no checklist.\n";
	}
	if (form.getValue("EMPBUZINASAIDA") == ""){
		msg += "Preencha o campo Buzina no checklist.\n";
	}
	if (form.getValue("FUNCIONAMENTOALTERNADORSAIDA") == ""){
		msg += "Preencha o campo Funcionamento do Alternador no checklist.\n";
	}
	if (form.getValue("FUNCIONAMENTOMOTORPARTIDASAIDA") == ""){
		msg += "Preencha o campo Funcionamento do Motor de Partida no checklist.\n";
	}
	if (form.getValue("INDICTEMPERATURAMOTORSAIDA") == ""){
		msg += "Preencha o campo Indic. Temperatura do Motor no checklist.\n";
	}
	if (form.getValue("ALAVANCASBOTOESSAIDA") == ""){
		msg += "Preencha o campo Alavancas e Botões Lig./Desl. no checklist.\n";
	}
	if (form.getValue("INDICTEMPTRANSMISSAOSAIDA") == ""){
		msg += "Preencha o campo Indic. Temperatura da Transmissão no checklist.\n";
	}
	if (form.getValue("EMPGIROFLEXSAIDA") == ""){
		msg += "Preencha o campo Giroflex no checklist.\n";
	}
	if (form.getValue("BLUESPOTSAIDA") == ""){
		msg += "Preencha o campo Bluespot no checklist.\n";
	}
	if (form.getValue("LEDSAZUISSAIDA") == ""){
		msg += "Preencha o campo Leds Azuis no checklist.\n";
	}
	if (form.getValue("LIMPADORPARABRISASAIDA") == ""){
		msg += "Preencha o campo Limpador de Para-Brisa no checklist.\n";
	}
	if (form.getValue("EMPARCONDICIONADOSAIDA") == ""){
		msg += "Preencha o campo Ar Condicionado no checklist.\n";
	}
	if (form.getValue("KITFECHAMENTOSAIDA") == ""){
		msg += "Preencha o campo Kit Fechamento no checklist.\n";
	}
	if (form.getValue("BANCOOPERADORSAIDA") == ""){
		msg += "Preencha o campo Banco do Operador no checklist.\n";
	}
	if (form.getValue("EXTINTORINCENDIOSAIDA") == ""){
		msg += "Preencha o campo Extintor de Incêndio no checklist.\n";
	}
	if (form.getValue("CINTOSEGURANCASAIDA") == ""){
		msg += "Preencha o campo Cinto de Segurança no checklist.\n";
	}
	if (form.getValue("ESPELHOSRETROVISORESSAIDA") == ""){
		msg += "Preencha o campo Espelhos Retrovisores no checklist.\n";
	}
	if (form.getValue("PLAQUETAIDENTIFICACAOSAIDA") == ""){
		msg += "Preencha o campo Plaqueta de Identificação no checklist.\n";
	}
	if (form.getValue("TAPETESAIDA") == ""){
		msg += "Preencha o campo Tapete no checklist.\n";
	}
	if (form.getValue("QUADRODIRECIONALSAIDA") == ""){
		msg += "Preencha o campo Quadro Direcional no checklist.\n";
	}
	if (form.getValue("CILINDRODIRECAOSAIDA") == ""){
		msg += "Preencha o campo Cilindro de Direção no checklist.\n";
	}
	if (form.getValue("MANGAEIXOSAIDA") == ""){
		msg += "Preencha o campo Manga de Eixo no checklist.\n";
	}
	if (form.getValue("MANGUEIRASDIRECAOSAIDA") == ""){
		msg += "Preencha o campo Mangueiras de Direção no checklist.\n";
	}
	if (form.getValue("EMBUXAMENTODIRECAOSAIDA") == ""){
		msg += "Preencha o campo Embuxamento da Direção no checklist.\n";
	}
	if (form.getValue("MARCHALENTASAIDA") == ""){
		msg += "Preencha o campo Marcha Lenta no checklist.\n";
	}
	if (form.getValue("MAXIMAROTACAOSAIDA") == ""){
		msg += "Preencha o campo Máxima Rotação no checklist.\n";
	}
	if (form.getValue("CILINDRO1SAIDA") == ""){
		msg += "Preencha o campo 1º Cilindro no checklist.\n";
	}
	if (form.getValue("CILINDRO2SAIDA") == ""){
		msg += "Preencha o campo 2º Cilindro no checklist.\n";
	}
	if (form.getValue("CILINDRO3SAIDA") == ""){
		msg += "Preencha o campo 3º Cilindro no checklist.\n";
	}
	if (form.getValue("CILINDRO4SAIDA") == ""){
		msg += "Preencha o campo 4º Cilindro no checklist.\n";
	}
	if (form.getValue("CILINDRO5SAIDA") == ""){
		msg += "Preencha o campo 5º Cilindro no checklist.\n";
	}
	if (form.getValue("CILINDRO6SAIDA") == ""){
		msg += "Preencha o campo 6º Cilindro no checklist.\n";
	}
	if (form.getValue("EMPFREIOESTACIONAMENTOSAI") == ""){
		msg += "Preencha o campo Freio de Estacionamento no checklist.\n";
	}
	if (form.getValue("FREIOSERVICOSAIDA") == ""){
		msg += "Preencha o campo Freio de Serviço no checklist.\n";
	}
	if (form.getValue("NIVELAGUASAIDA") == ""){
		msg += "Preencha o campo Nível de Água no checklist.\n";
	}
	if (form.getValue("TENSAONOMINALSAIDA") == ""){
		msg += "Preencha o campo Tensão Nominal no checklist.\n";
	}
	if (form.getValue("DENSIDADEDOSELEMENTOSSAIDA") == ""){
		msg += "Preencha o campo Densidade dos Elementos no checklist.\n";
	}
	if (form.getValue("ESTADOBANCOBATERIASSAIDA") == ""){
		msg += "Preencha o campo Estado Geral do Banco de Baterias no checklist.\n";
	}
	if (form.getValue("PRESSAOINCLINACAOSAIDA") == ""){
		msg += "Preencha o campo Pressão de Inclinação (Psi) no checklist.\n";
	}
	if (form.getValue("PRESSAODIRECAOSAIDA") == ""){
		msg += "Preencha o campo Pressão de Direção (Psi) no checklist.\n";
	}
	if (form.getValue("PRESSAOELECACAOSAIDA") == ""){
		msg += "Preencha o campo Pressão de Elevação (Psi) no checklist.\n";
	}
	if (form.getValue("IMPLEMENTOSAIDA") == ""){
		msg += "Preencha o campo Implemento (Psi) no checklist.\n";
	}
	if (form.getValue("EMPCOMANDOHIDRAULICOSAIDA") == ""){
		msg += "Preencha o campo Estado do Comando Hidráulico no checklist.\n";
	}
	if (form.getValue("MANGUEIRASHIDRAULICOSAIDA") == ""){
		msg += "Preencha o campo Mangueiras no checklist.\n";
	}
	return msg;
}






