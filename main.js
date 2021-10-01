function preload() {

}

function setup() {
    canvas = createCanvas(400, 300);
    video = createCapture(VIDEO);
    video.hide();
    canvas.center();

    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/egqeb1WkC/model.json", modelLoaded);

}

function modelLoaded() {
    console.log("model is loaded");
}

function draw() {
  image(video,0,0,400,300);
classifier.classify(video , gotResult)
}
function modelLoaded() {
    console.log("Model is loaded");
}


function gotResult(error, results) {
    if (error) {
        console.error(error);
    }

    else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_accuracy_name").innerHTML = results[0].confidence.toFixed(6);
    }
}