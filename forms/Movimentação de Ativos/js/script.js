function showCamera(param) { 
	JSInterface.showCamera(param); 
}
//==============================================================================================================================================
function data(campo){
	var dateTime = FLUIGC.calendar(campo, {
	    pickDate: true,
	    pickTime: false,
	    sideBySide: false,
	    minDate: new Date()
	});
}
//==============================================================================================================================================
function dataColeta(campo){
	var dateTime = FLUIGC.calendar(campo, {
	    pickDate: true,
	    pickTime: true,
	    sideBySide: true,
	    minDate: new Date()
	});
}
//==============================================================================================================================================
function onLoad(){
	
	dataSolicitacao(document.getElementById("DATASOLICITACAO"));
	mostraFormulario();
	FLUIGC.switcher.init("#CHECKLISTACORDOGESTORSAIDA");
	FLUIGC.switcher.init("#MOBILIZACAOACEITEDESTINATARIO");
	FLUIGC.switcher.init("#MOBILIZACAOOSREMETENTEDEST");
	FLUIGC.switcher.init("#MOBILIZACAOACEITESUP1");
	FLUIGC.switcher.init("#MOBILIZACAOACEITESUP2");
	FLUIGC.switcher.init("#CHECKLISTACORDOGESTORENTR");
	FLUIGC.switcher.init("#CHECKLISTOSGESTORENTR");
	FLUIGC.switcher.init("#MOBILIZACAOACEITELOGISTICA");
	habilitaCampoNFparaTransporte();
	liberaOpcoesTipoFrete();
	FLUIGC.switcher.initAll("#TABELA_OUTROS");
	FLUIGC.switcher.initAll("#TABELA_BATERIA");
	FLUIGC.switcher.initAll("#TABELA_CARREGADORES");
	FLUIGC.switcher.initAll("#TABELA_ACESSORIOS");
	bloqueiaCamposTabelasPaiFilho();
	
}
//==============================================================================================================================================
function tipoTorre(tipo){
	tipo.value === "Montada" ?
		document.getElementById("ALTURAFINAL").readOnly = false : 
			document.getElementById("ALTURAFINAL").readOnly = true
			document.getElementById("ALTURAFINAL").value = ""
} 
//==============================================================================================================================================
function dataSolicitacao(campo){
	if (campo.value == ""){			
			var data = new Date()
			var d = data.getDate() < 10 ? ("0"+data.getDate()) : data.getDate()
			var m = (data.getMonth()+1) < 10 ? ("0"+(data.getMonth()+1)) : (data.getMonth()+1)
			var y = data.getFullYear()
			
			data = d +"/"+ m +"/"+ y
			campo.value = data
		}
}
//==============================================================================================================================================
function addLinhaTabela(tabela){
	
	wdkAddChild(tabela);
	MaskEvent.init();
	//$('input[id^="ITENSPRECOUNITARIO___"]:last').mask("#00.000,00");
	FLUIGC.switcher.initAll("#"+tabela);
	
	//console.log($('.check-to-block'))
	
	$('.check-to-block').each(function(index, value){
		if (value.id.indexOf('___') > -1){
			FLUIGC.switcher.disable(value)
		}
	});
	
}
//==============================================================================================================================================
function deleteLinhaTabela(campo, tabela){
	if(document.getElementById("WKNumState").value == "5" && tabela == "TABELA_OUTROS_BOTAO"){
		fnWdkRemoveChild(campo);
	} else if ((document.getElementById("WKNumState").value == "0" || document.getElementById("WKNumState").value == "4") && tabela == "TABELA_ITENSSOLICITACAO"){
		fnWdkRemoveChild(campo);
	} else {
		fnWdkRemoveChild(campo);
	}
}
//==============================================================================================================================================
function botaoSwitch(campo){
	/* No checklist esta função serve para as tabelas Pai X Filho
	 *	Já que os campos radio não funcionam bem, tive que criar campos separados e
	 * 	utilizar a função seguinte para desmarcar os outros simulando a funcionalidade dos campos radio
	 */
	if (FLUIGC.switcher.getState("#"+campo.id)){
		var linha = campo.closest("tr")
		var botao = null
		var max = linha.cells.length + 1
		for (var i=1;i<linha.cells.length;i++){
			try{
				botao = linha.cells[i].getElementsByTagName("input")[0]
				
				if ( botao.getAttribute( "id" ).split("___")[0].slice(0, -1) == campo.id.split("___")[0].slice(0, -1) 
						&& botao.getAttribute( "type" ) != "text"
							&& botao.getAttribute( "id" ) != campo.id ){

					FLUIGC.switcher.setFalse("#"+botao.getAttribute( "id" ))
				}
			} catch (e) {
				console.log("Catch: "+e)
			}
		}
	}
	
}
//==============================================================================================================================================
function tipoEquipamento(tipo){
	
	if(tipo == "MAQUINASECAMINHOES"){
		document.getElementById("MAQUINASECAMINHOES").style.display = "block";
		document.getElementById("MAQUINAELETRICA").style.display = "none";
		document.getElementById("EMPILHADEIRA").style.display = "none";
	} else if(tipo == "MAQUINAELETRICA"){
		document.getElementById("MAQUINASECAMINHOES").style.display = "none";
		document.getElementById("MAQUINAELETRICA").style.display = "block";
		document.getElementById("EMPILHADEIRA").style.display = "none";
	} else if(tipo == "EMPILHADEIRA"){
		document.getElementById("MAQUINASECAMINHOES").style.display = "none";
		document.getElementById("MAQUINAELETRICA").style.display = "none";
		document.getElementById("EMPILHADEIRA").style.display = "block";
	} else {
		document.getElementById("MAQUINASECAMINHOES").style.display = "none";
		document.getElementById("MAQUINAELETRICA").style.display = "none";
		document.getElementById("EMPILHADEIRA").style.display = "none";
	}
		
}
//==============================================================================================================================================
function setSelectedZoomItem(selectedItem) {
	console.log("SelectedItem function")
	if (selectedItem.inputId == "EQUIPAMENTO") {
		console.log("Equipamento")
		document.getElementById("MODELO").value = selectedItem["MODELO"]
		//document.getElementById("HORIMETRO").value = selectedItem["HORIMETRO"]
		//document.getElementById("ANO").value = selectedItem["ANO"]
		//document.getElementById("PLACA").value = selectedItem["PLACA"]
		//document.getElementById("CHASSI").value = selectedItem["CHASSI"]
		document.getElementById("LOCALORIGEM").value = selectedItem["LOCALORIGEM"]
		document.getElementById("CCORIGEM").value = selectedItem["CCORIGEM"]
		document.getElementById("CODCCORIGEM").value = selectedItem["CODCCORIGEM"]
		document.getElementById("RESPORIGEM").value = selectedItem["RESPONSAVEL"]
		document.getElementById("FILIAL").value = selectedItem["FILIAL"]
		//document.getElementById("CODFILIAL").value = selectedItem["CODFILIAL"]
		 
		document.getElementById("PRECOAQUISICAO").value = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(selectedItem["AQUISICAO"])
	}
	if (selectedItem.inputId == "REMETENTECNPJ") {
		document.getElementById("REMETENTENOME").value = selectedItem["NOMEFANTASIA"]
		document.getElementById("REMETENTEENDERECO").value = selectedItem["ENDERECO"]
		document.getElementById("REMETENTECIDADE").value = selectedItem["CIDADE"]
		document.getElementById("REMETENTEESTADO").value = selectedItem["ESTADO"]
		document.getElementById("REMETENTENUMERO").value = selectedItem["NUMERO"]
		document.getElementById("REMETENTEBAIRRO").value = selectedItem["BAIRRO"]
		document.getElementById("REMETENTECEP").value = selectedItem["CEP"]
	}
	if (selectedItem.inputId == "DESTINATARIOCNPJ") {
		document.getElementById("DESTINATARIONOME").value = selectedItem["NOMEFANTASIA"]
		document.getElementById("DESTINATARIOENDERECO").value = selectedItem["ENDERECO"]
		document.getElementById("DESTINATARIOCIDADE").value = selectedItem["CIDADE"]
		document.getElementById("DESTINATARIOESTADO").value = selectedItem["ESTADO"]
		document.getElementById("DESTINATARIONUMERO").value = selectedItem["NUMERO"]
		document.getElementById("DESTINATARIOBAIRRO").value = selectedItem["BAIRRO"]
		document.getElementById("DESTINATARIOCEP").value = selectedItem["CEP"]
	}

	if (selectedItem.inputId == "RESPDESTINO") {
		document.getElementById("EMAILDESTINATARIO").value = selectedItem["EMAIL"]
	}
	if (selectedItem.inputId == "FILIAL_DESTINO") {
		document.getElementById("COD_FILIAL").value = selectedItem["CODFILIAL"]
		reloadZoomFilterValues("DEPARTAMENTO", "CODFILIAL," +selectedItem["CODFILIAL"]);
	}
	if (selectedItem.inputId == "DEPARTAMENTO") {
		document.getElementById("COD_DEPARTAMENTO").value = selectedItem["CODDEPARTAMENTO"]
		
	}
	if (selectedItem.inputId == "CCUSTO") {
		document.getElementById("COD_CCUSTO").value = selectedItem["CODCCUSTO"]
		
	}
	/*
	if (selectedItem.inputId == "LEVANTAMENTONUMEROOSENTR") {
		console.log(selectedItem)
		var numeroOS = document.getElementById("LEVANTAMENTONUMEROOSENTR").value
		var c1 = DatasetFactory.createConstraint("NUMEROMOV", numeroOS, numeroOS, ConstraintType.MUST);
		var constraints = new Array(c1);
		try{
			var dataset = DatasetFactory.getDataset("ds_Movimentos_Relacionados_OS", null, constraints, null);
			 var row = dataset.values[0];  
				console.log(row)
			 
			document.getElementById("LEVANTAMENTOOSRELACIONADOSENTR").value = row["Lista"];
			
		}catch(e){
		 console.log(e);
		}
	}

	if (selectedItem.inputId == "LEVANTAMENTONUMEROOSSAIDA") {
		console.log(selectedItem)
		var numeroOS = document.getElementById("LEVANTAMENTONUMEROOSSAIDA").value
		var c1 = DatasetFactory.createConstraint("NUMEROMOV", numeroOS, numeroOS, ConstraintType.MUST);
		var constraints = new Array(c1);
		try{
			var dataset = DatasetFactory.getDataset("ds_Movimentos_Relacionados_OS", null, constraints, null);
			 var row = dataset.values[0];  
				console.log(row)
			 
			document.getElementById("LEVANTAMENTOOSRELACIONADOSSAID").value = row["Lista"];
			
		}catch(e){
		 console.log(e);
		}
	}
	*/
	if (selectedItem.inputId == "APROVADOR") {
		document.getElementById("APROVADORMATRICULA").value = selectedItem["USER_CODE"]
	}
	
	if (selectedItem.inputId == "FORNECEDOR") {
		document.getElementById("CODCFO").value = selectedItem["CODCFO"]
	}
	
	if (selectedItem.inputId == "SOLICITAOCNUMEROMOV") {
		document.getElementById("SOLICITAOCIDMOV").value = selectedItem["IDMOV"]
	}
	
	var string = selectedItem.inputId
	var index = string.slice(string.indexOf('___')+3, string.length)
	if (selectedItem.inputId.split('___', 1)[0] == "ITENSPRODUTO") {
		document.getElementById("ITENSUNIDADE___"+index).value = selectedItem["CODUNDCONTROLE"]
	document.getElementById("ITENSIDPRD___"+index).value = selectedItem["IDPRD"]
	document.getElementById("ITENSCODIGOPRD___"+index).value = selectedItem["CODIGOPRD"]
	}
}

