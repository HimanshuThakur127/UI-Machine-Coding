const arr1 = [0, 1, 2, [3, 4]];

Array.prototype.myFlat = function(){
   const arry = this;
   let result = [];
   const rescursiveFlattern = (arry) => {
     for(let ar of arry){
        if(typeof ar === 'object') {
            rescursiveFlattern(ar);
        }
        else result.push(ar);    
     }
   }
   rescursiveFlattern(arry);
   return result;
}

console.log(arr1.myFlat)