// ! Kendi Çözümüm
function oddOrEven(array) {

    if(array==undefined || array==null){
      return "even";
    }
    else{
       return  array.reduce((sum,a)=>sum+a,0)%2==0?"even":"odd";
    }
   
  }

  // ! diğer çözümler

  function oddOrEven(arr) {
    return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
  }
    // ! diğer çözümler

    function oddOrEven(array) {
        var result = 0;
        for (var i = 0; i < array.length; i++)
        {result+=array[i];}
        if (result%2 == 0)
        {return "even";}
        else{return "odd";}
      }
   // ! diğer çözümler

    const oddOrEven = a => a.reduce((s,n)=> s + n,0)%2 == 0 ? "even" : "odd";