function filterArray(arr) {
  return arr.filter((item) => typeof item === "number" && item >= 0);
}
const tabl = [5, 6, "a", 755, -9, 54, "q"];
console.log(filterArray(tabl));
