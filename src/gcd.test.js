const gcd = require("./gcd")


describe("gcd unit tests", () => {
    it("should return gcd of 4 and 10 as 2", () => {
        expect(gcd(4, 10)).toBe(2)
    })

    it("should return gcd of 6 and 6 as 12", () => {
        expect(gcd(4, 10)).toBe(2)
    })
})