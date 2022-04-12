function destroyer(input, ...args) {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (input[i] === args[j]) {
        input.splice(i, 1);
      }
    }
  }
  return input;
}

let input = [1, 2, 3, 5, 1, 2, 3];

destroyer(input, 2, 3);
console.log(input);
