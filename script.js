



var endDate = new Date("Mar 1, 2021 09:00:00").getTime();

setInterval(function(){
var now = new Date().getTime();
console.log(now);
var distance = endDate - now;

document.getElementById("days").innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24)) + ' Days';
document.getElementById("hours").innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + ' Hours';
document.getElementById("minutes").innerHTML = ''+ Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) +' Minutes';
document.getElementById("seconds").innerHTML = ''+ Math.floor((distance % (1000 * 60)) / 1000) +' Seconds';

      }, 1000);



