import { increase, maxCounter, solution } from "./counter";

describe("increase function", () => {
  test("should increase the value of the given counter", () => {
    const counters = [0, 0, 0];
    const expectedCounters = [0, 1, 0];
    const actualCounters = increase(2, counters);
    expect(actualCounters).toEqual(expectedCounters);
  });
});

describe("maxCounter function", () => {
  test("should set all counters to the maximum value", () => {
    const counters = [1, 2, 3];
    const expectedCounters = [3, 3, 3];
    const actualCounters = maxCounter(counters);
    expect(actualCounters).toEqual(expectedCounters);
  });
});

describe("solution function", () => {
  test("should return the correct counters state", () => {
    const N = 5;
    const A = [1, 1, 4, 6, 1, 5, 5];
    const expectedCounters = [3, 2, 2, 2, 4];
    const actualCounters = solution(N, A);
    expect(actualCounters).toEqual(expectedCounters);
  });
});
