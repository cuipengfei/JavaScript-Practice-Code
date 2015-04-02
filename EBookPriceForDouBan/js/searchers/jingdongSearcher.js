var jingdongSearcher = {
    search: function (searchParameter) {
        var isbn = searchParameter.isbn;
        var searchResults = searchParameter.searchResults;

        var jingdongSearchUrl = "http://search.e.jd.com/searchDigitalBookAjax?ajaxSearch=1&key=" + isbn;

        $.ajax({
            url: jingdongSearchUrl, async: true, dataType: "json", success: function (jsonResult) {
                if (jsonResult) {
                    var wareID = jsonResult.Paragraph[0].wareid;

                    var url = "http://e.jd.com/" + wareID + ".html";
                    var price = jsonResult.Paragraph[0].hprice / 100;

                    var jingdongSearchResult = new SearchResult("京东电子书", price, url);
                    searchResults.push(jingdongSearchResult);
                }
            }
        });
    }
};