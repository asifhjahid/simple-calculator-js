function getInput(){
    let inputValue = document.getElementById('inputValue').value;
    return inputValue;
    
}

function getInputValue(num){
    document.getElementById('inputValue').value =num;
    
}

function getOutput(){
    let inputResult = document.getElementById('result').value;
    return inputResult;
    
}

function getOutputResult(num){
     document.getElementById('result').value =num;
    
}



let digits = document.querySelectorAll('.digit');
for(let i=0; i<digits.length;i++){
    let digit = digits[i];
    digit.addEventListener('click',function(){
        
        let inputDigit = getInput();
        inputDigit = inputDigit + this.innerText;
        getInputValue(inputDigit)
        // let test = document.getElementById('inputValue').value;
        // test = test = this.innerText;
        // getInputValue(test)
        if(this.id =="clear"){
            getInputValue('')
            getOutputResult('')
        }
        else if(this.id == 'backspace'){
            var inputNumber = getInput();
            console.log(inputNumber)
            // let inputNumber = parseFloat(inputDigit)
            inputNumber = inputNumber.slice(0, -1);
            console.log(inputNumber);
            getInputValue(inputNumber);
            getOutputResult('')
        }
        
        
        
    })
}


// let operators = document.querySelectorAll('.operator');
// for(let i=0; i<operators.length;i++){
//     let operator = operators[i];
//     operator.addEventListener('click',function(){
        
//        if(this.id =="clear"){
//             getInputValue('')
//             getOutputResult('')
//         }
        
        
        
        
//     })
// }

