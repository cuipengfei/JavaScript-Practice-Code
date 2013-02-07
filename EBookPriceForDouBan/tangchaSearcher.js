var tangchaSearcher = {
    search:function (title, subhead, author, searchResults) {
        var tangchaSearchUrl = "http://tangcha.tc/books/search/" + title + ".jsd";
        var tangchaBookUrlTemplate = "http://tangcha.tc/";

        $.ajax({url:tangchaSearchUrl, async:false, success:function (data) {
            eval(data);
            var div = $(html);
            var firstMatch = div.find("a").filter(function (index, a) {
                return $(a).attr("href").indexOf("books") != -1 && $(a).attr("href").indexOf("search") == -1;
            }).first();

            var bookUrl = tangchaBookUrlTemplate + firstMatch.attr("href");
            $.ajax({url:bookUrl, async:false, success:function (bookData) {
                var section = $(bookData);
                var price = section.find(".book-purchase").text();

                var tangchaSearchResult = new SearchResult("唐茶", price, bookUrl.replace(".jsd", ""));
                searchResults.push(tangchaSearchResult);
            }});
        }});
    }
};