var taobaoSearcher = {
    search: function (searchParameter) {
        var isbn = searchParameter.isbn;
        var searchResults = searchParameter.searchResults;

        var taobaoSearchUrl = "http://shuzi.taobao.com/item/search.htm?q=" + isbn + "&isbook=ebook";

        $.ajax({
            url: taobaoSearchUrl, async: true, success: function (data) {
                var page = $(data);
                var resultList = page.find(".resultlist_pic.clr");
                var errorDiv = page.find(".msgBox.w758b1.mt10");
                if (errorDiv.length == 0) {
                    var url = resultList.find("a").attr("href");
                    var price = resultList.find(".hotbox_price").find("span").text()

                    var taobaoSearchResult = new SearchResult("淘宝电子书", price, url);
                    searchResults.push(taobaoSearchResult);
                }
            }
        });
    }
};