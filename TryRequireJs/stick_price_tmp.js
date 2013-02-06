var priceArray = [
    {length:1, averagePrice:3 / 1},
    {length:2, averagePrice:2 / 2},
    {length:3, averagePrice:5 / 3},
    {length:4, averagePrice:4 / 4}
];

var sortedPriceArray = priceArray.sort(function (item1, item2) {
    return item2.averagePrice - item1.averagePrice;
});

var index = 0;
var stickLength = 4;
var max = sortedPriceArray[0];
var totalPrice = 0;

function calculate() {
    while (stickLength >= max.length) {
        stickLength = stickLength - max.length;
        totalPrice = totalPrice + max.length * max.averagePrice;
    }

    if (index != sortedPriceArray.length && stickLength > 0) {
        index = index + 1;
        max = sortedPriceArray[index];
        calculate();
    }
};

calculate();

console.log(totalPrice);