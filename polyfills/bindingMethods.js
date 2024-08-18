const sum = (...arg) => {
    return arg.reduce((def, val) => def+val, 0);
}
Function.prototype.myBind = function(...arg){
    const refs = arg[0];
    const func = this;
    const param = [...arg.slice(1)];
    return (...arg2) => {
       return func(...param, ...arg2);
    }
}

Function.prototype.myCall = function(...arg){
    const refs = arg[0];
    const func = this;
    const param = [...arg.slice(1)]
    return func(...param);
}

Function.prototype.myApply = function(...arg){
    const ref = arg[0];
    const func = this;
    const param = arg[1]
    return func(...param)
}

const customBindFunc = sum.myBind(null, 2);
console.log(customBindFunc(3,4));
console.log(sum.myCall(null,2,3,4));
console.log(sum.myApply(null,[2,3,4]));