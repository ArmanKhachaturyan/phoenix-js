// . Write a custom implementation of the Array.prototype.map function without using the native .map() method.

function customMap(arr,collback){
    const  mapArr=[];
for(let i = 0; i<arr.length;i++){
    mapArr.push(collback(arr[i],i,arr))
}
return mapArr
}


const numbers = [1, 2, 3];
const doubled = customMap(numbers, num => num * 2);
console.log(doubled);
// Output: [2, 4, 6]