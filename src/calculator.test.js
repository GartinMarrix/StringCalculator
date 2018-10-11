const add = require('./calculator');


it('should return zero from an empty string ', () => {
    expect(add('')).toBe(0);
});