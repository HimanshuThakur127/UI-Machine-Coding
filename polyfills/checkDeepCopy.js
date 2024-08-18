// Implement a function that determines if two values are deep equal.
const obj = {
    name: "Ash",
    age: 20,
    friend: [10, 10, 10],
    ref: {
        ob: "Dtr"
    }
}

const objB = {
    name: "Ash",
    age: 20,
    friend: [10, 10, 10],
    ref: {
        ob: "Dtr"
    }
}

const checkDeepCopy = (obj1, obj2, map = new Map()) => {
  if((!obj1 && obj2) || (obj1 && !obj2)) return false;  
  
  if(obj1 instanceof Array && obj2 instanceof Array) {
      if(obj1.length !== obj2.length) return false;
     for(let i=0;i<obj1.length;i++){
        if(obj1[i] !== obj2[i]){
            return false;
        } 
     }
     return true;
  }
  
  for(let key of Object.keys(obj1)){
      if(!obj2.hasOwnProperty(key)) return false;
      if(typeof obj1[key] === "object" && typeof obj2[key] === "object"){
         if(!checkDeepCopy(obj1[key], obj2[key],map))
          return false; 
          
      }
      else if(obj1[key] !== obj2[key]) return false;
  }
  
  return true;
}

console.log(checkDeepCopy(obj, objB));