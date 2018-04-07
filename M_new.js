function New(fn) {
    return function(){
        let o = {}
        o.__proto__ = fn.prototype
        fn.apply(o,arguments)
        return o
    }
    
}
let jiang = New(People)('jiangjie','23')

function New(){
    let o = {},
        args = Array.prototype.slice.call(arguments)
    let fn = args.shift()
    o.__proto__ = fn.prototype
    fn.apply(o,args)
    return o
}

function People(name,age){
    this.name = name
    this.age = age
}

let jiang = New(People,'jiangjie','age')
console.log(jiang.name)
console.log(jiang.age)