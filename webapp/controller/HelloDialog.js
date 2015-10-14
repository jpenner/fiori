sap.ui.define([
	"sap/ui/base/Object",
	"sap/m/Dialog"
], function (Object, Dialog) {
	"use strict";

	return Object.extend("sap.ui.demo.db.controller.HelloDialog", {

		_getDialog: function (){

			if (!this._oDialog){

				this._oDialog = sap.ui.xmlfragment("sap.ui.demo.db.view.HelloDialog");
			}
			return this.oDialog;
		},

		open : function(oView){

			var oDialog = this._getDialog();
			
			// forward compact/cozy style into Dialog
			jQuery.sap.syncStyleClass(oView.getController().getOwnerComponent().getContentDensityClass(), oView, oDialog);
			
			oView.addDependent(oDialog);
			oDialog.open();

		},

		onCloseDialog : function (){
			this._getDialog().close();
		}

	});
});