function display(){
    ribbon= createSprite(50,250,150,1100)
    ribbon.shapeColor="white"
    ribbon2= createSprite(750,35,1500,70)
    ribbon2.shapeColor="aqua"

    b1=createButton("R")
    b1.size(60,60)
    b1.position(70,85)
    b1.mousePressed(()=>{
        value="red"
    })
    
    b2=createButton("Y")
    b2.size(60,60)
    b2.position(70,145)
    b2.mousePressed(()=>{
        value="yellow"
    })

    b3=createButton("B")
    b3.size(60,60)
    b3.position(70,205)
    b3.mousePressed(()=>{
        value="blue"
    })

    b4=createButton("P")
    b4.size(60,60)
    b4.position(70,265)
    b4.mousePressed(()=>{
        value="pink"
    })

    b5=createButton("V")
    b5.size(60,60)
    b5.position(70,325)
    b5.mousePressed(()=>{
        value="violet"
    })

    b6=createButton("G")
    b6.size(60,60)
    b6.position(70,385)
    b6.mousePressed(()=>{
        value="green"
    })
   
    c1=createSprite(55,100,50,50)
    c1.shapeColor="red"

    c2=createSprite(55,160,50,50)
    c2.shapeColor="yellow"

    c3=createSprite(55,220,50,50)
    c3.shapeColor="blue"

    c4=createSprite(55,280,50,50)
    c4.shapeColor="pink"

    c5=createSprite(55,340,50,50)
    c5.shapeColor="violet"

    c6=createSprite(55,400,50,50)
    c6.shapeColor="green"

    eraser=createButton("clear")
    eraser.size(60,60)
    eraser.position(60,500)
    eraser.mousePressed(()=>{
        value=0
    })
    s1=createButton("size1")
    s1.size(60,60)
    s1.position(60,570)
    s1.mousePressed(()=>{
        value2=5
    })

    s2=createButton("size2")
    s2.size(60,60)
    s2.position(60,640)
    s2.mousePressed(()=>{
        value2=10
    })
    
}
