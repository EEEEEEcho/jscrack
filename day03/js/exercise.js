//Complementary Environment
// Construct The missing Variable to Run this Program
var document = {
    'getElementById':function (str){
        return {'innerHtml':''}
    },
    'getElementsByClassName':function (str){
        return [{'innerHtml':''}]
    },
    'location':{
        host: '192.168.9.2'
    }
}

var navigator = {
    'plugins':{
        length: 0
    },
    'userActivation': {
        isActive: true
    }
}



var first = document.getElementById('first')
var last = document.getElementsByClassName('last')

first.innerHTML = 'js changed this element'
last[0].innerHTML = 'js changed this element too'

var host = document.location.host;
var length = navigator.plugins.length;
var isActive = navigator.userActivation.isActive;

console.log(first.innerHTML)
console.log(last[0].innerHTML)
console.log(host)
console.log(length)
console.log(isActive)

//