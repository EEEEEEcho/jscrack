//hook cookie

var cookie = document.cookie
//re-write the read / write rule of the cookie property of document object
document = Object.defineProperties(document,{
    "cookie":{
        get: function (){
            console.log('getter: ' + cookie)
            return cookie
        },
        set: function (value) {
            //if the cookie's name contains AIDUID_BFESS then stop
            if(value.includes("BAIDUID_BFESS")){
                debugger
            }
            console.log('setter: ' + value)
            cookie = value
        }
    }
});