function bindSearchResultsToTemplate(searchResults) {
    ko.observableArray(searchResults);
    ko.applyBindings({searchResults: searchResults});
}