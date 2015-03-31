var dangdangSearcher = {
    search: function (searchParameter) {
        var isbn = searchParameter.isbn;
        var searchResults = searchParameter.searchResults;

        var dangdangSearchUrl = "http://search.dangdang.com/?key=" + isbn + "&category_path=98.00.00.00.00.00&type=98.00.00.00.00.00";

        $.ajax({
            url: dangdangSearchUrl, async: true, success: function (data) {
                var page = $(data);
                var notFound = page.find(".top_inforpanel");
                if (notFound.length === 0) {
                    var url = page.find(".search_wrap").find("a").attr("href");
                    var price = page.find(".search_now_price").text();

                    var dangdangSearchResult = new SearchResult("当当电子书", price, url);
                    searchResults.push(dangdangSearchResult);
                }
            }
        });
    }
};