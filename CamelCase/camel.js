//   let str="the-camel_case-tRy";

//! Kendi Çözümüm
function toCamelCase(str){
    let yeni ="";
      let fixed = str;
      if(str.includes("-")){
         fixed = str.split("-");
         }
    else if(str.includes("_")){
         fixed = str.split("_");
         }
    
    for(let i=0; i<fixed.length; i++){
      if(i==0){
        yeni+=fixed[i];
      }
      else{
         yeni+= fixed[i].charAt(0).toUpperCase() + fixed[i].slice(1).toLowerCase();
        }
    }
      return yeni;
    }
    



//! 1. Çözüm

// function toCamelCase(str){
//     var regExp=/[-_]\w/ig;
//     return str.replace(regExp,function(match){
//           return match.charAt(1).toUpperCase();
//      });
// }


//! 2. Çözüm

// function toCamelCase(str){
//     return str.replace(/[-_](.)/g, (acfasf, afa) => afa.toUpperCase());
//   }
// console.log(toCamelCase(str));
 //! 2.çözümün benzeri
// function toCamelCase(str){
//     return str.replace(/[_-]\w/gi, ch => ch[1].toUpperCase());
//   }

//! 3. Çözüm

// function toCamelCase(str){
//     return str.split(/-|_/g).map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)).join('');
//   }

