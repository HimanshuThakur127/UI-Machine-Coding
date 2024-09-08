const pipe = (...fns_arg) => {
    return (initialValue) => {
        return fns_arg.reduce((init,fn) => fn(init), initialValue);
    }
}

const add = x => x + 1;
const multiply = x => x * 2;
const subtract = x => x - 3;

const result = pipe(add, multiply, subtract)(5); // (5 + 1) * 2 - 3 = 9
console.log(result); // Output: 9