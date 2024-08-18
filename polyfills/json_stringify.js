//Implement a function that serializes a Javascript value into a JSON string.

// Example JavaScript values
const obj = {
    name: "Alice",
    age: 30,
    isStudent: false,
    scores: [90, 85, 88],
    address: {
      street: "123 Main St",
      city: "Wonderland"
    }
  };
  
  // Serialize the object into a JSON string
  const jsonString = JSON.stringify(obj);
  console.log(jsonString)
  
  const myStringify = (obj) => {
     let res = '';
     const entries = Object.entries(obj);
     for(let entry of entries){
        const [key, value] = entry;
        if(typeof value === "string") {
           res += `"${key}":"${value}",`
        }
        else if(typeof value === "number" || typeof value === "boolean"){
           res += `"${key}":${value},`
        }
        else if(value instanceof Array){
          res += `"${key}":[${value}],`  
        }
        else{
           res += `"${key}":${myStringify(value)},`; 
        }
     }
     return `{${res}}`;
  }
  
  JSON.myString = myStringify;
  
  console.log(JSON.myString(obj));
//   {"name":"Alice","age":30,"isStudent":false,"scores":[90,85,88],"address":{"street":"123 Main St","city":"Wonderland",},}