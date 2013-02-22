var nookSearcher = {
    search:function (searchParameter) {
        var isbn = searchParameter.isbn;
        var searchResults = searchParameter.searchResults;

        var nookSearchUrl = "http://www.barnesandnoble.com/s?keyword=" + isbn + "&store=ebook";

        $.ajax({url:nookSearchUrl, async:true, success:function (data) {
            var page = $(data);
            var notFoundMsg = page.find("#search-noresults-message-1");
            var nookDiv = page.find("#nook-price-1");
            if (notFoundMsg.length === 0 && nookDiv.length > 0) {
                var priceTag = nookDiv.find(".price");
                var price = priceTag.text().replace("$", "");

                var url = nookSearchUrl;

                var nookSearchResult = new SearchResult("Nook电子书", price, url, "美元");
                searchResults.push(nookSearchResult);
            }
        }});
    }
};