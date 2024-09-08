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

//-------------------------------------------------------------------------------------

Function.prototype.myCallWithCustomContext = function(context, ...args){
    if(!context) context = window;
    
    const unqId = Symbol();
    context[unqId] = this;
    const result = context[unqId](...args);
    delete context[unqId];
    return result;
} 


const person = { name: 'John' };

// Example usage
function greet(greeting, name) {
    return `${greeting}, ${name}! My name is ${this.name}.`;
}

// Using the custom myCall method
const result = greet.myCallWithCustomContext(person, 'Hello', 'Alice');
console.log(result); // Output: "Hello, Alice! My name is John."