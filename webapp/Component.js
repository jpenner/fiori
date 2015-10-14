sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/demo/db/controller/HelloDialog",
	"sap/ui/Device"
], function (UIComponent, JSONModel, HelloDialog, Device) {
	"use strict";

	return UIComponent.extend("sap.ui.demo.db.Component", {

		metadata: {
			manifest: "json"
		},

		init: function (){

			UIComponent.prototype.init.apply(this, arguments);

			// setup data model
			var oData = {
				recipient : {
					name : "World"
				}
			};
			var oModel = new JSONModel( oData );
			this.setModel( oModel );
			
			// set device model
			var oDeviceModel = new JSONModel(Device);
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.setModel(oDeviceModel, "device");
			
			// setup invoice model - local
			var oConfig = this.getMetadata().getConfig();
		 	var sNamespace = this.getMetadata().getManifestEntry("sap.app").id;

			var oInvoiceModel = new JSONModel( jQuery.sap.getModulePath( sNamespace, oConfig.invoiceLocal ) );
			this.setModel( oInvoiceModel, "invoice" );

			// set Dialog
			this.helloDialog = new HelloDialog();
			
			// create the views based on the url/hash
			this.getRouter().initialize();

		},

		getContentDensityClass : function() {
			if (!this._sContentDensityClass) {
				if (!sap.ui.Device.support.touch) {
					this._sContentDensityClass = "sapUiSizeCompact";
				} else {
					this._sContentDensityClass = "sapUiSizeCozy";
				}
			}
			return this._sContentDensityClass;
		}

	});

});