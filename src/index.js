const baad = [1, 2, 2, 3, 4, 6, 8, 9, 1];
const result = baad.filter((item, index, arr) => arr.indexOf(item) == index);
console.log(result);
