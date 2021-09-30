var birthdayInput = document.querySelector("#birthday");
var luckyNoInput = document.querySelector("#lucky-no");
var checkButton = document.querySelector("#check-button");
var output = document.querySelector("#output");
const message = document.querySelector("#message");



checkButton.addEventListener("click", checkBirthdayIsLucky)

function checkBirthdayIsLucky(){
    var dob = birthdayInput.value;
    var lno = luckyNoInput.value;
    var sum =sumOfBirthdayDigits(dob);
    compareValues(sum, lno);
    if(sum&&luckyNo){ 
        const sumOfDate = sumOfBirthdayDigits(dob);
        compareValues(sum, lno);    }
    else{
        showMessage("NOT VALID INPUT");
    }
}

function compareValues(sum, lno){

    
        if(sum/lno === 0){
            showMessage("YOUR BIRTHDAY IS LUCKY");

        }
        else{
            showMessage("YOUR BIRTHDAY IS NOT LUCKY");

        }
   

}

function sumOfBirthdayDigits(dob){
    dob = dob.replaceAll("-","");
    var sum = 0;
    for(var i=1 ; i < dob.length; i++){
        sum = sum+Number(dob.charAt(i));

    }
    return sum;
}

const showMessage = (msg) => {
    message.innerText = msg;
  };
