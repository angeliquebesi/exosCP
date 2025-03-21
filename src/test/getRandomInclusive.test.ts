import { expect, test } from "vitest";
import getRandomIntInclusive from "../utils/getRandomIntInclusive";

test("getRandomInclusive returns a number between min and max", () => {
  const min = 0;
  const max = 10;
  const random = getRandomIntInclusive(min, max);
  expect(random).toBeGreaterThanOrEqual(min);
  expect(random).toBeLessThanOrEqual(max);
}
);
