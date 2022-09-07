//! kendi Çözümüm
function highAndLow(numbers){
 
    let i = 0;
    let a = 0;
    
      
   let newA = numbers.split(" ");
   let biggst = parseInt(newA[i]);
    let smallst= parseInt(newA[a]);
       
     
        
        for(i=0; i<newA.length; i++){
            if(biggst<parseInt(newA[i])){
              biggst = parseInt(newA[i])
  
            }
        }
        for(a=0; a<newA.length; a++){
            if(smallst>parseInt(newA[a])){
              smallst = parseInt(newA[a])
            }
       
          }
    return biggst +" " + smallst;
    }

//! Diğer Çözümlerin 1.si

function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
  }

  //! Diğer Çözümlerin 2.si

  function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }
  //! Diğer Çözümlerin 3.si

  function highAndLow(numbers){
    let arr = numbers.split(' ').map(Number);  
    return Math.max(...arr) + ' ' + Math.min(...arr);
  }