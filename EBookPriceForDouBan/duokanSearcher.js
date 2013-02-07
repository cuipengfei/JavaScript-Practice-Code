var duokanSearcher = {
    search:function (title, subhead, author, searchResults) {
        var duokanSearchUrl = "http://book.duokan.com/store/v0/web/search?s="
            + title
//            + (subhead.length > 0 ? "：" + subhead : "")
            + (author.length > 0 ? " " + author : "");
        var duokanBookUrlTemplate = "http://book.duokan.com/dkdetail.html?book_id=";

        //todo:use async call.
        //for some reason, knockout js does not update the view when the array is updated.
        //todo: optimize the search results
        $.ajax({url:duokanSearchUrl, async:false, success:function (data) {
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
