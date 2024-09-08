const promisify = (fn) => {
    return function(...arg){
       return new Promise((reject, resolve) => {
          fn(...arg, (err, result) => {
             if(err) return reject(err);
             if(result) return resolve(result); 
          })
       })  
    }
}

const add = (a, b, callback) => {
    setTimeout(() => { callback(null, a+b) }, 2000)
};
const promisifyAdd = promisify(add);
promisifyAdd(3, 4).then((res) => console.log(res))
.catch((err) => console.log(err));