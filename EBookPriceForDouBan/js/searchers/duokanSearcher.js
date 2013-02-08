var duokanSearcher = {
    search:function (searchParameter) {
        var title = searchParameter.title;
        var author = searchParameter.author;
        var searchResults = searchParameter.searchResults;

        var duokanSearchUrl = "http://book.duokan.com/store/v0/web/search?s="
            + title
            + (author.length > 0 ? " " + author : "");
        var duokanBookUrlTemplate = "http://book.duokan.com/dkdetail.html?book_id=";

        $.ajax({url:duokanSearchUrl, async:true, success:function (data) {
            var response = $.parseJSON(data);
            if (response.items.length > 0) {
                var firstMatch = response.items[0];
                var url = duokanBookUrlTemplate + firstMatch.book_id;
                var price = firstMatch.new_price ? firstMatch.new_price : firstMatch.price;

                var duokanSearchResult = new SearchResult("多看阅读", price, url);
                searchResults.push(duokanSearchResult);
            }
        }});
    }
};
