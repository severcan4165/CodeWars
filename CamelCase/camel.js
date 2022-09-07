
//   let str="the-camel_case-tRy";

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

//! Kendi Çözümüm
