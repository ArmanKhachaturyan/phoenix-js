function sumAll(){
    let sum =0;
    for(let i = 0;i< arguments.length;i++){
        sum+=arguments[i]


    }
    return sum   
}

console.log(sumAll()); 
console.log(sumAll(1, 2, 3,-4)); 
console.log(sumAll(5, 10, 15, 20, 25,35)); 
