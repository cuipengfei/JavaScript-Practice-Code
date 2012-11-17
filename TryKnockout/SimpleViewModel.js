function AppViewModel() {
	this.firstName = ko.observable("Bert");
	this.lastName = ko.observable("Bertington");

	this.fullName = ko.computed(function() {
		return this.firstName() + " " + this.lastName();
	}, this);

	this.capitalizeLastName = function() {
		var currentVal = this.lastName(); // Read the current value
		this.lastName(currentVal.toUpperCase()); // Write back a modified value
	};
}

function clickEventHandler() {
	var model = new AppViewModel();
	// Activates knockout.js
	ko.applyBindings(model);
}
