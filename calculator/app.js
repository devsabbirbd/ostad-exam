// Simple Calculator By Sabbir

function myCalculator() {
    
    let number1= document.getElementById("number1").value;
    let number2= document.getElementById("number2").value;
    let operation= document.getElementById("operation").value;
    let sum;

    // show hide error and success section
    function showHide(success) {
        if(success == true){
            document.getElementById("error").style.display="none";
            document.getElementById("success").style.display="block";
        }else{
            document.getElementById("error").style.display="block";
            document.getElementById("success").style.display="none";
        }
    }

    // Calculator validation and operation 

    if(number1==="" || number2===""){
        document.getElementById("error").innerHTML="Please fill in both number fields";
        showHide(false);
    }else{
         number1= Number(number1);
         number2= Number(number2);
         
        if(isNaN(number1) || isNaN(number2)){
            document.getElementById("error").innerHTML="Please enter a valid number";
            showHide(false);
        }else{
                if(operation=="addition"){
                    sum=number1+number2;
                }else if(operation=="subtraction"){
                    sum=number1-number2;
                }else if(operation=="multiplication"){
                    sum=number1*number2;
                }else if(operation=="division"){
                    sum=number1/number2;
                }else{
                    document.getElementById("error").innerHTML="Operation Not Found";
                    showHide(false);
                }

                if(sum =="Infinity"){
                    document.getElementById("error").innerHTML="Division by zero is not allowed";
                    showHide(false);
                }else if(sum == undefined){
                    document.getElementById("error").innerHTML="Operation Not Found";
                    showHide(false);
                }else if(isNaN(sum)){
                    document.getElementById("error").innerHTML="Division by zero is not allowed";
                    showHide(false);
                }else{
                    document.getElementById("success").innerHTML="Result = " + sum;
                    showHide(true);
                }
        }
    }

};