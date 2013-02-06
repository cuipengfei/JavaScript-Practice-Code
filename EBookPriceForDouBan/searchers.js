function SearchResult(provider, price, url) {
    this.provider = provider;
    this.price = price;
    this.url = url;
    this.description = provider + "： " + price + "元";
}

var duokanSearcher = {
    search:function (title, searchResults) {
        var duokanSearchUrl = "http://book.duokan.com/store/v0/web/search?s=" + title;
        var duokanBookUrlTemplate = "http://book.duokan.com/dkdetail.html?book_id=";

        //todo:use async call.
        //for some reason, knockout js does not update the view when the array is updated.
        //todo: optimize the search results
        $.ajax({url:duokanSearchUrl, async:false, success:function (data) {
            var response = $.parseJSON(data);
            if (response.items.length > 0) {
                var url = duokanBookUrlTemplate + response.items[0].book_id;
                var price = response.items[0].new_price ? response.items[0].new_price : response.items[0].price;
                var duokanSearchResult = new SearchResult("多看阅读", price, url);
                searchResults.push(duokanSearchResult);
            }
        }});
    }
};

var searchers = [duokanSearcher];

function searchForEBooks() {
    var searchResults = [];

    var titleSpan = jQuery("#wrapper > h1 > span");
    var bookTitle = titleSpan.text();

    $.each(searchers, function (index, searcher) {
        searcher.search(bookTitle, searchResults);
    });

    return searchResults;
}