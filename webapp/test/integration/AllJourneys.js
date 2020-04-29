/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"FioriTraining/FioriTraining/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"FioriTraining/FioriTraining/test/integration/pages/View1",
	"FioriTraining/FioriTraining/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "FioriTraining.FioriTraining.view.",
		autoWait: true
	});
});