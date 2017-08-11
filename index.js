$(document).ready(function() {
  console.log("Am I seeing this")
  newVistor()
  enterPage()
  contactDiv()

})

function newVistor(){
  if (!localStorage.person){
      localStorage.person = prompt("Oh hey! Didn't see you there, what's you're name?");
    }
  $('#welcome').html(function() {
      return "<h1>Hey, " + localStorage.person + ", welcome to my page!</h1>"
    })
    $('#intro').html(function(){
      return "<h1>My name is Leia, I'm a web developer :)</h1><h3>Make yourself at home, feel free to click around.</h3>"
    })
}

function contactDiv(){
  $('#contact').html(function(){
    return '<a href="mailto:leiajospe@gmail.com">"<img src="http://www.animatedgif.net/computers/a_10mailput_e0.gif"></img></a><br><br><a href="https://github.com/leiaj/"><img src="images/minion.png" id="minion"></img></a><a href="https://www.linkedin.com/in/leia-josp%C3%A9-46753148/"><img src="http://illinoispartners.com/wp-content/uploads/2013/10/LinkedIn-Logo-02.png" id="linkedin"></img></a><a href="https://learn.co/leiaj/resume"><img src="https://maxcdn.icons8.com/Share/icon/nolan/Business//resume1600.png" id="resume"></img></a>'
  })
}

function enterPage(){
  $('#enter').html(function(){
    return '<img src="http://www.picgifs.com/graphics/e/enter/graphics-enter-996871.gif"></img><img src="http://www.picgifs.com/graphics/e/enter/graphics-enter-996871.gif"></img><img src="http://www.picgifs.com/graphics/e/enter/graphics-enter-996871.gif"></img><img src="http://www.picgifs.com/graphics/e/enter/graphics-enter-996871.gif"></img>'
  })
  $('#enter').click(function(){
    console.log("Function called")
  })
}

function catMeow(){
  var x = document.getElementById("myAudio");
    x.play()
}

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

function getCurrentTime(){
  var currentTime = new Date(),
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes();

	if (minutes < 10) {
	 minutes = "0" + minutes;
  }

	var suffix = "AM";
	if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
	}
	if (hours == 0) {
	 hours = 12;
	}

  var msg = new SpeechSynthesisUtterance(`The current time is ${hours} ${minutes} ${suffix}`);
  msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == 'Friend'; })[0];
  speechSynthesis.speak(msg);
}

function getCurrentDate(){
  var currentDate = new Date(),
    day = currentDate.getDate(),
    month = currentDate.getMonth() + 1,
    year = currentDate.getFullYear();
  var msg = new SpeechSynthesisUtterance(`Today's date is ${day} ${month} ${year}`);
  msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == 'Friend'; })[0];
  speechSynthesis.speak(msg);
}

function iLoveMyComp(){
  var msg = new SpeechSynthesisUtterance(`I love my computer! Please hire me. Thanks. Goodbye!`);
  msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == 'Friend'; })[0];
  speechSynthesis.speak(msg);
}
