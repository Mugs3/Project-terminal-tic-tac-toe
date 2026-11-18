import { checkIfNoMovesLeft } from "../board-printer";

test("checkIfNoMovesLeft should return true if there are no moves left", () => {
  const board = [];
  expect(checkIfNoMovesLeft(board)).toBe(true);
});
test("checkIfNoMovesLeft should return true if there are no moves left", () => {
  const board = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
  ];
  expect(checkIfNoMovesLeft(board)).toBe(false);
});
test("checkIfNoMovesLeft should return true if there are no moves left", () => {
  const board = [
    ["X", "X", "O"],
    ["O", "O", "X"],
    ["O", "X", "O"],
  ];
  expect(checkIfNoMovesLeft(board)).toBe(true);
});

test("checkIfNoMovesLeft should return true if there are no moves left", () => {
  const board = [
    ["X", "-", "O"],
    ["O", "O", "X"],
    ["O", "X", "O"],
  ];
  expect(checkIfNoMovesLeft(board)).toBe(false);
});
