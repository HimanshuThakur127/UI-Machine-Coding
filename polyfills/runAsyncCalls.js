// Implement a function to execute N async tasks in series.
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise1");
    }, 10000)
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise2");
    }, 5000)
})

runAsyncInSeries = async (tasks) => {
    const response = [];
    try{
      for(const [index,task] of tasks.entries()){
        const res = await task;
        response.push(res);
        if(index === tasks.length-1) return response;
      }    
    }
    catch(e){
        return e;
    }
}

runAsyncInSeries([promise2, promise1]).then((response) => console.log(response)).catch((e) => console.log(e));

const runAsyncInParallel = async (tasks) => {
    const response = [];
    try{
      for(const [index,task] of tasks.entries()){
        const res = await task;
        response.push(res);
        if(index === tasks.length-1) return response;
      }    
    }
    catch(e){
        return e;
    }
}