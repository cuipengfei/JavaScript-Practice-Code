function SearchResult(provider, price, url) {
    this.price = price;
    this.url = url;
    this.description = provider + "：" + price + "元";
}

var searchers = [duokanSearcher, tangchaSearcher, amazonSearcher, taobaoSearcher];

function searchForEBooks() {
    var searchResults = ko.observableArray();

    var bookTitle = getTitle();
    var subhead = getSubHead();
    var author = getAuthor();
    var isbn = getISBN();

    $.each(searchers, function (index, searcher) {
        //we give all parameters to every searcher, it's up to the searcher to decide whether to use them
        //or ignore them.
        searcher.search(
            {
                title:bookTitle,
                subhead:subhead,
                author:author,
                isbn:isbn,
                searchResults:searchResults
            });
    });

    return searchResults;
}

function getSubHead() {
    var div = $("#info");
    if (div.text().indexOf("副标题") === -1) {
        return "";
    }

    var subHead = getInfoTextArray()[0];
    return subHead === undefined ? "" : subHead;
}

function getTitle() {
    var titleSpan = $("#wrapper > h1 > span");
    var bookTitle = titleSpan.text();
    return bookTitle;
}

function getAuthor() {
    var authorLink = $("#info > span > a");
    var href = authorLink.attr("href");

    if (!href) {
        return "";
    }

    var authorNameEncoded = href.split("/")[2];
    return decodeURIComponent(authorNameEncoded ? authorNameEncoded : "");
}

function getISBN() {
    var textArray = getInfoTextArray();
    return textArray[textArray.length - 1];
}

function getInfoTextArray() {
    var clonedDiv = $("#info").clone();
    clonedDiv.children().remove();
    var textArray = clonedDiv.text().split("\n");
    return   textArray.map(function (text) {
        return text.trim();
    }).filter(function (text) {
            return text.length > 0;
        });
}
