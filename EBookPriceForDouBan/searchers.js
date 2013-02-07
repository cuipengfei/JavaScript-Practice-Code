function SearchResult(provider, price, url) {
    this.price = price;
    this.url = url;
    this.description = provider + "： " + price + "元";
}

var duokanSearcher = {
    search:function (title, subhead, author, searchResults) {
        var duokanSearchUrl = "http://book.duokan.com/store/v0/web/search?s="
            + title
//            + (subhead.length > 0 ? "：" + subhead : "")
            + (author.length > 0 ? " " + author : "");
        var duokanBookUrlTemplate = "http://book.duokan.com/dkdetail.html?book_id=";

        //todo:use async call.
        //for some reason, knockout js does not update the view when the array is updated.
        //todo: optimize the search results
        $.ajax({url:duokanSearchUrl, async:false, success:function (data) {
            var response = $.parseJSON(data);
            if (response.items.length > 0) {
                var firstMatch = response.items[0];
                var url = duokanBookUrlTemplate + firstMatch.book_id;
                var price = firstMatch.new_price ? firstMatch.new_price : firstMatch.price;

                var duokanSearchResult = new SearchResult("多看阅读", price, url);
                searchResults.push(duokanSearchResult);
            }
        }});
    }
};

var searchers = [duokanSearcher];

function searchForEBooks() {
    var searchResults = [];

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
