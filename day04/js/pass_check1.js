function Navigator(){}
Navigator.prototype.constructor.toString = function (){
    return 'function Navigator() { [native code] }'
}
function checkNavigator(){
    return navigator.constructor.toString() === 'function Navigator() { [native code] }'
}
console.log(checkNavigator())