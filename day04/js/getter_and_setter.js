var obj = Object.defineProperties(
    {"a":"value a"},
    //define a new property named p in the object `{"a":"value a"}`

    {
        'p': {
            get: function () {
                return 'this is the value of p'
            },
            set: function (value) {
                console.log('setter: ' + value)
            }
        }
});
console.log(obj)
//when we use obj.p to read the value of obj.p,the get method will be called
console.log(obj.p)
//when we set a new value to p,the set method will be called
obj.p = 123
console.log(obj.p)