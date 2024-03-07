//1
 var num = 2; //LHS

function multiply(x) {//RHS

    var result = x * 2; //RHS
    return result; 
}


var multipliedValue = multiply(num); //multipliedValue == LHS multiply(num) == RHS

console.log(multipliedValue); //RHS

//2.
function calculate(index) {//RHS
    const data = [1, 2, 3, 4, 5]; //DATA = LHS AND ARR RHS
    data[index] = data[index] * 2; //RHS
    return data; //LHS
}

let value = 10; //RHS
let result = calculate(value % 4); //RHS
result[value % result.length] = calculate(result.length - 1)[1]; //LHS result and  RHS rezult.lengt and [i] 

const obj = {//LHS
    key: 'initial', //LHS key objeqt
};

obj['key'] = result[0].toString();//RHS result[0] ,LHS obj['key']
obj.key += ' updated'; //RHS  obj.key  +=  and LHS ' updated'

function updateObject(o, k, v) {//LHS
    o[k] = v; //RHS
}

updateObject(obj, 'newKey', result[2]); //RHS == result[2] and  LHS ==updateObject

console.log(obj);  //RHS