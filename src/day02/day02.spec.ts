import { isIncreasing, isIncreasingWithAcceptableError, isMovingGently } from "./main";

describe("Day 2", () => {
  it("check if suite is increasing", () => {
    expect(isIncreasing([1, 2, 3, 4, 5])).toEqual({ safe: true, failedIndex: -1 });
  });

  it("check if suite is not increasing when 2 numbers are equal", () => {
    expect(isIncreasing([1, 2, 2, 4, 5])).toEqual({ safe: false, failedIndex: 1 });
  });

  it("check if suite is not increasing", () => {
    expect(isIncreasing([1, 2, 1, 4, 5])).toEqual({ safe: false, failedIndex: 1 });
  });

  it("check if suite is increasing gentle", () => {
    expect(isIncreasing([1, 2, 3, 4, 5])).toEqual({ safe: true, failedIndex: -1 });
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

  it("check if suite is increasing with acceptable error", () => {
    expect(isIncreasingWithAcceptableError([1, 2, 2, 4, 5], 1)).toBe(true);
  });

  it("check if suite is increasing with no acceptable error", () => {
    expect(isIncreasing([1, 2, 7, 8, 9])).toEqual({ safe: false, failedIndex: 1 });
  });

  it("check if suite is increasing with no acceptable error", () => {
    expect(isIncreasingWithAcceptableError([1, 2, 7, 8, 9], 1)).toBe(false);
  });
  it("check if suite is increasing with no acceptable error", () => {
    expect(isIncreasingWithAcceptableError([9, 7, 6, 2, 1].reverse(), 1)).toBe(false);
  });
});
