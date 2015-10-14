sap.ui.getCore().attachInit(function () {

	new sap.m.Shell({
		app: new sap.ui.core.ComponentContainer({
			name: "sap.ui.demo.db",
			height: "100%"
		})
	}).placeAt("content");


	// eND
	new sap.m.Text({ text: "Sally Sawk is the end of this content_2"})
		.placeAt("content_2");	

});