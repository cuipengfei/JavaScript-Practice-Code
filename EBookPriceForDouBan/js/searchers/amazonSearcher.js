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
                    var resultDiv = page.find("#result_0");
                    var noResultsTitle = page.find("#noResultsTitle");
                    if (resultDiv.length > 0 && noResultsTitle.length == 0) {
                        var priceTag = $(resultDiv.find(".bld.lrg.red")[0]);
                        var price = priceTag.text().replace("￥", "").replace("$", "");
                        var url = resultDiv.find("a").attr("href");

                        var amazonSearchResult = new SearchResult(site.name, price, url, site.currency);
                        searchResults.push(amazonSearchResult);
                    }
                }
            });
        });
    }
};