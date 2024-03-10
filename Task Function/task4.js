// 4. Given two arrays, combine them into one array without any duplicates. Use array methods to achieve this, and consider the performance.
function combineUnique(arr1,arr2){
    const  combinedArray = arr1.concat(arr2);
    const  uniqArr = [];
    for(const valu of  combinedArray){
        if(!uniqArr.includes(valu)){
            uniqArr.push(valu)
        }
    }
    return uniqArr
}

const array1 = [1, 2, 3];
const array2 = [2, 3, 4];
console.log(combineUnique(array1, array2));
// Output: [1, 2, 3, 4]