import style from './styles/index.scss';
// d3.json("/data/taxi_data.json").then( data => console.log(data));

window.addEventListener('DOMContentLoaded', e => {
var slider = document.getElementById("time-slider");
var output = document.getElementById("slider-value");
var typeButton = document.getElementById("toggle-type");
var carButton = document.getElementById("toggle-car");
var time = document.getElementById("time-info");
let hours = ((parseInt(slider.value) + 11) % 12 + 1);
let suffix = (parseInt(slider.value) >= 12)? 'PM' : 'AM';

 // Display the default slider value
 output.value = slider.value;
time.innerHTML = slider.value === "24" ? "Whole day" : hours.toString() + ":00 " + suffix;
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.value = this.value;
  hours = ((parseInt(slider.value) + 11) % 12 + 1);
  suffix = (parseInt(slider.value) >= 12)? 'PM' : 'AM';
  time.innerHTML = slider.value === "24" ? "Whole day" : hours.toString() + ":00 " + suffix;
}
typeButton.onclick = function() {
    typeButton.value === "Pick Ups" ? typeButton.value = "Drop Offs" : typeButton.value = "Pick Ups";
    typeButton.innerHTML === "Pick Ups" ? typeButton.innerHTML = "Drop Offs" : typeButton.innerHTML = "Pick Ups";
}

carButton.onclick = function() {
    carButton.value === "Taxi" ? carButton.value = "App Cars" : carButton.value = "Taxi";
    carButton.innerHTML === "Taxi" ? carButton.innerHTML = "App Cars" : carButton.innerHTML = "Taxi";
}

typeButton.innerHTML = typeButton.value;
carButton.innerHTML = carButton.value;
});