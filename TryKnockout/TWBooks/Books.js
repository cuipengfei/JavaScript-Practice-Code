var group = function (arr, by, initGroups) {
    function tryGetPerfectMatch() {
        var groupItem = initGroups.filter(function (grp) {
            return grp.groupNames.filter(function (grpN) {
                return grpN.groupName === key;
            }).length != 0;
        })[0];
        return groupItem;
    }

    function tryGetFuzzyMatch() {
        groupItem = initGroups.filter(function (grp) {
            return levenshteinenator(grp.groupNames[0].groupName, key) === 1;
        })[0];
    }

    function createNewGroup() {
        groupItem = {groupNames:[], groupItems:[]};
        initGroups.push(groupItem);
    }

    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        var key = by(item);

        var perfectMatch = true;
        var groupItem = tryGetPerfectMatch();

        if (!groupItem) {
            perfectMatch = false;
            tryGetFuzzyMatch();
        }

        if (!groupItem) {
            createNewGroup();
        }

        if (!perfectMatch) {
            groupItem.groupNames.push({groupName:key});
        }

        groupItem.groupItems.push(item);
    }

    return initGroups;
}

function onload() {
    //prepare data
    (function () {
        booksDataArray.forEach(function (item) {
            item.BookName = item.BookName.replace(" ", "");
        });
        booksDataArray = booksDataArray.filter(function (item) {
            return item.BookName.length > 1;
        });
    }());

    var groups = [];
    group(booksDataArray, function (item) {
        return item.BookName;
    }, groups);

    groups.sort(function (grp1, grp2) {
        return grp2.groupItems.length - grp1.groupItems.length;
    })

    ko.observableArray(groups);
    ko.applyBindings({groups:groups});
}