var beforeSendValidate = function(numState,nextState){
	
	removeClassError();
	validaCampos(parseInt(numState), parseInt(nextState));
	exibeCamposObrigatorios();
}

/*****************************************************************************************************************/

function validaCampos(atividade, proxAtividade){
	/*if (atividade == 0){
		addHasFree('nomeDoCampo');
		addHasFreeTable('input', 'nomeDoCampo', 0);
	}
	
	if(getValue('nomeDoCampo') == 'valor') {
		addHasFree('nomeDoCampo');
	}*/
	if (atividade == 0 || atividade == 4){
		if (getValue('EQUIPAMENTO') == ""){ 												addHasFree('EQUIPAMENTO'); }
		//if (getValue('SERIE') == ""){ 														addHasFree('SERIE'); }
		if (getValue('DATAENVIO') == ""){ 													addHasFree('DATAENVIO'); }
		if (getValue('LOCDESTINO') == ""){ 													addHasFree('LOCDESTINO'); }
		if (getValue('CCDESTINO') == ""){ 													addHasFree('CCDESTINO'); }
		if (getValue('RESPDESTINO') == ""){ 												addHasFree('RESPDESTINO'); }
		if (getValue('TIPOOPERACAO') == ""){ 												addHasFree('TIPOOPERACAO'); }
		if (getValue('MAQUINARODANDO') == ""){ 												addHasFree('MAQUINARODANDO'); }
		if (getValue('TIPOEQUIPAMENTO') == ""){ 											addHasFree('TIPOEQUIPAMENTO'); }
		//if (getValue('PAGADORFRETE') == ""){ 												addHasFree('PAGADORFRETE'); }
		if (getValue('EMISSORNFTRANSPORTE') == ""){ 										addHasFree('EMISSORNFTRANSPORTE'); }
		if (getValue('EMISSORNFTRANSPORTE') == "Cliente" && getValue('NFTRANSPORTE') == ""){ addHasFree('NFTRANSPORTE'); }
		if (getValue('LARGURAEQUIP') == ""){ 												addHasFree('LARGURAEQUIP'); }
		if (getValue('ALTURAEQUIP') == ""){ 												addHasFree('ALTURAEQUIP'); }
		if (getValue('PESOEQUIP') == ""){ 													addHasFree('PESOEQUIP'); }
		if (getValue('COMPRIMENTOEQUIP') == ""){ 											addHasFree('COMPRIMENTOEQUIP'); }
//		if (getValue('LARGURATORRE') == ""){												addHasFree('LARGURATORRE'); }
//		if (getValue('COMPRIMENTOTORRE') == ""){ 											addHasFree('COMPRIMENTOTORRE'); }
//		if (getValue('PESOTORRE') == ""){ 													addHasFree('PESOTORRE'); }
//		if (getValue('TIPOTRANSTORRE') == "Montada" && getValue('ALTURAFINAL') == ""){ 		addHasFree('ALTURAFINAL'); }
		if (getValue('REMETENTECNPJ') == ""){ 												addHasFree('REMETENTECNPJ'); }
		if (getValue('DESTINATARIOCNPJ') == ""){ 											addHasFree('DESTINATARIOCNPJ'); }
	}
	
	if (atividade == 48){//Líder Remetente - Aprovação Checklist
		if (getValue('CHECKLISTACORDOGESTORSAIDA') == "" && proxAtividade == 16){ throw "Você não pode seguir com o processo sem estar de acordo com o CheckList!"; }
	}
	
//	if (atividade == 16){//Líder Logística - Aprovação Mobilização
//		if (getValue('MOBILIZACAOACEITELOGISTICA') == "" && proxAtividade == 20){ throw "Você não pode seguir com o processo sem estar de acordo com a Mobilização!"; }
//	}

	if (atividade == 54){//Líder Destinatário - Gestor Destinatário Realiza Checklist
		if (getValue('CHECKLISTACORDOGESTORENTR') == "" && proxAtividade == 39){ throw "Você não pode seguir com o processo sem estar de acordo com o CheckList!"; }
	}
}

/*****************************************************************************************************************/

