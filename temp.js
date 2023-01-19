const tempValue=Number(prompt('enter your temperature value'));
const fromFahren=String(prompt('enter the temperature unit'));
var toCelsius=Number(prompt('enter your temperature value'));


var fahrenCovert=tempValue-32/1.8+'fahrenheit';
var fahrenUnit='fahrenheit';

var fromCelsius=fahrenUnit;
var toCelsius=tempValue*1.8/32+'celsius'


var fahrenResult=tempValue-32/1.8+'fahrenheit';
var toCelsius=tempValue*1.8/32+'celsius'
var celsiusConvert=tempValue*1.8/32+'celsius';
var celsiusUnit='celsius';


var message;
message='Invalid input, please try again';


if(tempValue==Number){
    alert();
}
else if(isNaN(tempValue)){
    alert(message);
}
if(fromFahren==celsiusUnit){
    alert(fahrenResult);
}
if(fromCelsius==fahrenUnit){
    alert(celsiusConvert);
}
if(fromCelsius!=fahrenUnit){
    alert(message);
}
if(fromCelsius!=celsiusUnit){
    alert(message);
}
else if(isNaN(tempValue)){
    alert(message);
}
else if(tempValue==0){
    alert(message);
}
else if(fromCelsius==0){
    alert(message);
}
else if(fromFahren==0){
    alert(message);
}

else{
    alert(message);
}