$(document).ready(function() {
  console.log("Am I seeing this")
  newVistor()
  enterPage()
  catMeow()



    // OR $('div.toshow').show(2200);
    // OR $('div.toshow').slideDown("slow");

})

function newVistor(){
  if (!localStorage.person){
      localStorage.person = prompt("Oh hey! Didn't see you there, what's you're name?");
    }
  $('#welcome').html(function() {
      return "<h1>Hey, " + localStorage.person + "! Welcome to my page.</h1>"
    })
    $('#intro').html(function(){
      return "<h1>My name is Leia & I'm a Web Developer.</h1>"
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
  $('#test').click(function(){
    console.log("Cat Meowing")

  })
}