function exibeCamposObrigatorios() {
	var camposObrigatorios = new Array();
	
	/************************************************************/
	
	//Verifica o campo
	$(".has-free").each(function (){
		var tagName = $(this).prop("tagName");
		var 
			type,
		 	checado,
		 	label,
		 	nome,
		 	chk,
		 	data_date,
		 	data_hour,
		 	data_date_hour,
		 	value,
		 	indice;

		switch(tagName){
			case "INPUT":
				type = $(this).prop("type");
				data_date = $(this).attr('data-date');	
				data_hour = $(this).attr('data-hour');	
				data_date_hour = $(this).attr('data-date-hour');	

				//Caso seja RADIO
				if (type == 'radio') {
					checado = $("[name='" + $(this).prop("name") + "']:checked");
					
					if($(this).prop("name") == "nomeDoCampo"){ //Caso seja um campo onde nâo dê pra pegar o label do .form-field mais próximo.
						label = "Nome Do Campo"
					}
					else{
						label = $(this).closest(".form-field").find("label").text();
					}
					
					if(checado.length == 0){
						if (camposObrigatorios.indexOf(label) < 0) {
							camposObrigatorios.push(label);
							$(this).closest(".radio, .radio-inline").addClass("has-error");
							$(this).closest(".form-field").find("label").css("color", "rgb(169,68,66)");
						}
					}
					else if (checado.length > 0) {
						$(this).closest('.has-error').removeClass('has-error');
						$(this).closest(".form-field").find("label").css("color", "rgb(89,89,89)");
					}
				}

				//Caso seja CHECKBOX
				else if (type == 'checkbox') {
					nome = $(this).attr("name");
					chk = document.getElementsByName(nome)[0].checked;
					
					if($(this).prop("name") == "checkRecebeDoc"){
						label = "Declarar recebimento do documento físico"
					}
					else{
						label = $(this).closest(".form-field").find("label").text();
					}
					
					if(!chk){						
						camposObrigatorios.push(label);
						$(this).closest(".form-group").addClass("has-error");
          				$(this).closest(".form-field").find("label").css("color", "rgb(169,68,66)");
          			}
          			else {
          				$(this).closest('.has-error').removeClass('has-error');
						$(this).closest(".form-field").find("label").css("color", "rgb(89,89,89)");
          			}
				}

				//Caso seja DATA
				else if (data_date != undefined || data_hour != undefined || data_date_hour != undefined) {
					value = $(this).val();
					label = $(this).closest(".form-field").find("label").text();
					if (value == '') {
						camposObrigatorios.push(label);
						$(this).closest(".form-group").addClass("has-error");
						$(this).closest(".form-field").find("label").css("color", "rgb(169,68,66)");
					}
					else {
						$(this).closest('.has-error').removeClass('has-error');
						$(this).closest(".form-field").find("label").css("color", "rgb(89,89,89)");
					}
				}
				
				else {
					value = $(this).val();
					label = $(this).closest(".form-field").find("label").text();
					if (value == '' || value == undefined || value == null) {						
						camposObrigatorios.push(label);
						$(this).closest(".form-group").addClass("has-error");
						$(this).closest(".form-field").find("label").css("color", "rgb(169,68,66)");
					}
					if (value != '') {
						$(this).closest('.has-error').removeClass('has-error');
						$(this).closest(".form-field").find("label").css("color", "rgb(89,89,89)");
					}
				}
			break;
			//Caso seja SELECT
			case "SELECT":
				value = $(this).val();
				label = $(this).closest(".form-field").find("label").text();
				if (value == '' || value == undefined || value == null) {					
					camposObrigatorios.push(label);
					$(this).closest(".form-group").addClass("has-error");
					$(this).closest(".form-field").find("label").css("color", "rgb(169,68,66)");
				}else if (value != '') {
					$(this).closest('.has-error').removeClass('has-error');
					$(this).closest(".form-field").find("label").css("color", "rgb(89,89,89)");
				}
			break;
			//Caso seja TEXTAREA
			case "TEXTAREA":
				value = $(this).val();
				label = $(this).closest(".form-field").find("label").text();
				if (value == '' || value == undefined || value == null) {					
					camposObrigatorios.push(label);
					$(this).closest(".form-group").addClass("has-error");
					$(this).closest(".form-field").find("label").css("color", "rgb(169,68,66)");
				}else if (value != '') {
					$(this).closest('.has-error').removeClass('has-error');
					$(this).closest(".form-field").find("label").css("color", "rgb(89,89,89)");
				}
			break;
		}
		//Fim do SWITCH();
	});
	
	/************************************************************/
	
	$('.has-free-table').each(function(index, el) {
		var type = $(this).attr('type'),
			name = this.name;
		if ((getValue(name) == '') && type != 'hidden') {
			$('table tbody [name*="'+name+'"]').closest('div').addClass("has-error");
			indice = $( $(this).closest("tr").find('td') ).index( $(this).closest('td') );
			label = $(this).closest('table').find('thead tr th').eq(indice).text();
			if (camposObrigatorios.indexOf(label) < 0 ) {
				camposObrigatorios.push(label);
				$(this).closest('table').find('thead tr th').eq(indice).css('color', 'rgb(169,68,66)');
			}
		}
	});
	
	/************************************************************/
		
	$(".has-free-array").each(function (){
    	$(this).parent().parent().addClass("has-error");
    	label = $(this).closest('.form-field').find('label').text();
    	if( camposObrigatorios.indexOf(label) < 0){
      		camposObrigatorios.push(label);
      		$(this).closest('.form-field').find('label').css('color', 'rgb(169,68,66)');
    	}
  	});
	
	/************************************************************/

  	$(".has-free-msg").each(function (){
    	$(this).parent().parent().addClass("has-error");
    	label = $(this).closest('.form-field').find('label').text();
    	if( camposObrigatorios.indexOf(label) < 0){
      		camposObrigatorios.push(label);
      		$(this).closest('.form-field').find('label').css('color', 'rgb(169,68,66)');
    	}
  	});
	
	/************************************************************/
  	
  	//Printa os labels dos campos validados
	if (camposObrigatorios.length > 0) {
		var txtErro = "Os campos abaixo são de preenchimento obrigatório:\n";
		for (var i = 0; i < camposObrigatorios.length; i++) {
			txtErro += "\n- "+"&#x9;"+camposObrigatorios[i];
		}
		
		throw (txtErro);
	}
}

