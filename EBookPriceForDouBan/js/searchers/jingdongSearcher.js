var jingdongSearcher = {
    search:function (searchParameter) {
        var isbn = searchParameter.isbn;
        var searchResults = searchParameter.searchResults;

        var jingdongSearchUrl = "http://search.e.360buy.com/searchDigitalBookAjax?ajaxSearch=1&key=" + isbn;

        $.ajax({url:jingdongSearchUrl, async:true, dataType:"json", success:function (data) {
            if (data) {
                var jsonResult = data;
                var wareID = jsonResult.Paragraph[0].wareid;

                var url = "http://e.360buy.com/" + wareID + ".html";
                var priceImageUrl = "http://price.360buyimg.com/gp" + wareID + ",1.png";

                var jingdongSearchResult = new SearchResult("京东电子书", priceImageUrl, url);
                searchResults.push(jingdongSearchResult);
            }
        }});
    }
};