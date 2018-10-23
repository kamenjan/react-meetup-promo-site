var state = {
  scene: 'home'
}

var toggleButton = document.getElementById('toggle-scene')

var days = document.getElementById('days')
var hours = document.getElementById('hours')
var minutes = document.getElementById('minutes')
var seconds = document.getElementById('seconds')

var eventDate = new Date("Nov 13, 2018 18:00:00")

// EVENT LISTENERS
// toggleButton.addEventListener('click', function(){
//   console.log('click je biu')
// })

// ON LOAD
window.setInterval(updateCounter, 1000);

// FUNCTIONS
function updateCounter () {

  var delta = new Date(Date.now() - eventDate)

  hours.innerText = (delta.getHours() < 10? '0' : '') + delta.getHours() + 'h'
  minutes.innerText = (delta.getMinutes() < 10? '0' : '') + delta.getMinutes() + 'm'
  seconds.innerText = (delta.getSeconds() < 10? '0' : '') + delta.getSeconds() + 's'

  var oneDay = 24*60*60*1000
  var diffDays = Math.round(Math.abs((new Date().getTime() - eventDate.getTime())/(oneDay)))

  days.innerText = (diffDays < 10? '0' : '') + diffDays + 'd'
  // days.innerText = diffDays
}


function toggleScene() {
  var toggleButton = document.getElementById('toggle-scene')
}