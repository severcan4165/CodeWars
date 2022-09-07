
//! Kendi Çözümüm
var isSquare = function(n){
  let flag=false;
  if(n<0){    
    return flag;
  } 
  else if(n==0){
   flag=true;
    return flag;
  }
  else{
    if(Math.sqrt(n)%1===0){
     
     flag=true;
    }
 }
  return flag;
}
//! diğer çözümler

// function isSquare(n) {
//   return Math.sqrt(n) % 1 === 0;
// }

//! diğer çözümler

// const isSquare2 = n => Number.isInteger(Math.sqrt(n));



//  var isSquare = function(n){
//    let dict=[];
//    let count = 0;
//    let bolunen =n;
//    let flag=false;
//    if(n<0){
    
//      return flag;
//    }
 
 
//    else if(n==0){
//     flag=true;
//      return flag;
//    }
 
//    else{
//          for(let i =2; i<n/2+1; i++){
//                  while(bolunen%i==0){
//                    if(!dict.includes(i)){
//                      dict[count]=[i];
//                      dict[count].push(1);
//                    }
//                    else{
//                      dict[count][1]++;
 
//                    }
//                    bolunen=bolunen/i;
//                    count++;
//                  }
  
//          }
//          if(dict.length>0){
//          if(dict.length==1 && dict[0]%2==0){
//           flag=true;
//          }
//          else if(dict[0][0] == dict[1][0]){
//           flag=true;
//          }
     
//          }
//         }


//         return flag;
//    }
   
//  console.log( isSquare(n));

  
 