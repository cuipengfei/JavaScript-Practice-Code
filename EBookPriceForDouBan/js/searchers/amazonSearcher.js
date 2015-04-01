var amazonSearcher = {
    search: function (searchParameter) {
        var isbn = searchParameter.isbn;
        var searchResults = searchParameter.searchResults;

        var twoSites = [
            {
                searchUrl: "http://www.amazon.cn/s/ref=nb_sb_noss?url=node%3D116169071&field-keywords=" + isbn,
                name: "亚马逊(中国站)Kindle",
                currency: "元"
            },
            {
                searchUrl: "http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Ddigital-text&field-keywords=" + isbn,
                name: "亚马逊(美国站)Kindle",
                currency: "美元"
            }
        ];

        $.each(twoSites, function (inx, site) {
            $.ajax({
                url: site.searchUrl, async: true, success: function (data) {
                    var page = $(data);
                    var resultsDiv = page.find("#resultsCol");
                    var noResultsTip = page.find("#noResultsTitle");
                    if (resultsDiv.length > 0 && noResultsTip.length == 0) {
                        var price = resultsDiv.find(".a-color-price").first().text().replace("￥", "").replace("$", "");
                        var url = resultsDiv.find(".s-access-detail-page").attr("href");
                        searchResults.push(new SearchResult(site.name, price, url, site.currency));
                    }
                }
            });
        });
    }
};