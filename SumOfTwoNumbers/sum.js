
  //! Kendi Çözümüm

  function sumTwoSmallestNumbers(numbers) {  
    let smallest = numbers[0];
    
    for(let i = 0; i<numbers.length; i++){
      if(smallest>numbers[i]){
       
        smallest=numbers[i];
      }
      
    }
    let a = numbers.indexOf(smallest);
    numbers.splice(a,1);
    let smaller= numbers[0];
      for(let i = 0; i<numbers.length; i++){
      if(smaller>numbers[i]){
        console.log(smaller)
        smaller=numbers[i];
      }
      
    }
    return smaller +smallest;
  }
  
//! 1. Çözüm

function sumTwoSmallestNumbers(numbers){  
    numbers = numbers.sort(function(a, b){return a - b; });
    return numbers[0] + numbers[1];
  };

  //! 2. Çözüm
  const sumTwoSmallestNumbers = numbers => numbers.sort((x, y) => x - y).slice(0, 2).reduce((x, y) => x + y);

