function SearchResult(provider, price, url, currencyType) {
    this.provider = provider;
    this.price = price;
    this.url = url;
    this.description = provider + "：" + price + (currencyType ? currencyType : "元");
    this.isPriceInNumber = !isNaN(price);
}
//todo: remove useless idx function params; fix nook problem when it has both paperbook and ebook.
var searchers = [
    duokanSearcher,
    tangchaSearcher,
    amazonSearcher,
    taobaoSearcher,
    jingdongSearcher,
    dangdangSearcher,
    nookSearcher,
    koboSearcher
];

function doubanBookId() {
    var urlFragments = location.pathname.split("/");
    return urlFragments[urlFragments.length - 2];
}

function searchForEBooks() {
    var searchResults = ko.observableArray();

    $.ajax({
        url: "https://api.douban.com/v2/book/" + doubanBookId(), success: function (data) {
            var jsonResult = data;

            var bookTitle = jsonResult.title;
            var author = jsonResult.author[0];
            var isbn = jsonResult.isbn13;

            $.each(searchers, function (index, searcher) {
                //we give all parameters to every searcher, it's up to the searcher to decide whether to use them or ignore them.
                searcher.search({title: bookTitle, author: author, isbn: isbn, searchResults: searchResults});
            });
        }
    });

    return searchResults;
}
