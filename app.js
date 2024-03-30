var currentRate = 280
for (i=1; i>0; i++){
      var userInput = prompt("please select 1 or 2:\n1. PKR to USD\n2. USD to PKR")
      if( userInput === "1"){
            var pkr = +prompt("enter pkr amount");
            var usdamount = pkr / currentRate
            var pkrtousd = usdamount.toFixed(2);
            alert("The " + pkr + " amount in usd will be $" + pkrtousd)
            
            var continueConversion = prompt("do you want to continue?\n1.Yes\n2.No")
            if(continueConversion === "2"){
                  alert("Thank you for using my converter. please refersh to start again!")
                  break;
            }
      }
      else if( userInput === "2"){
            var usd = +prompt("enter usd amount");
            var pkramount = usd * currentRate
            var usdtopkr = pkramount.toFixed(0);
            alert("The " + usd + " amount in pkr will be Rs." + usdtopkr + "/-")

            var continueConversion = prompt("do you want to continue?\n1.Yes\n2.No")
            if(continueConversion === "2"){
                  alert("Thank you for using my converter. please refersh to start again!")
                  break;
            }
      }
      else{
            alert("please enter from 1 or 2")
      }
}