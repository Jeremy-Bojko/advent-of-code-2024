import { isIncreasing, isMovingGently } from "./main";

describe("Day 2", () => {
  it("check if suite is increasing", () => {
    expect(isIncreasing([1, 2, 3, 4, 5])).toBe(true);
  });

  it("check if suite is not increasing when 2 numbers are equal", () => {
    expect(isIncreasing([1, 2, 2, 4, 5])).toBe(false);
  });

  it("check if suite is not increasing", () => {
    expect(isIncreasing([1, 2, 1, 4, 5])).toBe(false);
  });

  it("check if suite is increasing gentle", () => {
    expect(isIncreasing([1, 2, 3, 4, 5])).toBe(true);
  });

  it("check if distance between 2 numbers is gentle", () => {
    expect(isMovingGently(5, 4)).toBe(true);
  });

  it("check if distance between 2 numbers is gentle", () => {
    expect(isMovingGently(4, 7)).toBe(true);
  });

  it("check if distance between 2 numbers is not gentle", () => {
    expect(isMovingGently(5, 12)).toBe(false);
  });

  it("check if distance between 2 numbers is not gentle", () => {
    expect(isMovingGently(12, 17)).toBe(false);
  });
});
