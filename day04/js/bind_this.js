var d = new Date()
var getTime = d.getTime
// console.log(getTime())   //will throw exception

var d = new Date()
var getTime = d.getTime.bind(d)
console.log(getTime())



console.log(Function.prototype.toString.call(navigator.constructor))
