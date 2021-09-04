
function getInputValue(num){
    let inputValue = document.getElementById('inputValue').value =num;
    console.log(inputValue);
}
getInputValue(123); 

function getResult(num){
    let inputValue = document.getElementById('result').value =num;
    console.log(inputValue);
}
getResult(456); 



let digits = document.querySelectorAll('.digit');
for(let i=1; i<digits.length;i++){
    let digit = digits[i];
    // console.log(digit);
    digit.addEventListener('click',function(){
        // console.log(this);
        console.log('digit clicked',this.id);
        
    })
}
