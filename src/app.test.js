const { div, mult, sub, sum } = require("./app")

test("Add 1 and 3 equals 4", function () {
  expect(add(1, 3)).toBe(4)
})

test("Sub 5 of 10 equals 5", function () {
  expect(sub(10, 5)).toBe(5)
})

test("Mult 9 times 4 equals 36", function () {
  expect(mult(9, 4)).toBe(36)
})

test("Div 8 of 2 equals 4", function () {
  expect(div(8, 2)).toBe(4)
})
