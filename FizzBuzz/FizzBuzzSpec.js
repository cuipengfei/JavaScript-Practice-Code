describe("Fizz Buzz",function(){
	it("should say fizz when passing in 3",function(){
		var result = fizzBuzz(3);
		expect(result).toEqual("fizz");
	});
	
	it("should say buzz when passing in 5",function(){
		var result = fizzBuzz(5);
		expect(result).toEqual("buzz");
	});
	
	it("should say fizz buzz when passing in 15",function(){
		var result = fizzBuzz(15);
		expect(result).toEqual("fizz buzz");
	});
	
	it("should say 17 when passing in 17",function(){
		var result = fizzBuzz(17);
		expect(result).toEqual(17);
	});
	
	it("should say the number itself when passing in a number that's can not be divided by neither 2 nor 5",function(){
		var numbers = [1, 2, 4, 7, 8, 11, 13, 14, 16, 17, 19];
		for (var i=0; i < numbers.length; i++) {
			var number = numbers[i];
			var result = fizzBuzz(number);
			expect(result).toEqual(number);
		};
	});
});