function genRandomOtp(){
    const digit4otp = Math.round(Math.random()*10000);
    if ( (digit4otp+'').length == 4 ){
        return digit4otp;
    }else{
        return genRandomOtp();
    }
}

function genOTP(){
    console.log("Im pins")
    const pinOTP =genRandomOtp();
    document.getElementById('otp-holder').value = String(pinOTP);
}

document.getElementById('keypad').addEventListener('click',function(event){
    const clickedNum  = (event.target.innerText);
    const typedInput = document.getElementById('typed-nums');
    const currentInputValue = typedInput.value;
    if( clickedNum == 'C'){
        typedInput.value ='';
    }else{
        console.log(currentInputValue,clickedNum);
        const newNum = currentInputValue+clickedNum;
        typedInput.value = newNum;
        console.log(newNum);
    
    }
   
})

// check pins both field
function matchPIN(){
    const currentGenPin = document.getElementById('otp-holder').value;
    const typedPin = document.getElementById('typed-nums').value;
    const failed = document.getElementById('failed');
    const success = document.getElementById('success');
    if (currentGenPin == typedPin){
        failed.style.display = 'none';
        success.style.display = 'block';
    }else{
        failed.style.display = 'block';
        success.style.display = 'none';
    }
}