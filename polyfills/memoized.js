const multiply = (...arg) => {
    return arg.reduce((def, val) => def*val,[1]);
}

const memoiseMultiply = () => {
   let cache = {}
   return (...arg) => {
      const key = arg.join('&');
      if(!cache[key]){
        cache[key] = multiply(...arg);
      }
      return cache[key];
   }
}

const memoise = memoiseMultiply();
console.log(memoise(2, 3, 4, 5));