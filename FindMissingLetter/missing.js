function findMissingLetter(array)
{let i=1;
  

    let first = array[0].charCodeAt(0);
    let flag=true;
    
    while(flag){
      
      first++;
      if(first===array[i].charCodeAt(0)){
        i++;
      }
      else{
        flag=false;
      }
    }
    

  return String.fromCharCode(first);
}

console.log(findMissingLetter(['a','b','c','e','f']));