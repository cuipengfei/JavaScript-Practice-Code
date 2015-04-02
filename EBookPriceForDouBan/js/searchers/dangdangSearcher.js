var dangdangSearcher = {
    search: function (searchParameter) {
        var isbn = searchParameter.isbn;
        var searchResults = searchParameter.searchResults;

        var url = "http://search.dangdang.com/?key=" + isbn + "&category_path=98.00.00.00.00.00&type=98.00.00.00.00.00";

        $.ajax({
            url: url, async: true, success: function (data) {
                var page = $(data);
                if (isFound(page)) {
                    var book = parseBookFrom(page);
                    searchResults.push(new SearchResult("当当电子书", book.price, book.url));
                }
            }
        });

        function parseBookFrom(page) {
            var bookLi = $(page.find(".bigimg").find("li").first());
            var url = bookLi.find("a").attr("href");
            var price = bookLi.find(".search_now_price").text().replace("¥", "");
            return {url: url, price: price};
        }

        function isFound(page) {
            var notFound = page.find(".no_result_tips");
            return notFound.length === 0;
        }
    }
};