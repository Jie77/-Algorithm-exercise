// var n = readline()
// var arr = []
// for(var i=0;i<n;i++){
//     arr.push(readline())
// }
function print(s){
    console.log(s)
}
var arr = ['a','aaaaa','bbb','aaaaaaaaaaaa']
var flaglexicographically = false
var flaglengths = false
var temp = [].concat(arr)
if(temp.sort().toString() === arr.toString()){
    flaglexicographically = true
}
var temp = (function(){
    var arr1 = [].concat(arr)
    for(var i=1;i<arr1.length;i++){
        for(var j=0;j<arr1.length-i;j++){
            if(arr1[j].length>arr1[j+1].length){
                var t = arr1[j]
                arr1[j] = arr1[j+1]
                arr1[j+1] = t
            }
        }
    }
    return arr1
})()
if(temp.toString() === arr.toString()){
    flaglengths = true
}

if(flaglexicographically && flaglengths){
    print("both")
}else if(flaglengths){
    print("lengths")
}else if(flaglexicographically){
    print("lexicographically")
}else{
    print("none")
}

