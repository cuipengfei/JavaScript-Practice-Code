function removeItemsFromArrayBase(rule) {
	return function(array) {
		return array.filter(function(i) {
			return rule(i);
		});
	};
}

var removeNumbersBiggerThan5 = removeItemsFromArrayBase(function(i) {
	return i < 5;
});

var removeOddNumbers = removeItemsFromArrayBase(function(i) {
	return i % 2 == 0;
});

var removeApples = removeItemsFromArrayBase(function(i) {
	return i != "apple";
});
