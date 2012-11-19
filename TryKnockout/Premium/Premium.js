function PremiumViewModel() {
	var self = this;
	var initPremium = 500;

	self.premium = ko.observable(initPremium);
	self.discount = ko.observable(0);

	self.campaignCodes = [{
		campaignID: "default",
		campaignText: "please select a campaign code"
	}, {
		campaignID: "campID01",
		campaignText: "25% off"
	}, {
		campaignID: "campID02",
		campaignText: "$50 off"
	}];

	self.selectedCampaignCode = ko.observable(self.campaignCodes[0]);

	self.applyDiscount = function() {
		self.premium(initPremium - self.discount());
	}

	self.noCampaignApplied = ko.computed(function() {
		return self.selectedCampaignCode().campaignID == "default";
	});

	self.noDiscountApplied = ko.computed(function() {
		return self.discount() == 0;
	});
}

function onload() {
	ko.applyBindings(new PremiumViewModel());
}
