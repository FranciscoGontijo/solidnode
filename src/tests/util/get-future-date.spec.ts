import { test, expect } from "vitest";
import { getFutureDate } from "./get-future-date";

test('Should return a year later date', () => {
    const year = new Date().getFullYear();
    expect(getFutureDate(`${year}-08-10`).getFullYear()).toEqual(new Date().getFullYear() + 1);
});