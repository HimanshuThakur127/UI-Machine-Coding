const throttling = (func, wait) => {
    let timer=null;
    return {
        customFunc: (...arg) => {
            if(timer) return;
            func(...arg);
            timer = setTimeout(() => {
              timer=null;
            }, wait);
        },
        cancel : () => timer=null
    }
}
const show = (value) => {
    console.log(value);
} 
const {customFunc, cancel} = throttling(show, 1000);
customFunc("Hello")
customFunc("Hello JS")
cancel();
setTimeout(() => customFunc("Hello 4"), 1000);
customFunc("Hello 5")