sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("FioriTraining.FioriTraining.controller.View1", {
		onInit: function () {
			var oTable = this.getView().byId("tab1");
			oTable.setVisible(false);
		},
		
		onGetData: function() {
			var oTable = this.getView().byId("tab1");
			oTable.setVisible(true);
		}
	});
});