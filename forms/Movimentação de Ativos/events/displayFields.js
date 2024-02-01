function displayFields(form,customHTML){ 
	
	form.setShowDisabledFields(true);
	
	formataCampos(form, customHTML);
	
	usuarioLogado(form, customHTML);
	
	form.setValue("WKNumState", getValue("WKNumState"))
	
}
//==============================================================================================================================================
function formataCampos(form, customHTML) {
	
	var atividade = getValue("WKNumState");
	
	if (atividade != "0" && atividade != "4" && atividade != "16"){
		
		form.setEnabled("EQUIPAMENTO", false);
		form.setEnabled("MODELO", false);
		form.setEnabled("SERIE", false);
		form.setEnabled("HORIMETRO", false);
		form.setEnabled("ANO", false);
		form.setEnabled("PLACA", false);
		form.setEnabled("CHASSI", false);
		form.setEnabled("DATASOLICITACAO", false);
		form.setEnabled("DATAENVIO", false);
		form.setEnabled("LOCALORIGEM", false);
		form.setEnabled("CCORIGEM", false);
		form.setEnabled("LOCDESTINO", false);
		form.setEnabled("CCDESTINO", false);
		form.setEnabled("RESPDESTINO", false);
		form.setEnabled("TIPOOPERACAO", false);
		form.setEnabled("MAQUINARODANDO", false);
		form.setEnabled("TIPOEQUIPAMENTO", false);
		form.setEnabled("PAGADORFRETE", false);
		form.setEnabled("EMISSORNFTRANSPORTE", false);
		/* LINHA A SEGUIR BUGA O RELATÓRIO E DESAPARECE COM O FORMULÁRIO */
		if(form.getValue("EMISSORNFTRANSPORTE") == "Tradimaq"){
			form.setEnabled("NFTRANSPORTE", false)
		}
		
		form.setEnabled("LARGURAEQUIP", false);
		form.setEnabled("ALTURAEQUIP", false);
		form.setEnabled("PESOEQUIP", false);
		form.setEnabled("COMPRIMENTOEQUIP", false);
		form.setEnabled("LARGURATORRE", false);
		form.setEnabled("COMPRIMENTOTORRE", false);
		form.setEnabled("PESOTORRE", false);
		
		form.setEnabled("TIPOTRANSTORRE", false);
		form.setEnabled("ALTURAFINAL", false);
		
		form.setEnabled("REMETENTECNPJ", false);
		form.setEnabled("REMETENTENOME", false);
		form.setEnabled("REMETENTEENDERECO", false);
		form.setEnabled("REMETENTECIDADE", false);
		form.setEnabled("REMETENTEESTADO", false);
		form.setEnabled("REMETENTENUMERO", false);
		form.setEnabled("REMETENTEBAIRRO", false);
		form.setEnabled("REMETENTECEP", false);
		form.setEnabled("DESTINATARIOCNPJ", false);
		form.setEnabled("DESTINATARIONOME", false);
		form.setEnabled("DESTINATARIOENDERECO", false);
		form.setEnabled("DESTINATARIOCIDADE", false);
		form.setEnabled("DESTINATARIOESTADO", false);
		form.setEnabled("DESTINATARIONUMERO", false);
		form.setEnabled("DESTINATARIOBAIRRO", false);
		form.setEnabled("DESTINATARIOCEP", false);
		
		
	}
	
	if (atividade != "5"){
		customHTML.append("<script>$('#TABELA_OUTROS_BOTAO').prop('disabled', true);</script>");
		customHTML.append("<script>$('#TABELA_BATERIA_BOTAO').prop('disabled', true);</script>");
		customHTML.append("<script>$('#TABELA_CARREGADORES_BOTAO').prop('disabled', true);</script>");
		customHTML.append("<script>$('#TABELA_ACESSORIOS_BOTAO').prop('disabled', true);</script>");
		
		form.setEnabled("FUNCIONAMENTOMOTORSAIDA", false);
		form.setEnabled("RUIDOSMOTORSAIDA", false);
		form.setEnabled("NIVELDEOLEOSAIDA", false);
		form.setEnabled("SISTEMADEARREFECIMENTOSAIDA", false);
		form.setEnabled("NIVELLIQUIDOARREFECIMENTOSAIDA", false);
		form.setEnabled("TEMPERATURADOMOTORSAIDA", false);
		form.setEnabled("FILTROSDEARSAIDA", false);
		form.setEnabled("SEPARADORAGUACOMBUSTIVELSAIDA", false);
		form.setEnabled("CORREIASDOMOTORSAIDA", false);
		form.setEnabled("POLIASETENSORESSAIDA", false);
		form.setEnabled("INTERCOOLERSAIDA", false);
		form.setEnabled("COXINSESUPORTESAIDA", false);
		form.setEnabled("TURBINASAIDA", false);
		form.setEnabled("SISTEMADEESCAPESAIDA", false);
		form.setEnabled("VAZAMENTOSSAIDA", false);
		form.setEnabled("MANGUEIRASEABRACADEIRASSAIDA", false);
		form.setEnabled("CONDICOESDAFUMACASAIDA", false);
		form.setEnabled("COMPRESSORDEARSAIDA", false);
		form.setEnabled("VALVULADESEGURANCASAIDA", false);
		form.setEnabled("VALVULAAPUAPSSAIDA", false);
		form.setEnabled("VALVULAPEDALSAIDA", false);
		form.setEnabled("LONAPASTILHASAIDA", false);
		form.setEnabled("BALAODEARSAIDA", false);
		form.setEnabled("TESTEDEFRENAGEMSAIDA", false);
		form.setEnabled("FREIODEESTACIONAMENTOSAIDA", false);
		form.setEnabled("FREIOMOTORSAIDA", false);
		form.setEnabled("NIVELDEOLEOFREIOSAIDA", false);
		form.setEnabled("FREIOSAUXILIARESSAIDA", false);
		form.setEnabled("TRINCASPARAFUSOSQUEBRADOSSAIDA", false);
		form.setEnabled("PARALAMASSAIDA", false);
		form.setEnabled("PARABARROSAIDA", false);
		form.setEnabled("EXTRATORESDEPEDRASAIDA", false);
		form.setEnabled("PONTOSDEGRAXASAIDA", false);
		form.setEnabled("PLACAPINTURAESELOSAIDA", false);
		form.setEnabled("MOLASSAIDA", false);
		form.setEnabled("GRAMPOSSAIDA", false);
		form.setEnabled("PARAFUSOSDECENTROSAIDA", false);
		form.setEnabled("PINOSEBUXASSAIDA", false);
		form.setEnabled("SUPORTESSAIDA", false);
		form.setEnabled("AMORTECEDORSAIDA", false);
		form.setEnabled("MANGADEEIXOSAIDA", false);
		form.setEnabled("LUBRIFICACAOPONTOSDEGRAXASAIDA", false);
		form.setEnabled("BIELETASAIDA", false);
		form.setEnabled("BARRAESTABILIZADORASAIDA", false);
		form.setEnabled("ESTADODECONSERVACAOSAIDA", false);
		form.setEnabled("LINHASHIDRAULICASSAIDA", false);
		form.setEnabled("CABOSDEACOSAIDA", false);
		form.setEnabled("FIXACAODEIMPLEMENTOSAIDA", false);
		form.setEnabled("FAIXASREFLETIVASSAIDA", false);
		form.setEnabled("QUINTARODASAIDA", false);
		form.setEnabled("TOMADADEFORCASAIDA", false);
		form.setEnabled("PINOREISAIDA", false);
		form.setEnabled("BARRASDEIRRIGACAOPIPASAIDA", false);
		form.setEnabled("ELETROVALVULACOMREGISTROSSAIDA", false);
		form.setEnabled("BOMBADAGUASAIDA", false);
		form.setEnabled("REDUTORSAIDA", false);
		form.setEnabled("TRINCASEMCHASSISSAIDA", false);
		form.setEnabled("OLHAISDEARTICULACAOSAIDA", false);
		form.setEnabled("CORRENTESBRACOSARTICULADOSSAID", false);
		form.setEnabled("VAZAMENTOSIMPLEMENTOSSAIDA", false);
		form.setEnabled("EMBUCHAMENTOSSAIDA", false);
		form.setEnabled("SIRENEDERESAIDA", false);
		form.setEnabled("MOTORDEPARTIDASAIDA", false);
		form.setEnabled("ALTERNADORDOMOTORSAIDA", false);
		form.setEnabled("FAROISSAIDA", false);
		form.setEnabled("FAROISAUXILIARESSAIDA", false);
		form.setEnabled("LANTERNASSAIDA", false);
		form.setEnabled("REFLETORESSAIDA", false);
		form.setEnabled("LAMPADASDOSREFLETORESSAIDA", false);
		form.setEnabled("LUZDEFREIOSAIDA", false);
		form.setEnabled("LUZDERESAIDA", false);
		form.setEnabled("ILUMINACAOINTERNASAIDA", false);
		form.setEnabled("CHICOTEELETRICOSAIDA", false);
		form.setEnabled("BATERIASAIDA", false);
		form.setEnabled("BUZINASSAIDA", false);
		form.setEnabled("GERADORDEENERGIASAIDA", false);
		form.setEnabled("CODIGOSDEFALHASAIDA", false);
		form.setEnabled("TRANSMISSAOCAIXADEMARCHASSAIDA", false);
		form.setEnabled("NIVELOLEOTRANSMISSAOSAIDA", false);
		form.setEnabled("DIFERENCIALSAIDA", false);
		form.setEnabled("BLOQUEIODEDIFERENCIALSAIDA", false);
		form.setEnabled("NIVELOLEODIFERENCIALSAIDA", false);
		form.setEnabled("CRUZETASECARDANSSAIDA", false);
		form.setEnabled("ROLAMENTOSSAIDA", false);
		form.setEnabled("VAZAMENTOSTRANSMISSOESSAIDA", false);
		form.setEnabled("RUIDOSSAIDA", false);
		form.setEnabled("RUIDOSCOMANDOSSAIDA", false);
		form.setEnabled("VAZAMENTOSCOMANDOSSAIDA", false);
		form.setEnabled("PARABRISASAIDA", false);
		form.setEnabled("RETROVISORESSAIDA", false);
		form.setEnabled("VIDROSSAIDA", false);
		form.setEnabled("QUEBRASOLSAIDA", false);
		form.setEnabled("TAPECARIASAIDA", false);
		form.setEnabled("PREFIXOSLOGOTIPOSSAIDA", false);
		form.setEnabled("SUSPENSAODACABINESAIDA", false);
		form.setEnabled("ESTADODACABINESAIDA", false);
		form.setEnabled("PINTURASAIDA", false);
		form.setEnabled("CORRIMAOSAIDA", false);
		form.setEnabled("ESTRIBOSSAIDA", false);
		form.setEnabled("PORTATRANCASAIDA", false);
		form.setEnabled("CINTODESEGURANCASAIDA", false);
		form.setEnabled("LIMPADORESSAIDA", false);
		form.setEnabled("ESTADODOSBANCOSSAIDA", false);
		form.setEnabled("PAINELDEINSTRUMENTOSSAIDA", false);
		form.setEnabled("HORIMETROCABINESAIDA", false);
		form.setEnabled("CODIGODEFALHASAIDA", false);
		form.setEnabled("DIFUSORESDEARSAIDA", false);
		form.setEnabled("CLIMATIZADORSAIDA", false);
		form.setEnabled("ARCONDICIONADOSAIDA", false);
		form.setEnabled("BASCULAMENTODECABINESAIDA", false);
		form.setEnabled("LAMINASESAIDA", false);
		form.setEnabled("BORDASESAIDA", false);
		form.setEnabled("CANTOSDELAMINASAIDA", false);
		form.setEnabled("ADAPTADORESSAIDA", false);
		form.setEnabled("DENTESEENTREDENTESSAIDA", false);
		form.setEnabled("CALCOSDAMESAELAMINASESAIDA", false);
		form.setEnabled("ESCARIFICADORESSAIDA", false);
		form.setEnabled("NIVELDEOLEOHIDRAULICOSAIDA", false);
		form.setEnabled("MANGUEIRASSAIDA", false);
		form.setEnabled("COMANDOHIDRAULICOSAIDA", false);
		form.setEnabled("CILINDROSHIDRAULICOSSAIDA", false);
		form.setEnabled("LINHASHIDRAULICASHIDRASAIDA", false);
		form.setEnabled("BOMBASEMOTORESHIDRAULICOSSAIDA", false);
		form.setEnabled("MOTORESHIDRAULICOSSAIDA", false);
		form.setEnabled("RUIDOSHIDRAULICOSAIDA", false);
		form.setEnabled("VAZAMENTOSHIDRAULICOSSAIDA", false);
		form.setEnabled("VERIFICARNIVELDEOLEOSAIDA", false);
		form.setEnabled("SETORDEDIRECAOSAIDA", false);
		form.setEnabled("BARRASDEDIRECAOSAIDA", false);
		form.setEnabled("BOMBADEDIRECAOSAIDA", false);
		form.setEnabled("TERMINAISSAIDA", false);
		form.setEnabled("CILINDROSHIDRAULICOSDIRECSAIDA", false);
		form.setEnabled("LINHASHIDRAULICASDIRECAOSAIDA", false);
		form.setEnabled("RUIDOSDIRECAOSAIDA", false);
		form.setEnabled("VAZAMENTOSDIRECAOSAIDA", false);
		form.setEnabled("EXTINTORSAIDA", false);
		form.setEnabled("CHAVEDERODASAIDA", false);
		form.setEnabled("MACACOSAIDA", false);
		form.setEnabled("TRIANGULOSAIDA", false);
		form.setEnabled("PISOSAIDA", false);
		form.setEnabled("ESCAPAMENTOSAIDA", false);
		form.setEnabled("CHAVEDEIGNICAOSAIDA", false);
		form.setEnabled("LIMPEZAGERALSAIDA", false);
		form.setEnabled("PNEUSSAIDA", false);
		form.setEnabled("ESTEPESAIDA", false);
		form.setEnabled("RODASESEUSPARAFUSOSSAIDA", false);
		form.setEnabled("SEGMENTOSMOTRIZSAIDA", false);
		form.setEnabled("ROLETESINFERIORESSAIDA", false);
		form.setEnabled("ROLETESSUPERIORESSAIDA", false);
		form.setEnabled("RODASGUIASSAIDA", false);
		form.setEnabled("TENSORESSAIDA", false);
		form.setEnabled("CORRENTEDEESTEIRASAIDA", false);
		form.setEnabled("SAPATASDAESTEIRASAIDA", false);
		form.setEnabled("PINOSEBUCHASSAIDA", false);
		//=================================================================================================
		form.setEnabled("PROTECAODETETOSAIDA", false);
		form.setEnabled("ESPELHORETROVISORSAIDA", false);
		form.setEnabled("FREIOESTACIONAMENTOSAIDA", false);
		form.setEnabled("ALARMERESAIDA", false);
		form.setEnabled("FAROISMAQELETRICASAIDA", false);
		form.setEnabled("BUZINASAIDA", false);
		form.setEnabled("CINTODESEGURANCAMAQELETRICASAI", false);
		form.setEnabled("MANGUEIRASHIDRAULICASSAIDA", false);
		form.setEnabled("EXTINTORDEINCENDIOSAIDA", false);
		form.setEnabled("RODASCARGATRACAOSAIDA", false);
		form.setEnabled("CILINDROSDATORRESAIDA", false);
		form.setEnabled("GIROFLEXSAIDA", false);
		form.setEnabled("CORRENTESTORRESAIDA", false);
		form.setEnabled("CODIGOSERROOUADVERTENCIASAIDA", false);
		form.setEnabled("MASTROEGRADESAIDA", false);
		form.setEnabled("LIMPEZASAIDA", false);
		form.setEnabled("BANCOEALAVANCASSAIDA", false);
		form.setEnabled("LUZESADVERTENCIASSAIDA", false);
		form.setEnabled("PEDAISSAIDA", false);
		form.setEnabled("BATERIAMAQELETRICASAIDA", false);
		form.setEnabled("FREIODESERVICOSAIDA", false);
		form.setEnabled("OLEOHIDRAULICOREDUCAOSAIDA", false);
		form.setEnabled("LUBRIFICACAOSAIDA", false);
		form.setEnabled("CHAVESAIDA", false);
		form.setEnabled("TESTEDEFUNCIONAMENTOSAIDA", false);
		form.setEnabled("PINTURAMAQELETRICASAIDA", false);
		form.setEnabled("GARFOSSAIDA", false);
		form.setEnabled("NUMERODEFROTASAIDA", false);
		//=================================================================================================
		form.setEnabled("ADESIVODEMODELOCAPACIDADESAIDA", false);
		form.setEnabled("ADESIVODETOMBAMENTOSAIDA", false);
		form.setEnabled("ADESIVODEICAMENTOSAIDA", false);
		form.setEnabled("CONTRAPESOSAIDA", false);
		form.setEnabled("CAPOSAIDA", false);
		form.setEnabled("EXTENSAOPARALAMASAIDA", false);
		form.setEnabled("GRADEPROTECAOCARGASAIDA", false);
		form.setEnabled("DESLOCADORLATERALSAIDA", false);
		form.setEnabled("AVENTALSAIDA", false);
		form.setEnabled("EMPGARFOSSAIDA", false);
		form.setEnabled("ESTADOCORRENTESSAIDA", false);
		form.setEnabled("ROLDANASDASCORRENTESSAIDA", false);
		form.setEnabled("BATENTESDEINCLINACAOSAIDA", false);
		form.setEnabled("EMPMANGUEIRASSAIDA", false);
		form.setEnabled("CILINDROELEVACAOSAIDA", false);
		form.setEnabled("CILINDROSELEVACAOSAIDA", false);
		form.setEnabled("EMBUXAMENTOTORRESAIDA", false);
		form.setEnabled("ROLAMENTOSTORRESAIDA", false);
		form.setEnabled("FITAENCOSTOSUPERIORSAIDA", false);
		form.setEnabled("BOMBASAIDA", false);
		form.setEnabled("CONVERSORSAIDA", false);
		form.setEnabled("PACOTEFRENTE1SAIDA", false);
		form.setEnabled("PACOTEFRENTE2SAIDA", false);
		form.setEnabled("PACOTEFRENTE3SAIDA", false);
		form.setEnabled("PACOTERE1SAIDA", false);
		form.setEnabled("PACOTERE2SAIDA", false);
		form.setEnabled("PNEUSSUPERELASTICOSSAIDA", false);
		form.setEnabled("PNEUSPNEUMATICOSSAIDA", false);
		form.setEnabled("PRISIONEIROSPORCASRODASAIDA", false);
		form.setEnabled("RODASSAIDA", false);
		form.setEnabled("PINTURAGERALSAIDA", false);
		form.setEnabled("CONDICOESDALATARIASAIDA", false);
		form.setEnabled("OLEOMOTORSAIDA", false);
		form.setEnabled("OLEOTRANSMICAOSAIDA", false);
		form.setEnabled("OLEODIFERENCIALSAIDA", false);
		form.setEnabled("FLUIDOFREIOSAIDA", false);
		form.setEnabled("RESERVATORIOAGUASAIDA", false);
		form.setEnabled("OLEOHIDRAULICOSAIDA", false);
		form.setEnabled("CORREIAVENTILADORSAIDA", false);
		form.setEnabled("CORREIAALTERNADORSAIDA", false);
		form.setEnabled("EMPFAROISSAIDA", false);
		form.setEnabled("EMPLANTERNASSAIDA", false);
		form.setEnabled("PAINELDISPLAYSAIDA", false);
		form.setEnabled("EMPALARMERESAIDA", false);
		form.setEnabled("EMPBUZINASAIDA", false);
		form.setEnabled("FUNCIONAMENTOALTERNADORSAIDA", false);
		form.setEnabled("FUNCIONAMENTOMOTORPARTIDASAIDA", false);
		form.setEnabled("INDICTEMPERATURAMOTORSAIDA", false);
		form.setEnabled("ALAVANCASBOTOESSAIDA", false);
		form.setEnabled("INDICTEMPTRANSMISSAOSAIDA", false);
		form.setEnabled("EMPGIROFLEXSAIDA", false);
		form.setEnabled("BLUESPOTSAIDA", false);
		form.setEnabled("LEDSAZUISSAIDA", false);
		form.setEnabled("LIMPADORPARABRISASAIDA", false);
		form.setEnabled("EMPARCONDICIONADOSAIDA", false);
		form.setEnabled("KITFECHAMENTOSAIDA", false);
		form.setEnabled("BANCOOPERADORSAIDA", false);
		form.setEnabled("EXTINTORINCENDIOSAIDA", false);
		form.setEnabled("CINTOSEGURANCASAIDA", false);
		form.setEnabled("ESPELHOSRETROVISORESSAIDA", false);
		form.setEnabled("PLAQUETAIDENTIFICACAOSAIDA", false);
		form.setEnabled("TAPETESAIDA", false);
		form.setEnabled("QUADRODIRECIONALSAIDA", false);
		form.setEnabled("CILINDRODIRECAOSAIDA", false);
		form.setEnabled("MANGAEIXOSAIDA", false);
		form.setEnabled("MANGUEIRASDIRECAOSAIDA", false);
		form.setEnabled("EMBUXAMENTODIRECAOSAIDA", false);
		form.setEnabled("MARCHALENTASAIDA", false);
		form.setEnabled("MAXIMAROTACAOSAIDA", false);
		form.setEnabled("CILINDRO1SAIDA", false);
		form.setEnabled("CILINDRO2SAIDA", false);
		form.setEnabled("CILINDRO3SAIDA", false);
		form.setEnabled("CILINDRO4SAIDA", false);
		form.setEnabled("CILINDRO5SAIDA", false);
		form.setEnabled("CILINDRO6SAIDA", false);
		form.setEnabled("EMPFREIOESTACIONAMENTOSAI", false);
		form.setEnabled("FREIOSERVICOSAIDA", false);
		form.setEnabled("NIVELAGUASAIDA", false);
		form.setEnabled("TENSAONOMINALSAIDA", false);
		form.setEnabled("DENSIDADEDOSELEMENTOSSAIDA", false);
		form.setEnabled("ESTADOBANCOBATERIASSAIDA", false);
		form.setEnabled("PRESSAOINCLINACAOSAIDA", false);
		form.setEnabled("PRESSAODIRECAOSAIDA", false);
		form.setEnabled("PRESSAOELECACAOSAIDA", false);
		form.setEnabled("IMPLEMENTOSAIDA", false);
		form.setEnabled("EMPCOMANDOHIDRAULICOSAIDA", false);
		form.setEnabled("MANGUEIRASHIDRAULICOSAIDA", false);

		form.setEnabled("SAIDARESUMOFALHAS", false);
		form.setEnabled("SAIDAOBSERVACOES", false);
		customHTML.append("<script>$('#SAIDAANEXOFOTOS').prop('disabled', true);</script>");
	}
	
	if (atividade != "35"){
		form.setEnabled("FUNCIONAMENTOMOTORENTR", false);
		form.setEnabled("RUIDOSMOTORENTR", false);
		form.setEnabled("NIVELDEOLEOENTR", false);
		form.setEnabled("SISTEMADEARREFECIMENTOENTR", false);
		form.setEnabled("NIVELLIQUIDOARREFECIMENTOENT", false);
		form.setEnabled("TEMPERATURADOMOTORENTR", false);
		form.setEnabled("FILTROSDEARENTR", false);
		form.setEnabled("SEPARADORAGUACOMBUSTIVELENTR", false);
		form.setEnabled("CORREIASDOMOTORENTR", false);
		form.setEnabled("POLIASETENSORESENTR", false);
		form.setEnabled("INTERCOOLERENTR", false);
		form.setEnabled("COXINSESUPORTEENTR", false);
		form.setEnabled("TURBINAENTR", false);
		form.setEnabled("SISTEMADEESCAPEENTR", false);
		form.setEnabled("VAZAMENTOSENTR", false);
		form.setEnabled("MANGUEIRASEABRACADEIRASENTR", false);
		form.setEnabled("CONDICOESDAFUMACAENTR", false);
		form.setEnabled("COMPRESSORDEARENTR", false);
		form.setEnabled("VALVULADESEGURANCAENTR", false);
		form.setEnabled("VALVULAAPUAPSENTR", false);
		form.setEnabled("VALVULAPEDALENTR", false);
		form.setEnabled("LONAPASTILHAENTR", false);
		form.setEnabled("BALAODEARENTR", false);
		form.setEnabled("TESTEDEFRENAGEMENTR", false);
		form.setEnabled("FREIODEESTACIONAMENTOENTR", false);
		form.setEnabled("FREIOMOTORENTR", false);
		form.setEnabled("NIVELDEOLEOFREIOENTR", false);
		form.setEnabled("FREIOSAUXILIARESENTR", false);
		form.setEnabled("TRINCASEPARAFUSOSQUEBRADOSENTR", false);
		form.setEnabled("PARALAMASENTR", false);
		form.setEnabled("PARABARROENTR", false);
		form.setEnabled("EXTRATORESDEPEDRAENTR", false);
		form.setEnabled("PONTOSDEGRAXAENTR", false);
		form.setEnabled("PLACAPINTURAESELOENTR", false);
		form.setEnabled("MOLASENTR", false);
		form.setEnabled("GRAMPOSENTR", false);
		form.setEnabled("PARAFUSOSDECENTROENTR", false);
		form.setEnabled("PINOSEBUXASENTR", false);
		form.setEnabled("SUPORTESENTR", false);
		form.setEnabled("AMORTECEDORENTR", false);
		form.setEnabled("MANGADEEIXOENTR", false);
		form.setEnabled("LUBRIFICACAOPONTOSDEGRAXAENTR", false);
		form.setEnabled("BIELETAENTR", false);
		form.setEnabled("BARRAESTABILIZADORAENTR", false);
		form.setEnabled("ESTADODECONSERVACAOENTR", false);
		form.setEnabled("LINHASHIDRAULICASENTR", false);
		form.setEnabled("CABOSDEACOENTR", false);
		form.setEnabled("FIXACAODEIMPLEMENTOENTR", false);
		form.setEnabled("FAIXASREFLETIVASENTR", false);
		form.setEnabled("QUINTARODAENTR", false);
		form.setEnabled("TOMADADEFORCAENTR", false);
		form.setEnabled("PINOREIENTR", false);
		form.setEnabled("BARRASDEIRRIGACAOPIPAENTR", false);
		form.setEnabled("ELETROVALVULACOMREGISTROSENTR", false);
		form.setEnabled("BOMBADAGUAENTR", false);
		form.setEnabled("REDUTORENTR", false);
		form.setEnabled("TRINCASEMCHASSISENTR", false);
		form.setEnabled("OLHAISDEARTICULACAOENTR", false);
		form.setEnabled("CORRENTESBRACOSARTICULADOSENTR", false);
		form.setEnabled("VAZAMENTOSIMPLEMENTOSENTR", false);
		form.setEnabled("EMBUCHAMENTOSENTR", false);
		form.setEnabled("SIRENEDEREENTR", false);
		form.setEnabled("MOTORDEPARTIDAENTR", false);
		form.setEnabled("ALTERNADORDOMOTORENTR", false);
		form.setEnabled("FAROISENTR", false);
		form.setEnabled("FAROISAUXILIARESENTR", false);
		form.setEnabled("LANTERNASENTR", false);
		form.setEnabled("REFLETORESENTR", false);
		form.setEnabled("LAMPADASDOSREFLETORESENTR", false);
		form.setEnabled("LUZDEFREIOENTR", false);
		form.setEnabled("LUZDEREENTR", false);
		form.setEnabled("ILUMINACAOINTERNAENTR", false);
		form.setEnabled("CHICOTEELETRICOENTR", false);
		form.setEnabled("BATERIAENTR", false);
		form.setEnabled("BUZINASENTR", false);
		form.setEnabled("GERADORDEENERGIAENTR", false);
		form.setEnabled("CODIGOSDEFALHAENTR", false);
		form.setEnabled("TRANSMISSAOCAIXADEMARCHASENTR", false);
		form.setEnabled("NIVELOLEOTRANSMISSAOENTR", false);
		form.setEnabled("DIFERENCIALENTR", false);
		form.setEnabled("BLOQUEIODEDIFERENCIALENTR", false);
		form.setEnabled("NIVELOLEODIFERENCIALENTR", false);
		form.setEnabled("CRUZETASECARDANSENTR", false);
		form.setEnabled("ROLAMENTOSENTR", false);
		form.setEnabled("VAZAMENTOSTRANSMISSOESENTR", false);
		form.setEnabled("RUIDOSENTR", false);
		form.setEnabled("RUIDOSCOMANDOSENTR", false);
		form.setEnabled("VAZAMENTOSCOMANDOSENTR", false);
		form.setEnabled("PARABRISAENTR", false);
		form.setEnabled("RETROVISORESENTR", false);
		form.setEnabled("VIDROSENTR", false);
		form.setEnabled("QUEBRASOLENTR", false);
		form.setEnabled("TAPECARIAENTR", false);
		form.setEnabled("PREFIXOSLOGOTIPOSENTR", false);
		form.setEnabled("SUSPENSAODACABINEENTR", false);
		form.setEnabled("ESTADODACABINEENTR", false);
		form.setEnabled("PINTURAENTR", false);
		form.setEnabled("CORRIMAOENTR", false);
		form.setEnabled("ESTRIBOSENTR", false);
		form.setEnabled("PORTATRANCAENTR", false);
		form.setEnabled("CINTODESEGURANCAENTR", false);
		form.setEnabled("LIMPADORESENTR", false);
		form.setEnabled("ESTADODOSBANCOSENTR", false);
		form.setEnabled("PAINELDEINSTRUMENTOSENTR", false);
		form.setEnabled("HORIMETROCABINEENTR", false);
		form.setEnabled("CODIGODEFALHAENTR", false);
		form.setEnabled("DIFUSORESDEARENTR", false);
		form.setEnabled("CLIMATIZADORENTR", false);
		form.setEnabled("ARCONDICIONADOENTR", false);
		form.setEnabled("BASCULAMENTODECABINEENTR", false);
		form.setEnabled("LAMINASENTR", false);
		form.setEnabled("BORDASENTR", false);
		form.setEnabled("CANTOSDELAMINAENTR", false);
		form.setEnabled("ADAPTADORESENTRADA", false);
		form.setEnabled("DENTESEENTREDENTESENTR", false);
		form.setEnabled("CALCOSDAMESAELAMINASENTR", false);
		form.setEnabled("ESCARIFICADORESENTR", false);
		form.setEnabled("NIVELDEOLEOHIDRAULICOENTR", false);
		form.setEnabled("MANGUEIRASENTR", false);
		form.setEnabled("COMANDOHIDRAULICOENTR", false);
		form.setEnabled("CILINDROSHIDRAULICOSENTR", false);
		form.setEnabled("LINHASHIDRAULICASHIDRAENTR", false);
		form.setEnabled("BOMBASEMOTORESHIDRAULICOSENTR", false);
		form.setEnabled("MOTORESHIDRAULICOSENTR", false);
		form.setEnabled("RUIDOSHIDRAULICOENTR", false);
		form.setEnabled("VAZAMENTOSHIDRAULICOSENTR", false);
		form.setEnabled("VERIFICARNIVELDEOLEOENTR", false);
		form.setEnabled("SETORDEDIRECAOENTR", false);
		form.setEnabled("BARRASDEDIRECAOENTR", false);
		form.setEnabled("BOMBADEDIRECAOENTR", false);
		form.setEnabled("TERMINAISENTR", false);
		form.setEnabled("CILINDROSHIDRAULICOSDIRECENTR", false);
		form.setEnabled("LINHASHIDRAULICASDIRECAOENTR", false);
		form.setEnabled("RUIDOSDIRECAOENTR", false);
		form.setEnabled("VAZAMENTOSDIRECAOENTR", false);
		form.setEnabled("EXTINTORENTR", false);
		form.setEnabled("CHAVEDERODAENTR", false);
		form.setEnabled("MACACOENTR", false);
		form.setEnabled("TRIANGULOENTR", false);
		form.setEnabled("PISOENTR", false);
		form.setEnabled("ESCAPAMENTOENTR", false);
		form.setEnabled("CHAVEDEIGNICAOENTR", false);
		form.setEnabled("LIMPEZAGERALENTR", false);
		form.setEnabled("PNEUSENTR", false);
		form.setEnabled("ESTEPEENTR", false);
		form.setEnabled("RODASESEUSPARAFUSOSENTR", false);
		form.setEnabled("SEGMENTOSMOTRIZENTR", false);
		form.setEnabled("ROLETESINFERIORESENTR", false);
		form.setEnabled("ROLETESSUPERIORESENTR", false);
		form.setEnabled("RODASGUIASENTR", false);
		form.setEnabled("TENSORESENTR", false);
		form.setEnabled("CORRENTEDEESTEIRAENTR", false);
		form.setEnabled("SAPATASDAESTEIRAENTR", false);
		form.setEnabled("PINOSEBUCHASENTR", false);
		//=================================================================================================
		form.setEnabled("PROTECAODETETOENTRADA", false);
		form.setEnabled("ESPELHORETROVISORENTRADA", false);
		form.setEnabled("FREIOESTACIONAMENTOENTRADA", false);
		form.setEnabled("ALARMEREENTRADA", false);
		form.setEnabled("FAROISMAQELETRICAENTRADA", false);
		form.setEnabled("BUZINAENTRADA", false);
		form.setEnabled("CINTODESEGURANCAMAQELETRICAENT", false);
		form.setEnabled("MANGUEIRASHIDRAULICASENTRADA", false);
		form.setEnabled("EXTINTORDEINCENDIOENTRADA", false);
		form.setEnabled("RODASCARGATRACAOENTRADA", false);
		form.setEnabled("CILINDROSDATORREENTRADA", false);
		form.setEnabled("GIROFLEXENTRADA", false);
		form.setEnabled("CORRENTESTORREENTRADA", false);
		form.setEnabled("CODIGOSERROOUADVERTENCIAENTR", false);
		form.setEnabled("MASTROEGRADEENTRADA", false);
		form.setEnabled("LIMPEZAENTRADA", false);
		form.setEnabled("BANCOEALAVANCASENTRADA", false);
		form.setEnabled("LUZESADVERTENCIASENTRADA", false);
		form.setEnabled("PEDAISENTRADA", false);
		form.setEnabled("BATERIAMAQELETRICAENTR", false);
		form.setEnabled("FREIODESERVICOENTRADA", false);
		form.setEnabled("OLEOHIDRAULICOREDUCAOENTR", false);
		form.setEnabled("LUBRIFICACAOENTRADA", false);
		form.setEnabled("CHAVEENTRADA", false);
		form.setEnabled("TESTEDEFUNCIONAMENTOENTR", false);
		form.setEnabled("PINTURAMAQELETRICAENTRADA", false);
		form.setEnabled("GARFOSENTRADA", false);
		form.setEnabled("NUMERODEFROTAENTRADA", false);
		//=================================================================================================
		form.setEnabled("ADESIVODEMODELOCAPACIDADEENT", false);
		form.setEnabled("ADESIVODETOMBAMENTOENTRADA", false);
		form.setEnabled("ADESIVODEICAMENTOENTRADA", false);
		form.setEnabled("CONTRAPESOENTRADA", false);
		form.setEnabled("CAPOENTRADA", false);
		form.setEnabled("EXTENSAOPARALAMAENTRADA", false);
		form.setEnabled("GRADEPROTECAOCARGAENTRADA", false);
		form.setEnabled("DESLOCADORLATERALENTRADA", false);
		form.setEnabled("AVENTALENTRADA", false);
		form.setEnabled("EMPGARFOSENTRADA", false);
		form.setEnabled("ESTADOCORRENTESENTRADA", false);
		form.setEnabled("ROLDANASDASCORRENTESENTRADA", false);
		form.setEnabled("BATENTESDEINCLINACAOENTRADA", false);
		form.setEnabled("MANGUEIRASENTRADA", false);
		form.setEnabled("CILINDROELEVACAOENTRADA", false);
		form.setEnabled("CILINDROSELEVACAOENTRADA", false);
		form.setEnabled("EMBUXAMENTOTORREENTRADA", false);
		form.setEnabled("ROLAMENTOSTORREENTRADA", false);
		form.setEnabled("FITAENCOSTOSUPERIORENTRADA", false);
		form.setEnabled("BOMBAENTRADA", false);
		form.setEnabled("CONVERSORENTRADA", false);
		form.setEnabled("PACOTEFRENTE1ENTRADA", false);
		form.setEnabled("PACOTEFRENTE2ENTRADA", false);
		form.setEnabled("PACOTEFRENTE3ENTRADA", false);
		form.setEnabled("PACOTERE1ENTRADA", false);
		form.setEnabled("PACOTERE2ENTRADA", false);
		form.setEnabled("PNEUSSUPERELASTICOSENTRADA", false);
		form.setEnabled("PNEUSPNEUMATICOSENTRADA", false);
		form.setEnabled("PRISIONEIROSPORCASRODAENTRADA", false);
		form.setEnabled("RODASENTRADA", false);
		form.setEnabled("PINTURAGERALENTRADA", false);
		form.setEnabled("CONDICOESDALATARIAENTRADA", false);
		form.setEnabled("OLEOMOTORENTRADA", false);
		form.setEnabled("OLEOTRANSMICAOENTRADA", false);
		form.setEnabled("OLEODIFERENCIALENTRADA", false);
		form.setEnabled("FLUIDOFREIOENTRADA", false);
		form.setEnabled("RESERVATORIOAGUAENTRADA", false);
		form.setEnabled("OLEOHIDRAULICOENTRADA", false);
		form.setEnabled("CORREIAVENTILADORENTRADA", false);
		form.setEnabled("CORREIAALTERNADORENTRADA", false);
		form.setEnabled("FAROISENTRADA", false);
		form.setEnabled("LANTERNASENTRADA", false);
		form.setEnabled("PAINELDISPLAYENTRADA", false);
		form.setEnabled("EMPALARMEREENTRADA", false);
		form.setEnabled("EMPBUZINAENTRADA", false);
		form.setEnabled("FUNCIONAMENTOALTERNADORENTRADA", false);
		form.setEnabled("FUNCIONAMENTOMOTORPARTIDAENT", false);
		form.setEnabled("INDICTEMPERATURAMOTORENTRADA", false);
		form.setEnabled("ALAVANCASBOTOESENTRADA", false);
		form.setEnabled("INDICTEMPTRANSMISSAOENT", false);
		form.setEnabled("EMPGIROFLEXENTRADA", false);
		form.setEnabled("BLUESPOTENTRADA", false);
		form.setEnabled("LEDSAZUISENTRADA", false);
		form.setEnabled("LIMPADORPARABRISAENTRADA", false);
		form.setEnabled("ARCONDICIONADOENTRADA", false);
		form.setEnabled("KITFECHAMENTOENTRADA", false);
		form.setEnabled("BANCOOPERADORENTRADA", false);
		form.setEnabled("EXTINTORINCENDIOENTRADA", false);
		form.setEnabled("CINTOSEGURANCAENTRADA", false);
		form.setEnabled("ESPELHOSRETROVISORESENTRADA", false);
		form.setEnabled("PLAQUETAIDENTIFICACAOENTRADA", false);
		form.setEnabled("TAPETEENTRADA", false);
		form.setEnabled("QUADRODIRECIONALENTRADA", false);
		form.setEnabled("CILINDRODIRECAOENTRADA", false);
		form.setEnabled("MANGAEIXOENTRADA", false);
		form.setEnabled("MANGUEIRASDIRECAOENTRADA", false);
		form.setEnabled("EMBUXAMENTODIRECAOENTRADA", false);
		form.setEnabled("MARCHALENTAENTRADA", false);
		form.setEnabled("MAXIMAROTACAOENTRADA", false);
		form.setEnabled("CILINDRO1ENTRADA", false);
		form.setEnabled("CILINDRO2ENTRADA", false);
		form.setEnabled("CILINDRO3ENTRADA", false);
		form.setEnabled("CILINDRO4ENTRADA", false);
		form.setEnabled("CILINDRO5ENTRADA", false);
		form.setEnabled("CILINDRO6NTRADA", false);
		form.setEnabled("EMPFREIOESTACIONAMENTOENTR", false);
		form.setEnabled("FREIOSERVICOENTRADA", false);
		form.setEnabled("NIVELAGUAENTRADA", false);
		form.setEnabled("TENSAONOMINALENTRADA", false);
		form.setEnabled("DENSIDADEDOSELEMENTOSENTRADA", false);
		form.setEnabled("ESTADOBANCOBATERIASENTRADA", false);
		form.setEnabled("PRESSAOINCLINACAOENTRADA", false);
		form.setEnabled("PRESSAODIRECAOENTRADA", false);
		form.setEnabled("PRESSAOELECACAOENTRADA", false);
		form.setEnabled("IMPLEMENTOENTRADA", false);
		form.setEnabled("COMANDOHIDRAULICOENTRADA", false);
		form.setEnabled("MANGUEIRASHIDRAULICOENTRADA", false);

		form.setEnabled("ENTRADARESUMOFALHAS", false);
		form.setEnabled("ENTRADAOBSERVACOES", false);
		customHTML.append("<script>$('#ENTRADAANEXOFOTOS').prop('disabled', true);</script>");
	}
	
	if (atividade != "48"){
		customHTML.append("<script>$('#CHECKLISTACORDOGESTORSAIDA').attr('readonly', 'readonly');</script>");
		
		form.setEnabled("CHECKLISTOBSGESTORSAIDA", false);
		
	}
	
	if (atividade != "16"){
		customHTML.append("<script>$('#MOBILIZACAOACEITESUP1').attr('readonly', 'readonly');</script>");
	
		form.setEnabled("MOBILIZACAOOBSSUP1", false);
		
	}
	if (atividade != "159"){
		
		customHTML.append("<script>$('#MOBILIZACAOACEITESUP2').attr('readonly', 'readonly');</script>");

		form.setEnabled("MOBILIZACAOOBSSUP2", false);
	}
	
	if (atividade != "20"){
		customHTML.append("<script>$('#FRETETIPOLOGISTICA').attr('readonly', 'readonly');</script>");

		form.setEnabled("FRETEVALORLOGISTICA", false);
		form.setEnabled("FRETEINTERNONOMEMOTORISTA", false);
		form.setEnabled("FRETEINTERNOCPFMOTORISTA", false);
		form.setEnabled("FRETEINTERNOPLACAVEICULO", false);
		form.setEnabled("FRETEOBSLOGISTICA", false);
		form.setEnabled("FORNECEDOR", false);
		form.setEnabled("DATACOLETA", false);
		form.setEnabled("CLASSIFICACAO", false);
		form.setEnabled("APROVADOR", false);
		form.setEnabled("FILIAL_DESTINO", false);
		form.setEnabled("DEPARTAMENTO", false);
		form.setEnabled("CCUSTO", false);
		customHTML.append("<script>$('#TABELA_ITENSSOLICITACAO_BOTAO').prop('disabled', true);</script>");
		
	}
	
	if (atividade != "26"){
		customHTML.append("<script>$('#COMPRASANEXO').prop('disabled', true);</script>");
		
		form.setEnabled("ORCAMENTOOBSCOMPRAS", false);
	}
	
	if (atividade != "41"){
		form.setEnabled("SOLICITACAOFRETENOMEMOTORISTA", false);
		form.setEnabled("SOLICITACAOFRETECPFMOTORISTA", false);
		form.setEnabled("SOLICITACAOFRETETRANSPORTADORA", false);
		form.setEnabled("SOLICITACAOFRETEPLACA", false);
		form.setEnabled("SOLICITACAOFRETEDATACOLETA", false);
	}
	
	if (atividade != "81" && atividade != "110"){
		customHTML.append("<script>$('#SOLICITACAOFRETEANEXO').prop('disabled', true);</script>");
		customHTML.append("<script>$('#CONSULTARAPROVACAOREQUISICAO').prop('disabled', true);</script>");
		
		form.setEnabled("SOLICITANFNUMEROMOV", false);
	}

	if (atividade != "136"){
		customHTML.append("<script>$('#CONSULTARAPROVACAOOC').prop('disabled', true);</script>");
		
		form.setEnabled("ADICIONALCOMBUSTIVEL", false);
		form.setEnabled("SOLICITAOCNUMEROMOV", false);
	}
	
	if (atividade != "31"){
		form.setEnabled("FISCALSOLICITANF", false);
	}
	
	if (atividade != "33"){
		customHTML.append("<script>$('#FISCALANEXONF').prop('disabled', true);</script>");
		
		form.setEnabled("FISCALNUMERONF", false);
		form.setEnabled("FISCALOBSNF", false);
	}
	
	if (atividade != "54"){
		customHTML.append("<script>$('#CHECKLISTACORDOGESTORENTR').attr('readonly', 'readonly');</script>");
		
		form.setEnabled("CHECKLISTOBSGESTORENTR", false);
	}
	
	if (atividade != "100"){
		form.setEnabled("POSTAGEMNFNUMSOLICITACAO", false);
		form.setEnabled("OBSRECEBIMENTO", false);
	}
	
	if (atividade != "39"){
		customHTML.append("<script>$('#PCMBOTAOALOCACAO').prop('disabled', true);</script>");
		
		form.setEnabled("PCMOBSERVACOES", false);
	}
	
	if (atividade != "116"){
		form.setEnabled("LEVANTAMENTONUMEROOSSAIDA", false);
	}
	
	if (atividade != "118"){
		customHTML.append("<script>$('#LEVANTAMENTOOSAPROVACAOSAIDA').prop('disabled', true);</script>");
	}
	
	if (atividade != "58"){
		form.setEnabled("LEVANTAMENTONUMEROOSENTR", false);
	}
	
	if (atividade != "66"){
		customHTML.append("<script>$('#LEVANTAMENTOOSAPROVACAOENTR').prop('disabled', true);</script>");
	}
	
}
//==============================================================================================================================================
function usuarioLogado(form, customHTML) {

	var matrUser = getValue("WKUser");
	var atividade = String(getValue("WKNumState"));
	var nomeUser = "";
	var emailUser = "";
	var loginUser = "";
	
	var fields = [ "colleagueName", "mail", "login" ];
	var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", 
			matrUser, matrUser, ConstraintType.MUST);
	var c2 = DatasetFactory.createConstraint("colleaguePK.companyId",
			getValue("WKCompany"), getValue("WKCompany"), ConstraintType.MUST);
	
	var dataset = DatasetFactory.getDataset("colleague", fields, [ c1, c2 ],
			null);
	
	if (dsTemValor(dataset)) {
		emailUser = dataset.getValue(0, "mail");

		if (temValor(emailUser)) {
			if ( atividade == "0" || atividade == "4" ){
				form.setValue("EMAILREMETENTE", emailUser);
			}
		}
	}
}
function temValor(valor) {
	if (valor != null && valor != undefined && valor.trim() != "") {
		return true;
	} else {
		return false;
	}
}
function dsTemValor(dataset) {
	if (dataset != null && dataset != undefined && dataset.rowsCount > 0) {
		return true;
	} else {
		return false;
	}
}