// Implement a function that performs a deep copy of a value, but also handles circular references.

const deepCopy = (obj, map = new Map()) => {
    if(obj === null || typeof obj !== "object"){
        return obj;
    }
    if(map.has(obj)) return map.get(obj);
    
    if(obj instanceof Array) {
      const copy = [];
      map.set(obj, copy);
      for(let o of obj){
          copy.push(deepCopy(o, map));
      }
      return copy;
    }
    if(obj instanceof Object){
       const copy = {};
       map.set(obj, copy);
       for(let key of Object.keys(obj)){
           copy[key] = deepCopy(obj[key], map);
       }
       return copy;
    }
    
}

let obj1 = {
    name: 'name',
    age: 12,
    arr: [10, 20, 30]
}
const obj3 = obj1;
obj1.obj = obj3;
console.log(obj1)
const obj2 = deepCopy(obj1);
console.log(deepCopy(obj1));

console.log(obj1 === obj2); //false
console.log(obj1 === obj3); //true