// Write a function that finds the longest string in an array of strings. Make sure it handles edge cases properly.

function findLongestString(string){
    if(!string || string.length === 0 ){
        return null;
    }
    let longStr =string[0];

    for(let i = 0;i<string.length;i++){
        const actualString = string[i]
        if(actualString.length > longStr.length){
            longStr=actualString;
        }
    }
return longStr
}

const strings = ["short", "medium length", "longest string"];
console.log(findLongestString(strings));
// Output: "longest string"