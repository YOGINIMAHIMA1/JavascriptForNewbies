function Numbers() {
  console.log(arguments)
}
addNumbers(10, 20, 30, 40, 50)

function addNumbers() {
  for (let i = 0; i < arguments.length; i++)
    console.log(arguments[i])
}
addNumbers();
function addNum() {
  for (let i = 0; i < arguments.length; i++) {
    let ans = 0;
    for (i = 0; i < arguments.length; i++) {
      ans = ans + arguments[i]
    }
    console.log(ans)
  }
}
addNum(10, 20, 30, 40, 50)

// ... spread ----- spread operator
function multiply(... numbers)
{
   let res=1;
  for(i=0;i<numbers.length;i++)
    {
     
      res= res *numbers[i]
    }
  console.log(res)
}
multiply(23,45,34,23,34)

--------------------- OP----------------------------------
 /*10
20
30
40
50
150
27518580  */
