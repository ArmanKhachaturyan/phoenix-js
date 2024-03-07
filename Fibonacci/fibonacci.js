    function fibonacci(n){
        if(typeof n !=='number'  || !Number.isInteger(n) || n<0 || !isNaN(n)){
            console.log("Eroor plize inpute must a non negative integer ... ")
            
        }

        if( n === 0){
            return 0
        }else if(n === 1){
            return 1
        }
    


    let fibNumber1 = 0
    let fibNumber2 = 1;

    for(let i = 0; i<= n ;i++){
        let fib  = fibNumber1 + fibNumber2
        fibNumber2 = fibNumber1;
        fibNumber1=fib
    }

    return fibNumber1
}
let str = "dj";

fibonacci(str)
let  number = 5;
console.log("Fibonacci(str): " + fibonacci(str));
console.log("Fibonacci(number): " + fibonacci(number));
