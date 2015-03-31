function injectEmptyTemplate() {
    var htmlTemplate = '<div>' +
        '<ul data-bind="foreach: searchResults">' +
        '<li>' +
        '<a target="_blank" data-bind="attr: {href: url}">' +
        '<div data-bind="if: isPriceInNumber">' +
        '<span data-bind="text: description" />' +
        '</div>' +
        '<div data-bind="ifnot: isPriceInNumber">' +
        '<span data-bind="text: provider" />' +
        '<img data-bind="attr: {src: price}"/>' +
        '</div>' +
        '</a>' +
        '</li>' +
        '</ul>';

    $("#buyinfo-printed").append($(htmlTemplate));
}