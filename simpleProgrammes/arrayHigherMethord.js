let arr = [101, 102, 103, 104];

let mapMethord = arr.map((element, elementIndex, elementArray) => {
  return element + 1;
});

console.log(mapMethord);

let filterMethord = arr.filter((e) => {
  return e < 11;
});

console.log(filterMethord);

let reduceMethord = arr.reduce((e, index) => {
  return index + e;
});

console.log(reduceMethord);
