function WebmailViewModel() {
	// Data
	var self = this;
	self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];

	self.chosenFolderId = ko.observable();

	// Behaviours
	self.goToFolder = function(folder) {
		self.chosenFolderId(folder);
		//self.chosenMailData(null); // Stop showing a mail
		$.get('http://learn.knockoutjs.com/mail', {
			folder: folder
		}, self.chosenFolderData);

	};

	self.goToMail = function(mail) {
		self.chosenFolderId(mail.folder);
		self.chosenFolderData(null); // hide folder
		$.get("http://learn.knockoutjs.com/mail", {
			mailId: mail.id
		}, self.chosenMailData);
	};

	self.chosenFolderData = ko.observable();
	self.chosenMailData = ko.observable();
	// Show inbox by default
	self.goToFolder('Inbox');
};

function onload() {
	ko.applyBindings(new WebmailViewModel());
}
