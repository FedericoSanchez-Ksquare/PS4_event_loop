function firstLoop(arr, del) {
  for (let i = 0; i < arr.length; i++) {
    if (del(arr[0])) {
    } else {
      arr.shift();
    }
  }

  console.log(arr);
}

function del(n) {
  if (n === 1) {
    return true;
  } else {
    return false;
  }
}
let arr = [0, 1, 0, 1];

firstLoop(arr, del);
