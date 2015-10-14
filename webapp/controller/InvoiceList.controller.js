sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/demo/db/model/FormatInvoice",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, JSONModel, FormatInvoice, Filter, FilterOperator) {
	"use strict";



	return Controller.extend("sap.ui.demo.db.controller.InvoiceList", {
	
		formatter: FormatInvoice,
	
		onInit: function (){
			
			var oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel( oViewModel, "view" );
		},
		
		onFilterInvoices: function (e){

			// build the filter array
			var aFilter = [];
			var sQuery = e.getParameter("query");
			if( sQuery ){
				aFilter.push( new Filter( "ProductName", FilterOperator.Contains, sQuery ));
			}
			
			// filter binding
			var oList = this.getView().byId("invoiceList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
			
		},
		
		onPress: function (e) {
			
			var oItem = e.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		
			oRouter.navTo("detail", {
				invoicePath: oItem.getBindingContext("invoice").getPath().substr(1)
			});
			
		}
		
	});
});