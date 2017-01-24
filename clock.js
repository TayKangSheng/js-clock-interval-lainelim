
document.addEventListener('DOMContentLoaded', function(){
  var min = document.getElementById('minute')
  var second = document.getElementById('second')
  var hour = document.getElementById('hour')
  var clock = document.getElementById('clock')

clock.appendChild(min)
clock.appendChild(second)

function updateClock(){
function secondRotation(x){
  return (x / 60) * 360;
}

function hourRotation(y,z){
  return ((y / 12) * 360 + (z / 60) * 30)
}

function minuteRotation(z,x){
  return ((z / 60) * 360 + (x /60) * 6)
}

var now = new Date()
var currentHours = now.getHours()
var currentMinutes = now.getMinutes()
var currentSeconds = now.getSeconds()

function hourformat(x){
  if (x > 12){
    return x-12
  }
  else{
    return x
  }
}

second.style.transform = "rotate(" + secondRotation(currentSeconds) + "deg)"
min.style.transform = "rotate(" + minuteRotation(currentMinutes,currentSeconds) + "deg)"
hour.style.transform = "rotate(" + hourRotation(hourformat(currentHours),currentMinutes) + "deg)"
}

setInterval(updateClock,1000)

})
