var newPrompt = prompt('Enter your name')
document.getElementById('submit').addEventListener('click',bmiCalculator);

//the bmiCalculator Funcion

function bmiCalculator(){
    var cm = parseInt(document.getElementById('cm').value);//converts the inputed value to a number
    var kg = parseFloat(document.getElementById('kg').value); // converts the inputed value to a floated number 

    var bmi;
    var newCm = parseFloat(cm/100);
    bmi = kg / (newCm * newCm);
    bmi = bmi.toFixed(1);//converts every exponential or complex form of numbers to digits
    console.log(bmi);
    
    document.getElementById('result').innerHTML = `${newPrompt} your BMI result is ${bmi}`;


}
