function createDataset(fields, constraints, sortFields) {

	var dataset = DatasetBuilder.newDataset();

	dataset.addColumn("CODCOLIGADA");
	dataset.addColumn("CODCFO");
	dataset.addColumn("CNPJ");
	dataset.addColumn("NOMEFANTASIA");
	dataset.addColumn("ENDERECO");
	dataset.addColumn("CIDADE");
	dataset.addColumn("ESTADO");
	dataset.addColumn("NUMERO");
	dataset.addColumn("BAIRRO");
	dataset.addColumn("CEP");

	var codSentenca = '111';
	var codColigada = '0';
	var codAplicacao = 'G';

	var descricao = "%";

	for (var i = 0; i < constraints.length; i++) {
		log.info("const " + i + "------");
		log.info("Chave " + i + ": " + constraints[i].fieldName);
		log.info("Valor " + i + ": " + constraints[i].initialValue);

		if (constraints[i].fieldName == "CNPJ") {
			descricao = constraints[i].initialValue;
		}
	}

	var campos = new Array("CODCOLIGADA", "CODCFO", "CNPJ", "NOMEFANTASIA", "ENDERECO",
							"CIDADE", "ESTADO", "NUMERO", "BAIRRO", "CEP");

	var c1 = DatasetFactory.createConstraint("CODSENTENCA", codSentenca,
			codSentenca, ConstraintType.MUST);
	var c2 = DatasetFactory.createConstraint("CODCOLIGADA", codColigada,
			codColigada, ConstraintType.MUST);
	var c3 = DatasetFactory.createConstraint("CODAPLICACAO", codAplicacao,
			codAplicacao, ConstraintType.MUST);
	var c4 = DatasetFactory.createConstraint("CLIENTE", descricao,
			descricao, ConstraintType.MUST);

	var arrayConstraints = new Array(c1, c2, c3, c4);

	var datasetRM = DatasetFactory.getDataset("ds_generic_rm_sql", campos,
			arrayConstraints, null);

	if (datasetRM == null || datasetRM == undefined) {
		throw "Ocorreu um erro ao executar a consulta ao RM. Favor entrar em contato com a equipe de TI.";

	} else if (datasetRM.rowsCount < 1) {
		throw "Não foram encontrados resultados para sua pesquisa.";

	} else {

		for (var i = 0; i < datasetRM.rowsCount; i++) {
			var CODCOLIGADA = datasetRM.getValue(i, "CODCOLIGADA");
			var CODCFO = datasetRM.getValue(i, "CODCFO");
			var CNPJ = datasetRM.getValue(i, "CNPJ");
			var NOMEFANTASIA = datasetRM.getValue(i, "NOMEFANTASIA");
			var ENDERECO = isNull(datasetRM.getValue(i, "ENDERECO"));
			var CIDADE = isNull(datasetRM.getValue(i, "CIDADE"));
			var ESTADO = isNull(datasetRM.getValue(i, "ESTADO"));
			var NUMERO = isNull(datasetRM.getValue(i, "NUMERO"));
			var BAIRRO = isNull(datasetRM.getValue(i, "BAIRRO"));
			var CEP = isNull(datasetRM.getValue(i, "CEP"));
			dataset.addRow(new Array(CODCOLIGADA, CODCFO, CNPJ, NOMEFANTASIA, ENDERECO,
									CIDADE, ESTADO, NUMERO, BAIRRO, CEP));
		}

		return dataset;
	}

	return null;

}

function converteDataBanco(dataBanco) {
	var splitData = dataBanco.split("T");
	if (splitData[0] != undefined && splitData[0] != null && splitData[0] != "") {
		var dataAmericana = splitData[0];
		var splitDataAmericana = dataAmericana.split("-");
		return splitDataAmericana[2] + "/" + splitDataAmericana[1] + "/"
				+ splitDataAmericana[0];
	} else {
		return "";
	}
}

function isNull(dataCampo){
	console.log("===\n"+dataCampo)
	if (dataCampo == "undefined" || dataCampo == null || dataCampo == "") {
		return "Em branco no TOTVS"
	} else {
		return dataCampo
	}
}