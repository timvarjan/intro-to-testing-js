// Unit tests for the helloWorld function

//1
describe('helloWorld', function () {
    it('should be a defined function', function () {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function () {
        expect(helloWorld()).not.toBe(undefined);
    });
});

//2
describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe('string');
    });
})

//3, 4, 5, 6, 7, 8, 9
describe('sayHello', function () {
    it('should return Hello, Jane!', function () {
        expect(sayHello('Jane')).toBe('Hello, Jane!');
    });
    it('should return Hello, Alex!', function () {
        expect(sayHello('Alex')).toBe('Hello, Alex!');
    });
    it('should return Hello, Pat!', function () {
        expect(sayHello('Pat')).toBe('Hello, Pat!');
    });
    it('should return Hello, World!', function () {
        expect(sayHello('World')).toBe("Hello, World!");
    });
})

//10
describe('isFive', function () {
    it('should return a boolean when called', function () {
        expect(typeof isFive).toBe('function');
    })
    it('should return a boolean when called', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return True when input is 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return a True when input is "5"', function () {
        expect(isFive('5')).toBe(true);
    });
})
//11
describe('isEven', function () {
    it('should be defined a function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('returns true when executed with isEven(2)', function () {
        expect(isEven(2)).toBe(true);
    });
    it('returns true when executed with isEven(-4)', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('returns false when executed with isEven(3)', function () {
        expect(isEven(3)).toBe(false);
    });
    it('returns false when called with isEven("banana")', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('returns true when called with isEven("8")', function () {
        expect(isEven("8")).toBe(true);
    });
    it('returns false when called with isEven(Infinity)', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('return false when called with a boolean input like isEven(true) or isEven(false)', function () {
        expect(isEven("boolean")).toBe(false);
    });
    it('returns false when called without an argument like isEven()', function () {
        expect(isEven()).toBe(false);
    });
})
//12
describe('isVowel', function () {
    it('should be defined a function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('isVowel("a") returns true', function () {
        expect(isVowel("a")).toBe(true);
    });
})



