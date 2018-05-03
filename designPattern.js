Function.prototype.addMethod = function(name,fn){
    this.prototype[name] = fn
    return this
}

let Methods = function(){}
Methods.addMethod('a',function(){
    console.log('a')
}).addMethod('b',function(){
    console.log('b')
})

let m = new Methods()

m.a()
m.b()


