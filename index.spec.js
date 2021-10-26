const { add, multiply } = require('./index')

describe('index test:', () => {
    it('should add', () => {
        expect(add(2, 3)).toBe(5)
    })
    it('should multiply', () => {
        expect(multiply(3, 2)).toBe(6)
    })
})
