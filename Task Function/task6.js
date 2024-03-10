// Create a function that takes two arrays and returns an array of their intersection (elements that are present in both arrays).


function arrayIntersection(arr1,arr2){
const intersectionArr=[];
    for(const arr of arr1){
        if(arr2.includes(arr) && !intersectionArr.includes(arr)){
            intersectionArr.push(arr)
        }
        
    }
    return intersectionArr
}

const nums1 = [1, 2, 3, 4];
const nums2 = [3, 4, 5, 6];
console.log(arrayIntersection(nums1, nums2));
// Output: [3, 4]