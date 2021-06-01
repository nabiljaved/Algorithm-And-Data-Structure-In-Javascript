function twoSum(numArray, Sum){
    var pairs = []
    var hastable = []

    for(var i =0; i<numArray.length; i++){
        var cuurentNum = numArray[i]
        var counterPart = Sum - cuurentNum
        if(hastable.indexOf(counterPart) !== -1){
              pairs.push([cuurentNum, counterPart])  
        }
        hastable.push(cuurentNum)
    }
    return pairs
}

const result = twoSum([40,11,19,17,-12],28)
console.log(result)