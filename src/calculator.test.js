const add = require('./calculator');

// 1
it('should return zero from an empty string', () => {
    expect(add('')).toBe(0);
});


it('should return a single number from when string contains a single number', () => {
    expect(add('5')).toBe(5);
});


it('should return sum of two numbers', () => {
    expect(add('1,2')).toBe(3);
});

// 2
it('should return sum of multiple numbers', () => {
    expect(add('1,2,3')).toBe(6);
});

// 3
it('should return sum of numbers seperated by comma and or by newline', () => {
    expect(add('1 \n2 \n3 \n4,5,6 \n7,8,9')).toBe(45);
});

// 4
it('should return an exception for negative numbers, listing the negatives', () => {
    expect(add('1,-2,-3')).toBe('Negatives not allowed: -2,-3');
});
// 5
it('should ignore numbers above thousand', () => {
    expect(add('1001,2')).toBe(2);
});
