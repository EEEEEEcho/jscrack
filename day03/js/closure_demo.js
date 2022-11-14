var counter = 0
function add(){
    counter ++
}
function f(){
    var counter = 0;
    //Closure
    function add(){
        counter ++
        console.log(counter)
    }
    return add
}
var f2 = f()

for(let i = 0;i < 3;i ++){
    f2()
}


var t = function test(){
    console.log("test")
}()

eval("console.log('i am eval')")