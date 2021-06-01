function harmlessRansomNote(noteText, magazineText) {
    var noteArr = noteText.split(' ');
    var magazineArr = magazineText.split(' ');
    var magazineObj = {};
    
    magazineArr.forEach(word => {
      if (!magazineObj[word]) magazineObj[word] = 0;
      magazineObj[word]++;
    });
    
    var noteIsPossible = true; 
    noteArr.forEach(word => {
        if(magazineObj[word]){
            magazineObj[word]--
            if(magazineObj[word] < 0 ) noteIsPossible = false
        }else{
            noteIsPossible = false
        }
    })
    
    return noteIsPossible

  }
  const bool = harmlessRansomNote('ISI is a', 'ISI is a no 1 secret intellegience agency');
  console.log(bool)
  

  //two loops but they loop through different array we use different variables 
  //Linear Time Complexity 
  // 0(n) + 0(m)                  //if we are very specific            0(n+m)

 //       or 


//        0(n)                     //either way it is linear time complexity  