var koboSearcher = {
    search:function (searchParameter) {
        var searchResults = searchParameter.searchResults;
        var title = searchParameter.title;
        var author = searchParameter.author;

        function searchWithMatchingISBN(matchingISBN) {
            var koboSearchUrl = "http://www.kobobooks.com/search/search.html?q=" + matchingISBN;

            $.ajax({url:koboSearchUrl, async:true, success:function (data) {
                var page = $(data);
                var notFoundMsg = page.find("ctl00_ctl00_ctl00_Body_Body_ContentBody_liNoResults");
                var priceTag = page.find(".KV2OurPrice");

                if (notFoundMsg.length === 0 && priceTag.length > 0) {
                    var price = priceTag.find("strong").text().replace("$", "");
                    var url = koboSearchUrl;

                    var koboSearchResult = new SearchResult("Kobo电子书", price, url, "美元");
                    searchResults.push(koboSearchResult);
                }
            }});
        }

        function getMatchingISBNsFromGoogle(title, author, callBack) {
            var googleBookSearchUrl = "https://www.googleapis.com/books/v1/volumes?q=" + title + "+inauthor:" + author;
            $.ajax({url:googleBookSearchUrl, async:true, success:function (googleResultJson) {
                var matchingISBNs = googleResultJson.items.filter(function (item) {
                    return item.volumeInfo.title === title;
                }).map(function (item) {
                        return item.volumeInfo.industryIdentifiers[1].identifier;
                    });
                if (matchingISBNs.length > 0) {
                    $.each(matchingISBNs, function (idx, matchingISBN) {
                        callBack(matchingISBN);
                    });
                }
            }});
        }

        getMatchingISBNsFromGoogle(title, author, searchWithMatchingISBN);
    }
};