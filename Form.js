class Form{
constructor(){
this.input = createInput("type the name")
this.button = createButton("next")
this.greeting = createElement("h1")
}
hide(){
  this.button.hide();
  this.input.hide();
  this.greeting.hide();
}
display(){
  var title = createElement("h2")
  title.html("car playing game ")
  title.position(400,100)

  this.input.position(130,160)
  this.button.position(250,200)
  this.button.mousePressed( () =>{
      this.input.hide()
      this.button.hide()
       player.name = this.input.value();
       playerCount = playerCount+1
       player.updateCount(playerCount)
      
      this.greeting.html("hello "+ player.name)
      this.greeting.position(400,200)
  }
      
  )
}
}