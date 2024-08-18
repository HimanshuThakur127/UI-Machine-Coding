
const debouncing = (func, delay) => {
    let timerId;
    const cancel = () =>{
        if(timerId) {
            clearTimeout(timerId);
        }
    }
    return {
        debouceMethod: (...arg) => {
            if(timerId) clearTimeout(timerId)
            timerId = setTimeout(() => func(...arg), [delay]);
        },
        cancel
    }
}
const show = (str) => {
    console.log(str)
}
const { debouceMethod, cancel} = debouncing(show, 5000);
debouceMethod("Hello");
debouceMethod("Hello JS");
cancel();
