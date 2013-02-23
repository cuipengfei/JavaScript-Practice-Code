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