const add = require('./calculator');


it('should return 0 from a string 0 ', () => {
    expect(add('0')).toBe(0);
});