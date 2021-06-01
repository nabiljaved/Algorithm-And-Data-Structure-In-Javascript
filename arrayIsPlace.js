function  reverseArray(arr){
    for(var i = 0; i<arr.length/2; i++){
        var tempVariable = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = tempVariable
    }
    return arr
}

//var numberArray = [1,2,3,4,5,6]
var nameArray = ["nabeel", "harry", "john", "anita"]
const result = reverseArray(nameArray)
console.log(result)