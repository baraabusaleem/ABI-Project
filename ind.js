// API key //
var ApIkey="c7a736b2ef8cec60efa5d975668437b2";

document.getElementById("country").addEventListener('change',function(){
               //  fetch Api//
var city=document.querySelector("#country").value;


fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c7a736b2ef8cec60efa5d975668437b2&units=metric`
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);


   const d = new Date();

document.querySelector('.wind .value').textContent=(data.wind.speed)
document.querySelector('.humidity .value').textContent=(data.main.humidity+"%");
document.querySelector('.pressure .value').textContent=(data.main.pressure+"%") ;
document.querySelector('.weather-temp').textContent=(data.main.temp.toFixed(0)+"°C");
document.querySelector('.location').textContent=city
document.querySelector('.date-container .date-dayname').textContent=d.toLocaleString("en-us", { weekday: "long" });
document.querySelector('.date-container .date-day').textContent=d.toLocaleDateString();
document.querySelector('.weather-desc').textContent=data.weather[0].main 

})})