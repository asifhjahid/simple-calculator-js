
function inputValue(id){
    let inputNumber= document.querySelector(id).value;
    return inputNumber;
}

function outputValue(id,updatedValue){
    document.querySelector(id).value = updatedValue;
    
}



let inputDigit;
let digits = document.querySelectorAll('.digit');
for(let i=0; i<digits.length;i++){
    let digit = digits[i];
    digit.addEventListener('click',function(e){
        
        inputDigit = inputValue('#inputValue')
      
        inputDigit = inputDigit + e.target.innerText;
        console.log(inputDigit);
        outputValue("#inputValue",inputDigit);
        
        if(this.id == 'clear' ){
            outputValue("#inputValue",'');
            outputValue("#result",'');
        }
        else if(this.id == 'backspace'){
            inputDigit = inputDigit.slice(0,-2);
            outputValue("#inputValue",inputDigit);
        }
       
        else if(this.id == 'equal'){
                inputDigit = inputDigit.slice(0,-1);
                outputValue('#inputValue',inputDigit);
                let finalResult = eval(inputDigit);
               outputValue("#result",finalResult);
            
            
         }
            else if(this.id == 'percentage'){
                inputDigit = inputDigit.slice(0,-1);
                console.log(inputDigit);
                outputValue('#inputValue',inputDigit);
               let percentageResult = inputDigit/100;
               console.log(percentageResult);
               outputValue("#result",percentageResult);
           }
           
                
                
            })
        }


