function reverseWords(string){
    var wordsArr = string.split(' ')
    var reversedWordsArr = []

    wordsArr.forEach(word => {
        var reverseWord = ""
        for(var i=word.length-1; i>=0; i--){
           reverseWord += word[i]
        }
        reversedWordsArr.push(reverseWord)
    })

    return reversedWordsArr.join(' ')
}

const result = reverseWords("nabeel javed")
console.log(result)