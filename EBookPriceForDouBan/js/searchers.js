function SearchResult(provider, price, url) {
    this.provider = provider;
    this.price = price;
    this.url = url;
    this.description = provider + "：" + price + "元";
    this.isPriceInNumber = !isNaN(price);
}

var searchers = [duokanSearcher, tangchaSearcher, amazonSearcher, taobaoSearcher, jingdongSearcher];

function searchForEBooks() {
    var searchResults = ko.observableArray();

    var urlFragments = location.pathname.split("/");
    var bookID = urlFragments[urlFragments.length - 2];

    $.ajax({url:"https://api.douban.com/v2/book/" + bookID, success:function (data) {
        var jsonResult = data;

        var bookTitle = jsonResult.title;
        var author = jsonResult.author[0];
        var isbn = jsonResult.isbn13;

        $.each(searchers, function (index, searcher) {
            //we give all parameters to every searcher, it's up to the searcher to decide whether to use them or ignore them.
            searcher.search({title:bookTitle, author:author, isbn:isbn, searchResults:searchResults});
        });
    }});

    return searchResults;
}
