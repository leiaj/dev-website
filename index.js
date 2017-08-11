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
      return "<h1>Hey, " + localStorage.person + "! Welcome to my page.</h1>"
    })
    $('#intro').html(function(){
      return "<h1>My name is Leia, I'm a web developer :)</h1>"
    })
}

function contactDiv(){
  $('#contact').html(function(){
    return '<img src="http://www.internetarchaeology.org/img/Moving/WebElements/mail_1ani.gif"></img><img src="http://www.internetarchaeology.org/img/Moving/WebElements/AAAFree.gif"></img>'
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
