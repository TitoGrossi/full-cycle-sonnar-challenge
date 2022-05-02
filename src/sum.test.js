const sum = require("./sum")


describe("sum unit tests", () => {
    it("should return sum of 4 and 11 as 15", () => {
        expect(sum(4, 11)).toBe(15)
    })
})