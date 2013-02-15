var tangchaSearcher = {
    search:function (searchParameter) {
        var title = searchParameter.title;
        var searchResults = searchParameter.searchResults;
        var tangchaSearchUrl = "http://tangcha.tc/books/search/" + title + ".jsd";
        var tangchaBookUrlTemplate = "http://tangcha.tc/";

        $.ajax({url:tangchaSearchUrl, async:true, success:function (data) {
            eval(data);
            var div = $(html);
            var firstMatch = div.find("a").filter(function (index, a) {
                return $(a).attr("href").indexOf("books") != -1 && $(a).attr("href").indexOf("search") == -1;
            }).first();
            if (firstMatch.length > 0) {
                var bookUrl = tangchaBookUrlTemplate + firstMatch.attr("href");
                $.ajax({url:bookUrl, async:false, success:function (bookData) {
                    var section = $(bookData);
                    var price = section.find(".book-purchase").text();

                    var tangchaSearchResult = new SearchResult("唐茶", price.replace("¥", ""), bookUrl.replace(".jsd", ""));
                    searchResults.push(tangchaSearchResult);
                }});
            }
        }});
    }
};