const array = [
  [
    ['some text', true, [1,2,3,4, [10, 20]]],
    [ 'r', [3,4,[5,6]], 's' ]
  ],
  [
    [1, 2, 3, [100, 200]],
    ['name', 'age']
  ],
];


function deepClone(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      const recurClone = deepClone(array[i]);
      newArray.push(recurClone);
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(deepClone(array));

