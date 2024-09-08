const get = (obj, path, defaultValue) => {
    const route = path.split(/\./g);
    let result = obj;
    for(const key of route){
        if(result.hasOwnProperty(key)){
            result = result[key];
        }
        else {
          return defaultValue;
        }
    }
    return result;
 }
 
 
 
 // Example usage
 const obj = {
     a: {
         b: {
             c: 42
         }
     }
 };
 console.log(get(obj, 'a.b.c'));          // Output: 42
 console.log(get(obj, 'a.b.c.d', 'N/A')); // Output: 'N/A' (default value)
 console.log(get(obj, 'a.b.d', 'default'));// Output: 'default' (default value)
 console.log(get(obj, 'a.b.c.d.e.f'));   // Output: undefined (default value)
 