function setZoomData(instance, value) {
	window[instance].setValue(value);
}

function removedZoomItem(removedItem) {

	if (removedItem.inputId == "EQUIPAMENTO" || removedItem.inputId == "SERIE") {
		window["SERIE"].clear();
		window["EQUIPAMENTO"].clear();
		//someDepartamento()
		document.getElementById("MODELO").value = ""
		document.getElementById("HORIMETRO").value = ""
		document.getElementById("ANO").value = ""
		document.getElementById("PLACA").value = ""
		document.getElementById("CHASSI").value = ""
		document.getElementById("LOCALORIGEM").value = ""
		document.getElementById("CCORIGEM").value = ""
		document.getElementById("CODCCORIGEM").value = ""
		document.getElementById("RESPORIGEM").value = ""
		document.getElementById("PRECOAQUISICAO").value = ""
		document.getElementById("FILIAL").value = ""
		document.getElementById("CODFILIAL").value = ""
		document.getElementById("FILIAL").value = ""
		document.getElementById("CODFILIAL").value = ""
		document.getElementById("DEPARTAMENTO").value = ""
		document.getElementById("RED_DEPARTAMENTO").value = ""

	}
}
//==============================================================================================================================================
function liberaObservacaoCheckListGestorEntr(){
	if (FLUIGC.switcher.getState("#CHECKLISTACORDOGESTORENTR")){
		document.getElementById("CHECKLISTOBSGESTORENTR").disabled = true
	} else {
		document.getElementById("CHECKLISTOBSGESTORENTR").disabled = false
	}
}
//==============================================================================================================================================
function liberaOpcoesTipoFrete(){
	if (!FLUIGC.switcher.getState("#FRETETIPOLOGISTICA")){
		//document.getElementById("FRETEVALORLOGISTICA").disabled = true
		document.getElementById("DADOSMOTORISTAFRETEINTERNO").style.display = "none"
	} else {
		//document.getElementById("FRETEVALORLOGISTICA").disabled = false
		document.getElementById("DADOSMOTORISTAFRETEINTERNO").style.display = "block"
	}
}
//==============================================================================================================================================
function buscarLocalizacaoAtual(){
	
	var equipamento = document.getElementById("EQUIPAMENTO").value
	try{
        var c1 = DatasetFactory.createConstraint("EQUIPAMENTO", equipamento, equipamento, ConstraintType.MUST);
    	var constraints = new Array(c1);
    	var dataset = DatasetFactory.getDataset("ds_dados_ativos", null, constraints, null);
    	
    	var row = dataset.values[0]; 
    	document.getElementById("PCMCCATUAL").value = row[dataset.columns[5]];
    	document.getElementById("PCMLOCALIZACAOATUAL").value = row[dataset.columns[4]];
    	
    	if (document.getElementById("CCORIGEM").value == row[dataset.columns[5]] &&
    		document.getElementById("LOCALORIGEM").value == row[dataset.columns[4]]){
    			
			FLUIGC.toast({
				title: 'Localização incorreta: ',
				message: 'Localização ainda não alterada.',
				type: 'warning'
			});
    	} else {
			FLUIGC.toast({
				title: 'Localização correta: ',
				message: 'Localização alterada corretamente.',
				type: 'success'
			});
    	}
    	
    	//console.log(dataset.values)
		return true
    }catch (e){
    	console.log( e )
    }
	
}
//==============================================================================================================================================
function habilitaCampoNFparaTransporte(){
	if ($("#EMISSORNFTRANSPORTE").val() == "Cliente"){
		document.getElementById("CAMPONFREMESSA").style.display = "block"
		document.getElementById("CAMPONFREMESSAHIDDEN").style.display = "none"
	} else {
		document.getElementById("CAMPONFREMESSA").style.display = "none"
		document.getElementById("CAMPONFREMESSAHIDDEN").style.display = "block"
		try{
			window["NFTRANSPORTE"].clear();
		}catch (e){
			//console.log(e)
		}
	}
}
//==============================================================================================================================================
function mostraFormulario(){
	
	document.getElementById("NAV1").classList.add("active")
	document.getElementById("NAV2").classList.remove("active")
	
	document.getElementById("FORMULARIO").style.display = "block"
	document.getElementById("CHECKLISTS").style.display = "none"
	
}
//==============================================================================================================================================
function mostraChecklist(){
	
	if (document.getElementById("TIPOEQUIPAMENTO").value != "SELECIONE"){
		document.getElementById("NAV1").classList.remove("active")
		document.getElementById("NAV2").classList.add("active")
	
		document.getElementById("FORMULARIO").style.display = "none"
		document.getElementById("CHECKLISTS").style.display = "block"
		tipoEquipamento(document.getElementById("TIPOEQUIPAMENTO").value)		
	} else {
		FLUIGC.toast({
		title: 'Checklist: ',
		message: 'Favor selecionar o Tipo de Equipamento para visualizar o checklist.',
		type: 'info'
		});
	}
	
}
//==============================================================================================================================================
function verificaAprovacaoMovimentosOS(numeroOS, validaAprova){

	var c1 = DatasetFactory.createConstraint("NUMEROMOV", numeroOS, numeroOS, ConstraintType.MUST);
	var constraints = new Array(c1);
	try{
		var dataset = DatasetFactory.getDataset("ds_Aprovacao_Relacionados_OS", null, constraints, null);
		var row = dataset.values[0];  
			console.log(row) //row["Lista"]
			var movimentos = ""
			var i = 0
			do{
				
				if (validaAprova.value != "NAOAPROVADO"){
					if (row["APROVACAO"] == "NAOAPROVADO"){
						movimentos = movimentos + row["NUMEROMOV"] + ""
						validaAprova.value = "NAOAPROVADO"
					} else {
						validaAprova.value = "APROVADO"
					}
				} else {
					if (row["APROVACAO"] == "NAOAPROVADO"){
						movimentos = movimentos + ", " + row["NUMEROMOV"]
						validaAprova.value = "NAOAPROVADO"
					} else {
						validaAprova.value = "APROVADO"
					}
				}
				
				i++
			}while (i < dataset.values)
		 
			if (validaAprova.value == "NAOAPROVADO"){
				FLUIGC.toast({
					title: 'Movimenos não aprovados: ',
					message: 'O(s) movimento(s) '+movimentos+ ' não estão aprovados!',
					type: 'info'
				});
			} else {
				FLUIGC.toast({
					title: 'Movimentos aprovados: ',
					message: 'Todos os movimentos aprovados!',
					type: 'succes'
				});
			}
		
	}catch(e){
	 validaAprova.value = "APROVADO"
	}
}
//==============================================================================================================================================
function bloqueiaCamposTabelasPaiFilho(){
	if (document.getElementById("WKNumState").value != "5"){
		
		$("input[id^='BATERIASAIDA1___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		$("input[id^='BATERIASAIDA2___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		$("input[id^='BATERIASAIDA3___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		
		$("input[id^='NSERIEBATERIA___']").each(function (index) {
			$(this).prop('disabled', true);
		})
		//==============================================================
		$("input[id^='CARREGADORESSAIDA1___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		$("input[id^='CARREGADORESSAIDA2___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		$("input[id^='CARREGADORESSAIDA3___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		
		$("input[id^='NSERIECARREGADORES___']").each(function (index) {
			$(this).prop('disabled', true);
		})
		//==============================================================
		$("input[id^='ACESSORIOSSAIDA1___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		$("input[id^='ACESSORIOSSAIDA2___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		$("input[id^='ACESSORIOSSAIDA3___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		
		$("input[id^='NSERIEACESSORIOS___']").each(function (index) {
			$(this).prop('disabled', true);
		})
		//==============================================================
		$("input[id^='OUTROSSAIDA1___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		$("input[id^='OUTROSSAIDA2___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		$("input[id^='OUTROSSAIDA3___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		
		$("input[id^='OUTROS1DESCRICAO___']").each(function (index) {
			$(this).prop('disabled', true);
		})
		
	}
	
	if (document.getElementById("WKNumState").value != "35"){		
		$("input[id^='BATERIAENTR1___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		$("input[id^='BATERIAENTR2___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		$("input[id^='BATERIAENTR3___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		
		$("input[id^='CARREGADORESENTR1___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		$("input[id^='CARREGADORESENTR2___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		$("input[id^='CARREGADORESENTR3___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
	
		$("input[id^='ACESSORIOSENTR1___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		$("input[id^='ACESSORIOSENTR2___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		$("input[id^='ACESSORIOSENTR3___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		
		$("input[id^='OUTROSENTR1___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		$("input[id^='OUTROSENTR2___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		$("input[id^='OUTROSENTR3___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
	}
}
//==============================================================================================================================================
function consultarAprovacaoOC(){
	var idmov = document.getElementById("SOLICITAOCIDMOV").value
	
	try{
        var c1 = DatasetFactory.createConstraint("IDMOV", idmov, idmov, ConstraintType.MUST);
    	var constraints = new Array(c1);
    	var dataset = DatasetFactory.getDataset("ds_Movimentacao_Ativos_AprovacaoOC", null, constraints, null);
    	
    	var row = dataset.values[0]; 
    	document.getElementById("SOLICITAOCAPROVACAO").value = row["APROVACAO"];
    	document.getElementById("SOLICITAOCSTATUS").value = row["STATUS"];
    	
    }catch (e){
    	console.log( e )
    }
}
//==============================================================================================================================================
function consultarAprovacaoRequisicoes(){
	var idmov = document.getElementById("SOLICITANFNUMEROMOV").value
	
	try{
        var c1 = DatasetFactory.createConstraint("IDMOV", idmov, idmov, ConstraintType.MUST);
    	var constraints = new Array(c1);
    	var dataset = DatasetFactory.getDataset("ds_Movimentacao_Ativos_AprovacaoRequisicao", null, constraints, null);
    	
    	var row = dataset.values[0]; 
    	document.getElementById("SOLICITANFAPROVACAO").value = row["APROVACAO"];
    	document.getElementById("SOLICITANFSTATUS").value = row["STATUS"];
    	document.getElementById("SOLICITANFNUMEROMOV").value = row["NUMEROMOV"];
    	
    }catch (e){
    	console.log( e )
    }
}
//==============================================================================================================================================
$(function(){
    $('[type="date"].min-today').prop('min', function(){
        return new Date().toJSON().split('T')[0];
    });
});
//==============================================================================================================================================




