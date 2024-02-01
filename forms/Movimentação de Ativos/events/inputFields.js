function inputFields(form){
	
	var regEx = /^\d{4}-\d{2}-\d{2}$/;
	
	 if (form.getValue('DATASOLICITACAO').match(regEx)) {
       var split = form.getValue('DATASOLICITACAO').split('-');
       form.setValue('DATASOLICITACAO', split[2] + '/' + split[1] + '/' + split[0]);
	 }
	 
	 /*
	 if (form.getValue('DATAENVIO').match(regEx)) {
       var split = form.getValue('DATAENVIO').split('-');
       form.setValue('DATAENVIO', split[2] + '/' + split[1] + '/' + split[0]);
	 }
	*/
}