var koboSearcher = {
    search:function (searchParameter) {
        var searchResults = searchParameter.searchResults;

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

        //kobo only sells ebook, and different from amazon and nook, searching with the paper book's ISBN does not work with kobo
        //so we have to find the paper book's counterpart from google and then seatch kobo
        getMatchingISBNsFromGoogle(searchParameter.title, searchParameter.author, searchWithMatchingISBN);
    }
};