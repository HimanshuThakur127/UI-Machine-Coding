const customTypeof = (value) => {
    if(value === null) return "object";
    if(value === undefined) return "undefined";
    if(Array.isArray(value)) return "object"; 
    return Object.prototype.toString.call(value).slice(8,-1).toLowerCase();
 }
 
 console.log(customTypeof(14));
 console.log(customTypeof("Hello"))
 console.log(customTypeof([1,2,3,4,5]));
 console.log(customTypeof(false));
 console.log(customTypeof({"name": "alex"}));