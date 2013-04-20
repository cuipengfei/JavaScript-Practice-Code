function onload() {
    ko.observableArray(testGroups);
    ko.applyBindings({testGroups:testGroups});
}

function calculate() {
    var score = testGroups.reduce(function (prevGrpValue, grp) {
        return prevGrpValue + grp.items.reduce(function (prevItmValue, itm) {
            return prevItmValue + itm.getScore();
        }, 0);
    }, 0);
    alert("最终得分为：" + score);
}