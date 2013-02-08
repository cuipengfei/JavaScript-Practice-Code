var amazonSearcher = {
    search:function (searchParameter) {
        var isbn = searchParameter.isbn;
        var searchResults = searchParameter.searchResults;

        var amazonSearchUrl = "http://www.amazon.cn/s/ref=nb_sb_noss?url=node%3D116169071&field-keywords=" + isbn;

        $.ajax({url:amazonSearchUrl, async:true, success:function (data) {
            var page = $(data);
            var resultDiv = page.find("#result_0");
            var noResultsTitle = page.find("#noResultsTitle");
            if (resultDiv && noResultsTitle.length == 0) {
                var price = resultDiv.find(".bld.lrg.red").text().replace("￥", "");
                var url = resultDiv.find("a").attr("href");

                var amazonSearchResult = new SearchResult("亚马逊Kindle", price, url);
                searchResults.push(amazonSearchResult);
            }
        }});
    }
};