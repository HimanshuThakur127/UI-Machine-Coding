Object.myAssign = (target, ...source) => {
    result = {};
    
    const copy = (target, ...source) => {
        for(let obj of source){
           Object.keys(key => {
              const value = obj[key];
              if(typeof value === "object"){
                result[key] = value.length ? [...value] : copy({}, value); 
              }
              else result[key] = value;
           })
       }
    }
    copy(target, ...source);
    return result;
} 
const obj1 = {
   "k1": {
       "we": "WE"
   }
}
const obj = Object.myAssign({}, obj1);
console.log(obj.k1 === obj1.k1);


//================
Object.myKeys = (object) => {
    let keys = [];
    for(let k in object){
        if(object.hasOwnProperty(k)) {
            keys.push(k);
        }
    }
    return keys;
}
console.log(Object.myKeys({n1: "v1", n2: "v2"}))