//how to create obj?

var obj1 = {}

var obj2 = new Object();

var init = function(a){
    this.a = a;
}
var obj3 = new init("data")
console.log(obj3)
var obj4 = Object.create(obj3,{
    "boss":{
        value: "echo"
    }
})
console.log(obj4)
console.log(obj4.a)
console.log(obj4.boss)



function company(boss,employee){
    this.boss = boss
    this.employee = employee
}
company.prototype.room = "room1"
company.prototype.work = function (){
    console.log(this.boss,this.employee,"do work")
}
var company1 = new company("roysue","bxl")
var company2 = new company("echo","mtt")
console.log(comp)