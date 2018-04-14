Object.prototype.clone=function(){
    //原型指向保持一致
    var newobj=Object.create(Object.getPrototypeOf(this));
    //自身属性保持一样
    var propNames=Object.getOwnPropertyNames(this);
    propNames.forEach(function(item){
       //保持每个属性的特性也一样
       var des=Object.getOwnPropertyDescriptor(this,item);
       Object.defineProperty(newobj,item,des);
    },this);
    return newobj;
}

Object.prototype.deepClone = function(){
    var newObj = Object.create(Object.getPrototypeOf(this))
    var propNames = Object.getOwnPropertyNames(this)
    propNames.forEach(function(item,index){
        var des = Object.getOwnPropertyDescriptor(this,item)
        Object.defineProperty(newObj,item,des)
    },this)
}


Object.prototype.deepClone = function(){
    var newobj = Object.create(Object.getPropertyOf(this))
    var props = Object.getOwnPropertyNames(this)
    props.forEach(function(item){
        var des = Object.getOwnPropertyDescriptor(this,item)
        Object.defineProperty(newobj,item,des)
    },this)
}

function deepClone(obj){
    var res = null
    if(Object.prototype.toString.call(obj) == '[object Array]'){
        res = []
        for(let i=0;i<obj.length;i++){
            res.push(deepClone(obj[i]))
        }
    }else if(Object.prototype.toString.call(obj) == '[object Object]'){
        res = {}
        for(let i in obj){
            console.log(i)
            res[i] = deepClone(obj[i])
        }
    }else{
        res = obj
    }
    return res
}