function findMaxMin(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
const tabl = [5, 6, 755, -9, 54];
console.log(findMaxMin(tabl));
