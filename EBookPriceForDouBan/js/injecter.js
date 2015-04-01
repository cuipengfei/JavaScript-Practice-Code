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

        '</ul>' +
        '<div data-bind="with: searchResults" data-bind="visible: length>0">' +
        '<li>支付宝扫码，打赏作者</li>' +
        '<img src="https://tfsimg.alipay.com/images/mobilecodec/T1J3FfXbpsXXXXXXXX" style="width: 150px;">' +
        '<div>' +
        '</div>';

    $(".gray_ad").first().append($(htmlTemplate));
}