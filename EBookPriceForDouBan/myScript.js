var duoKan = {
    getPrice:function (title) {
        var duokanUrl = "http://book.duokan.com/store/v0/web/search?s=" + title;
        $.ajax({url:duokanUrl, success:function (data, status) {
            var duokanData = $.parseJSON(data);
            if (duokanData.items.length > 0) {
                var bookUrl = "http://book.duokan.com/dkdetail.html?book_id=" + duokanData.items[0].book_id;

                var newa = $("<a target='_blank'>多看电子书： " + duokanData.items[0].price + "元</a>");
                newa.attr("href", bookUrl);

                var newli = $("<li></li>");
                newli.append(newa);

                var priceList = $("#buyinfo-printed > ul");
                priceList.append(newli);
            }
        }});
    }
};

var titleSpan = jQuery("#wrapper > h1 > span");

var bookTitle = titleSpan.text();

duoKan.getPrice(bookTitle);