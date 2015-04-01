var duokanSearcher = {
    search: function (searchParameter) {
        var title = searchParameter.title;
        var searchResults = searchParameter.searchResults;

        var duokanSearchUrl = "http://book.duokan.com/store/v0/web/search?s=" + title;
        var duokanBookUrlTemplate = "http://www.duokan.com/book/";

        $.ajax({
            url: duokanSearchUrl, async: true, success: function (response) {
                var matchedBook = response.items.filter(function (item) {
                    return item.title.indexOf(title) != -1 || title.indexOf(item.title) != -1;
                })[0];
                if (matchedBook) {
                    var url = duokanBookUrlTemplate + matchedBook.sid;
                    var price = matchedBook.new_price != undefined ? matchedBook.new_price : matchedBook.price;
                    searchResults.push(new SearchResult("多看阅读", price, url));
                }
            }
        });
    }
};
