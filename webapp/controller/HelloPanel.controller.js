sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("sap.ui.demo.db.controller.HelloPanel", {



		onShowHello : function () {
			
			// read from properties i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);

			// display properties message
			MessageToast.show(sMsg);
			
		},

		onOpenDialog : function () {
			this.getOwnerComponent().helloDialog.open(this.getView());
		}

	});

});