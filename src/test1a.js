let abc = '5 2 C D +';

let items = abc.split(' ');

let result = [];

items.forEach((item) => {
  if (item == 'C') {
    result.pop();
  } else if (item == 'D') {
    result.push(2 * parseInt(result[result.length - 1]));
  } else if (item == '+') {
    result.push(
      parseInt(result[result.length - 1]) + parseInt(result[result.length - 2]),
    );
  } else {
    result.push(parseInt(item));
  }
});
console.log(result.reduce((a, b) => a + b, 0));
