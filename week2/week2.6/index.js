//map
const array = [1, 2, 3, 4, 5];

const ans = array.map((n) => {
  return n * 2;
});

console.log("the outcome of map is " + ans);

//filter
const ans1 = array.filter((n) => {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
});

console.log("the outcome of filter is " + ans1);
