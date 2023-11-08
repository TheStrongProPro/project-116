var image_Y = 0
var image_X = 0

function preload() {
    filter_image = loadImage('https://i.postimg.cc/9MRkBh8K/pngaaa-com-368854.png')
}


function setup() {
    canvas = createCanvas(300,300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose', gotPoses)
    
}

function draw() {
    image(video,0,0,300,300)
    image(filter_image,image_X,image_Y,30,30)
}

function modelLoaded() {
    console.log("The Model is loaded!")
}

function gotPoses(results) {
    if (results.length > 0){
        console.log(results)
        image_X = results[0].pose.nose.x-15
        image_Y = results[0].pose.nose.y+5

    }
}
function take_snapshot() {
    save('Your Photo.png')
}


