function generateRandomOrder() {
  let myArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  let currentLength = myArr.length;
  while (currentLength != 0) {
    let randomIndex = Math.floor(Math.random() * currentLength);
    currentLength--;
    [myArr[currentLength], myArr[randomIndex]] = [
      myArr[randomIndex],
      myArr[currentLength],
    ];
  }
  let finalArray = [];
  myArr.forEach((number) => finalArray.push(numberToLetter[number]));
  return finalArray;
}

const numberToLetter = {
  1: "a",
  2: "b",
  3: "c",
  4: "d",
  5: "e",
  6: "f",
  7: "g",
  8: "h",
  9: "i",
  10: "j",
  11: "k",
  12: "l",
  13: "m",
  14: "n",
  15: "o",
  16: "p",
  17: "q",
  18: "r",
  19: "s",
  20: "t",
};

export { generateRandomOrder };
