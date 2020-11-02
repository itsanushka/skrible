var db
var value= 255
var value2= 5
var ribbon 
var textBox
var drawing= []
var currentPath = []
var db_drawing= []


function setup(){
  createCanvas(displayWidth,displayHeight)
  db= firebase.database()
  background(0)
display()
}

function draw(){
stroke(value)
strokeWeight(value2)
noFill()
readData()
beginShape()
for(var i=0; i<db_drawing.length; i++)
{
vertex(db_drawing[i].x,db_drawing[i].y)
endShape()
drawSprites()
}


  
}
function mouseDragged(){
  // json 
  var point= {
    x: mouseX, y: mouseY
  }
  // push helps us in adding values in an array 
  drawing.push(point)
  db.ref("drawing").set({d:drawing})
}
function readData(){
  db.ref("drawing/").on("value",(data)=>{
    db_drawing=data.val().d
  })
}

function eraser(){
  db_drawing=[]
    db.ref("drawing/d/").remove()
  
}

function display1(){
  button1= createButton("clear")
  button1.size(80,20)
  button1.position(10,10)
  button1.mousePressed(()=>{
    eraser()
  })


}

