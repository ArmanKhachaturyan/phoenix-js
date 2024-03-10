// Create a function that deeply flattens an array. The function should be able to handle nested arrays of any depth.

function deepFlatten(arr){
    const filter = [];

    function filters(arr){
        for(let i =0;i<arr.length;i++){
            if(Array.isArray(arr[i])){
              console.log(arr[i])  
              filters(arr[i]);
            }else{
                filter.push(arr[i])
            }
        }
    }
    filters(arr)
    return filter
}

const nestedArray = [1, [2, [3, [4]], 5]];
console.log(deepFlatten(nestedArray));
// Output: [1, 2, 3, 4, 5]