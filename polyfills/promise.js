const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];

Promise.myAny = function(allPromise){
   const rejectedArray = [] 
   return new Promise((resolve, reject) => {
       for(let promise of allPromise){
          if(!(promise instanceof Promise)) reject(new Error("invalid Promise"));
          promise.then((response) => resolve(response))
          .catch(error => rejectedArray.push(error))
       }
       reject(rejectedArray);
   });
}

Promise.myAny(promises).then(resp => console.log(resp)).catch(error => console.log(error));


//===============
Promise.myAll = function(allPromise) {
    const resolved = [];
    return new Promise((resolve, reject) => {
        for(let promise of allPromise){
           if(!(promise instanceof Promise)) reject(new Error("invalid Promise"));
           promise.then((response) => {
               resolved.push(response)
               if(resolved.length === allPromise.length) resolve(resolved)
           })
           .catch(error => reject(error))
        }
        
    });
}

Promise.myAll(promises).then(resp => console.log(resp)).catch(error => console.log(error));
//===========

Promise.MySettled = function(promises){
    let results = [];
    return new Promise((resolve,reject) => {
        
        promises.forEach((promise,index) => {
            
            promise.then(data => {
                results.push({status: "fulfilled",data});
                if(results.length === promises.length){
                    resolve(results);
                }
            })
            .catch(err => {
                results.push({status: "rejected",err});
                if(results.length === promises.length){
                    resolve(results);
                }
            })
            
        })
        
    })
}

console.log(Promise.MySettled(promises));

// =====================================