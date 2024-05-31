test(`First`, () => {
  expect(action([2, 22, 55, 2], [6, 215, 1255, 22, 2])).toEqual([2, 22]);
});

test(`Second`, () => {
  expect(action([2, 22, 55, 2], [])).toEqual([]);
});

test(`Third`, () => {
  expect(action([2, 22, 55, 2], [6, 7, 10])).toEqual([]);
});

test(`Fourth`, () => {
  expect(action([2, 22, 55, 2, 7], [2, 22, 55, 2, 7, 22, 2])).toEqual([
    2, 22, 55, 7,
  ]);
});

test(`Fifth`, () => {
  expect(action(["a", "b", "c"], ["b", "c", "d"])).toEqual(["b", "c"]);
});

function action(arr1, arr2) {
  const resualt = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      if (!resualt.includes(arr1[i])) {
        resualt.push(arr1[i]);
      }
    }
  }
  return resualt;
}
