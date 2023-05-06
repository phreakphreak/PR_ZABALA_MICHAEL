export function increase(counter: number, counters: number[]): number[] {
  counters[counter - 1]++;
  return counters;
}

export function maxCounter(counters: number[]): number[] {
  const maxCounterValue = Math.max(...counters);
  return counters.map(() => maxCounterValue);
}

export function solution(N: number, A: number[]): number[] {
  let counters = new Array(N).fill(0);
  let maxCounterValue = 0;
  let lastMaxCounterValue = 0;

  for (const operation of A) {
    if (operation >= 1 && operation <= N) {
      counters = increase(operation, counters);
      maxCounterValue = Math.max(maxCounterValue, counters[operation - 1]);
    } else if (operation === N + 1) {
      if (maxCounterValue > lastMaxCounterValue) {
        counters = maxCounter(counters);
        lastMaxCounterValue = maxCounterValue;
      }
    }
  }

  return counters;
}
