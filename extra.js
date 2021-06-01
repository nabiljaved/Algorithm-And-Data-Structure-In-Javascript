function harmlessRansomNote(noteText, magazineText){
    //do not contain punctuation and all the letters are lower case 
    //change both in array of words 
    var noteArr = noteText.split(' ')
    var magazineArr = magazineText.split(' ')

    //what words we have available in our magazine and how many words we have 
    //the technique is a hash table it is a technique useful for many different algo
    var magazineObj = {}  

    //we want this magazine object to have every word in magazine array as property on it
    //and for each word we want its value to be number of time that is present in magazine array 
    
    magazineArr.forEach(word => {
        if(!magazineObj[word]) magazineObj[word] = 0;
        magazineObj[word]++
    })
    
    console.log(magazineObj)
} 

harmlessRansomNote('', 'This is all the magazine text in the magazine')