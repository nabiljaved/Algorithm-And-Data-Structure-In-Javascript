function binarySearch(numArray, key){
    var middleIdx = Math.floor(numArray.length/2)
    var middleElement = numArray[middleIdx]

    if(middleElement === key) return true
    else if (middleElement < key && numArray.length > 1){
        return binarySearch(numArray.splice(middleIdx, numArray.length), key)
    }else if(middleElement > key && numArray.length > 1){
          return binarySearch(numArray.splice(0, middleIdx))  
    }
    else return false
}

const result = binarySearch([5,7,12,16,36,39,42,56,71], 56)
console.log(result)