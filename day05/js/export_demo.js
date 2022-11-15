var data = {
    name : "DATA",
    version : "1.0.0",
    boss : "echo",
    doWork: function(name){
        console.log(`${this.boss} is doing work`)
    }
}
//deconstruct , can be used to copy data
const newData = {... data}
console.log(newData) //newData equals with data
module.exports = data;



