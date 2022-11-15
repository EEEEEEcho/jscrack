const company = "data"
const team = {company}
// equals const team = {company:"data"}
console.log(team)

//In ES5 has variable up such as :
console.log(my_variable)
var my_variable = 10;
//It can run without error,and will print undefine

//But in ES6 it will throw error
// console.log(new_variable)
let new_variable = 10


for(let i = 0;i < 5;i ++){
    console.log(i)
}
//console.log(i)  //throw error

for(var i = 0;i < 5;i ++){
    console.log(i)
}
console.log(i)


const arr = [1,2,3,4]
const [first,second] = arr
console.log(first,second)

