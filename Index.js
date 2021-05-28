function fib(n) {
  var arr = [[0], [1]];
  for (var i = 2; i <= n; i++) {
    arr.push(add(arr[i - 1], arr[i - 2]));
  }
  return arr[n];
}
function Conversion(arr, length) {
  for (let i = 0; i < length; i++) {
    if (arr[i] === undefined) {
      arr[i] = 0;
    }
  }
  return arr;
}
function add(arr1, arr2) {
  if (arr1.length > arr2.length) {
    arr2 = Conversion(arr2, arr1.length);
  } else if (arr1.length < arr2.length) {
    arr1 = Conversion(arr1, arr2.length);
  }
  var sum = [];
  var transfer = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] + arr2[i] + transfer < 10) {
      sum[i] = arr1[i] + arr2[i] + transfer;
      transfer = 0;
    } else {
      sum[i] = (arr1[i] + arr2[i] + transfer) % 10;
      transfer = 1;
    }
  }
  if (transfer) {
    sum.push(transfer);
  }
  return sum;
}
function Conversion_tostring(arr) {
  var str = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    str = str + arr[i] ;
  }
  return str;
}



let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let inputval = document.getElementById("fib_number");

  let val = inputval.value;

  let nthfib = Conversion_tostring(fib(val));

  console.log(nthfib);

  document.getElementById('ans').innerHTML=`<h2>${val}th Fibonacci Number is:</h2>
   <h4> ${nthfib} </h4>`
  inputval.value = "";
});
 