function createArrayProxy(array) {
    return new Proxy(array, {
        get(target, prop, receiver) {
            // Convert the property to an integer
            const index = parseInt(prop, 10);
            
            // Check if the index is negative
            if (Number.isInteger(index) && index < 0) {
                // Translate negative index to positive
                return target[target.length + index];
            }
            
            // For non-negative indices, use default behavior
            return Reflect.get(target, prop, receiver);
        }
    });
}

// Example usage
const arr = [1, 2, 3, 4, 5];
const proxyArray = createArrayProxy(arr);

console.log(proxyArray[0]);   // Output: 1
console.log(proxyArray[1]);   // Output: 2
console.log(proxyArray[-1]);  // Output: 5 (last element)
console.log(proxyArray[-2]);  // Output: 4 (second last element)
console.log(proxyArray[-10]); // Output: undefined (out of bounds)