// Write a custom implementation of the Array.prototype.reduceRight method. This function applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
function customReduceRight(arr, collback,startValue){
    if(arr.length ===0 && startValue === undefined){
        return undefined
    }
    let accumulator;
    let startIndex;

    if(startValue !== undefined){
        accumulator = startValue;
        startIndex=arr.length - 1;
    }

    for(let i = startIndex;i>=0;i--){
        accumulator = collback(accumulator,arr[i],i,arr);
    }
    return accumulator
}


const array = [1, 2, 3, 4];
const sum = customReduceRight(array, (acc, value) => acc + value, 0);
console.log(sum);