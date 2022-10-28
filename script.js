let empty = true; // indicates if output is empty
let sign = '+'; // indicates if output is positive or negative

function input_char(char){
    if (empty){ // if output box is empty
        document.getElementById("output").value = char; // changes the value in output box to inputted char
        empty = false;
    }
    else{ // if output box is not empty then append inputted char
        document.getElementById("output").value += char;
    }
    
}

function invert(){ // function to invert the sign of the number in output box
    let expression = document.getElementById("output").value;
    if (sign == '+'){
        document.getElementById("output").value = '-'.concat(expression); // concatenates - to the expression in output box
        sign = '-'; 
    }
    else{
        document.getElementById("output").value = expression.slice(1, expression.length); // slices the expression string to remove - sign
        sign = '+';
    }
}

function calculate(){
    let expression = document.getElementById('output').value
    let result = Math.round(eval(expression)*(10**15))/(10**15); 
    // first uses in-built eval function to evaluate string in output box and then rounds to 15 decimal places
    document.getElementById('output').value = result;
}