/*****************************************************************************************************************/

//Funções de controle para verificação das condições.

	//Resgata o valor do campo
	function getValue(name) {
		if( $("[name='"+name+"']").attr("type") == "radio" ){
    		var objRadio = document.querySelector('input[name="'+name+'"]:checked');

    		if( objRadio == null || objRadio === undefined){
      			return "";
    		} else {
      			return objRadio.value;
    		}
  		}
  		if( $("[name='"+name+"']").attr("type") == "checkbox" && !document.getElementsByName(name)[0].checked){
    		return "";
  		}
  		return document.getElementsByName(name)[0].value;
	}
	
	/************************************************************/

	//Verifica solicitações filhas em andamento caso seja utilizado classe para identifica-las
	function verificaSolics(classe) {
  		var mensagem = 'Ainda consta solicitações em andamento.\nFavor aguardar a finalização de todas para prosseguir.';
  		var titles = "Solicitações em andamento!"
  		var qtdFilhos =  document.getElementsByClassName(classe).length ;
  		if (qtdFilhos != 0) {
   			throw ('Ainda consta solicitações em andamento.\nFavor aguardar a finalização de todas as solicitações para prosseguir.');    
  		}
	}
	
	/************************************************************/

	//Adiciona classe hasFreeTable
	function addHasFreeTable(type, name, valida){
		var contador = 0;
		if (valida == 0) {
			$('table tbody '+type+'[name^="'+name+'___"]').each(function(index, el) {
				contador++;
				if (getValue(this.name) == '') {$(this).addClass('has-free-table');}
			});
			if (contador == 0) {
				$('table tbody '+type+"[name^='"+name+"']").addClass('has-free-table');
			}
		}else if (valida == 1) {
			$('table tbody '+type+"[name^='"+name+"___']").addClass('has-free-table');
		}
	}

	//Remove classe hasFreeTable
	function removeHasFreeTable(type, name){
 		$(type+"[name='"+name+"']").removeClass("has-free-table");
 		$(type+"[name^='"+name+"___']").removeClass("has-free-table");
 	}
	
	/************************************************************/

	//Adicona classe hasFreeArray em um conjunto de campos
	function addHasFreeArray(array){
		for (var i = 0; i < array.length; i++) {
			if(getValue(array[i]) != ""){
				removeHasFreeArray(array);
				break;
			}
			$("[name='"+array[i]+"']").addClass("has-free-array");
		}
	}

	//Remove classe hasFreeArray em um conjunto de campos
	function removeHasFreeArray(array){
  		for (var i = 0; i < array.length; i++) {
    		$("[name='"+array[i]+"']").removeClass("has-free-array");
  		}
  	}
	
	/************************************************************/

  	//Adiciona hasFreeMsg
  	function addHasFreeMsg(array) {
  		for (var i = 0; i < array.length; i++) {
  			$('[name^="'+array[i]+'"]').addClass('has-free-msg');
			$('[name^="'+array[i]+'"]').attr('data-msg', array[i+1]);
  		}
  	}
  	
  	//Remover hasFreeMsg
  	function removeHasFreeMsg(name) {
  		$('[name="'+name+'"]').addClass('has-free-msg');
		$('[name="'+name+'"]').attr('data-msg', name);
  	}
	
	/************************************************************/

	//Adicionar hasFree
	function addHasFree(name){
  		$("[name='"+name+"']").addClass('has-free');
	}
	
  	//Remover hasFree
  	function removeHasFree(name){
   		$("[name='"+name+"']").removeClass("has-free");
	}

	/*****************************************************************************************************************/

	function removeClassError(){
		$(".has-error").removeClass("has-error");
		$(".has-free").removeClass("has-free");
		$(".has-free-table").removeClass("has-free-table");
		$(".has-free-array").removeClass("has-free-array");
		$(".has-free-msg").removeClass("has-free-msg");
	  	$("form").find("label").css("color", "rgb(89,89,89)");
	  	$("form").find("th").css("color", "rgb(89,89,89)");
	}