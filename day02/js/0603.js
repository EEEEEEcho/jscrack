var variable1 = null
console.log(typeof variable1)

var functionObj = function () {

}
console.log(typeof functionObj,functionObj.name)

var undefinedObj = undefined
console.log(typeof undefinedObj)

//null -> 0, undefined -> NaN

if([]){
    console.log("empty array is true")
}

console.log(0.1 + 0.2)
console.log(0.1 + 0.2 === 0.3)

console.log(typeof NaN)

var f\u006F\u006F = 'tmd'
console.log(foo)


var base64encode = Buffer.from("hello world").toString("base64")
var base64decode = Buffer.from(base64encode,"base64").toString()
console.log(base64encode)
console.log(base64decode)

var obj = {
    'a':123,
    'b':456,
    'c':true
}

console.log(obj.toString())
console.log(Object.keys(obj))
delete obj['a']
console.log(Object.keys(obj))
console.log(obj.hasOwnProperty("toString"))
console.log(obj.hasOwnProperty("b"))


function f() {
    var a = 2;
    //close bag
    function f1() {
        console.log(2)
    }
    return f1
}
f1 = f()
f1()

function f2(obj) {
    //arguments obj
    console.log(arguments)

    argumentsArr = Array.prototype.slice.call(arguments)
    console.log(argumentsArr)
}
f2()
f2(1,2,3)