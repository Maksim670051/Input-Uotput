
function MathRez() {
    
    let number1 = Number(document.getElementById('number1').value);
    let number2 = Number(document.getElementById('number2').value);

    document.getElementById('sum').innerHTML = number1 + number2
    document.getElementById('raz').innerHTML = number1 - number2
    document.getElementById('sr').innerHTML = ( Math.abs(number1) + Math.abs(number2) ) / 2

}