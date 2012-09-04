describe("remove numbers bigger than 5", function() {
	it("should remove 6789 from 123456789", function() {
		var result = removeNumbersBiggerThan5([1, 2, 3, 4, 5, 6, 7, 8, 9]);

		expect(result).toContain(1);
		expect(result).toContain(2);
		expect(result).toContain(3);
		expect(result).toContain(4);

		expect(result).not.toContain(5);
		expect(result).not.toContain(6);
		expect(result).not.toContain(7);
		expect(result).not.toContain(8);
		expect(result).not.toContain(9);
	});
});

describe("remove odd numbers", function() {
	it("should remove 135 from 123456", function() {
		var result = removeOddNumbers([1, 2, 3, 4, 5, 6]);

		expect(result).toContain(2);
		expect(result).toContain(4);
		expect(result).toContain(6);

		expect(result).not.toContain(1);
		expect(result).not.toContain(3);
		expect(result).not.toContain(5);
	});
});

describe("remove apples", function() {
	it("should remove apples 1apple2apple3", function() {
		var result = removeApples(["1", "apple", "2", "apple", "3"]);

		expect(result).toContain("1");
		expect(result).toContain("2");
		expect(result).toContain("3");

		expect(result).not.toContain("apple");
	});
});

describe("removeItemsFromArrayBase", function() {
	it("should return a function", function() {
		var result = removeItemsFromArrayBase(function(i){return true;});

		expect(typeof result).toEqual("function");
	});
});