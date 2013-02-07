function injectEmptyTemplate() {
    var htmlTemplate = '<div><ul data-bind="foreach: searchResults"><li><a target="_blank" data-bind="attr: { href: url}"><span data-bind="text: description"></span></a></li></ul></div>';
    $("#buyinfo-printed").append($(htmlTemplate));
}