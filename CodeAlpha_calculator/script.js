const display = document.getElementById("display");

/* Append Values */
function appendValue(value){
    display.value += value;
}

/* Clear Display */
function clearDisplay(){
    display.value = "";
}

/* Delete Last Character */
function deleteLast(){
    display.value = display.value.slice(0, -1);
}

/* Calculate Result */
function calculate(){

    try{
        display.value = eval(display.value);
    }

    catch(error){
        display.value = "Error";
    }
}

/* Keyboard Support */
document.addEventListener("keydown", (event) => {

    const key = event.key;

    if(!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)){
        appendValue(key);
    }

    else if(key === "Enter"){
        calculate();
    }

    else if(key === "Backspace"){
        deleteLast();
    }

    else if(key === "Escape"){
        clearDisplay();
    }
});