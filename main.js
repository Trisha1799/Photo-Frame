function preload(){
}

function setup(){
canvas = createCanvas(600,400)
canvas.position (110,250)
video = createCapture(VIDEO)
video.hide()

tint_colour = "";
}

function draw(){
image(video, 100,100,400,200)
tint(tint_colour)


fill('green')
rect(50,40,500,20)
rect(50,40,20,300)
rect(540,50,20,300)
rect(50,340,500,20)

fill('red')
circle(50,50,50)
circle(550,50,50)
circle(50,350,50)
circle(550,350,50)
}

function apply_filter(){
    tint_colour = document.getElementById("colour_name").value
}

function take_snapshot(){
    save('img.png')
}