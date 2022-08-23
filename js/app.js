
function getPin(){
   const pin = generatePin();
   const pinString = pin + '';
   if(pinString.length === 4){
    return pin;
   } 
   else{
    return getPin();
   }
}
function generatePin(){
    const random = Math.round(Math.random()*10000);
    return  random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})



document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers'); //if and else-if er jonno
    const previousTypedNumber = typedNumberField.value; //if and else-if er jonno
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const reamingDigits = digits.join('');
            typedNumberField.value = reamingDigits;
        }
    }
    else{
        // const typedNumberField = document.getElementById('typed-numbers');
        // const previousTypedNumber = typedNumberField.value;
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
})



document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;

    const pinSuccessMassege = document.getElementById('pin-success'); //pin match hole jeno doesnot match cole jay..ar pin match na hole jeno pin match vole jay ar pin does not match thake.
    const pinFaillurMassege = document.getElementById('pin-failur');

    if(currentPin === typedNumber){
        // const pinSuccessMassege = document.getElementById('pin-success');
        pinSuccessMassege.style.display = 'block';
        pinFaillurMassege.style.display = 'none';
    }
    else{
        // const pinFaillurMassege = document.getElementById('pin-failure');
        pinFaillurMassege.style.display = 'block';
        pinSuccessMassege.style.display = 'none';
    }
})