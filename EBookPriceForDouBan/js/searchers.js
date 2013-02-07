function SearchResult(provider, price, url) {
    this.price = price;
    this.url = url;
    this.description = provider + "： " + price + "元";
}

var searchers = [duokanSearcher, tangchaSearcher];

function searchForEBooks() {
    var searchResults = ko.observableArray();

    var bookTitle = getTitle();
    var subhead = getSubHead();
    var author = getAuthor();

    $.each(searchers, function (index, searcher) {
        //we give all three parameters to every searcher, it's up to the searcher to decide whether to use them
        //or ignore them.
        searcher.search(bookTitle, subhead, author, searchResults);
    });

    return searchResults;
}

function getSubHead() {
    var clonedDiv = $("#info").clone();
    if (clonedDiv.text().indexOf("副标题") === -1) {
        return "";
    }

    clonedDiv.children().remove();
    var text = clonedDiv.text();

    var textArray = text.split("\n");

    var subHead = textArray.map(function (item) {
        return item.trim();
    }).filter(function (item) {
            return item.length > 0;
        })[0];

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
