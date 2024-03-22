// Given an array of objects, group them by a specific property. For instance, given an array of people objects, group them by ‘age’.
function  groupByProperty(arr,value){
    const  group ={}
    for(const obj of arr){
        const key = obj[value];
        if(!group[key]){
            group[key] =[];
        }
        group[key].push(obj)
    }
    return group
}

const people = [
    { 
        : "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 30 }
  ];
  
  console.log(groupByProperty(people, 'age'));
  // Output: { '25': [ { name: 'Bob', age: 25 } ], '30': [ { name: 'Alice', age: 30 }, { name: 'Charlie', age: 30 } ] }