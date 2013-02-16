var dangdangSearcher = {
    search:function (searchParameter) {
        var isbn = searchParameter.isbn;
        var searchResults = searchParameter.searchResults;

        var dangdangSearchUrl = "http://searchb.dangdang.com/?key=" + isbn + "&category_path=98.00.00.00.00.00";

        $.ajax({url:dangdangSearchUrl, async:true, success:function (data) {
            var page = $(data);
            var notFound = page.find(".top_inforpanel");
            if (notFound.length === 0) {
                var list = page.find(".listitem.detail");
                var url = list.find(".maintitle").find("a").attr("href");
                var price = list.find(".price_d").find("em").text();

                var dangdangSearchResult = new SearchResult("当当电子书", price, url);
                searchResults.push(dangdangSearchResult);
            }
        }});
    }
};