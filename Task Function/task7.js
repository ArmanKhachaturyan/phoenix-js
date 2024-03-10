// Write a function that splits an array into groups of a specified size. For example, chunking an array into subarrays of length 2.

function chunkArray(arr,size){
    if(!arr || arr.length === 0 || size <=0){
        return null
    }
    const chunks = [];
    for(let i = 0;i<arr.length;i += size){
        const chunk = [];
        for(let j = i;j<i + size && j<arr.length;j++){
            chunk.push(arr[j])
        }
        chunks.push(chunk)
    }
    return chunks
}

const data = [1, 2, 3, 4, 5, 6, 7];
console.log(chunkArray(data, 3));
// Output: [[1, 2, 3], [4, 5, 6], [7]]