
function calculate(){
    var bmi;
    var result = document.getElementById("result");

    var height = parseInt(document.getElementById("height").value);
  
    var weight = parseInt(document.getElementById("weight").value);

    document.getElementById("weight-val").textContent = weight + " kg";
    document.getElementById("height-val").textContent = height + " cm";


    bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);
  
    result.textContent = bmi;}
   {

    document.getElementById("bmi").textContent = bmi;}