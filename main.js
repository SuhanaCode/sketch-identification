function setup(){
  canvas = createCanvas(280 , 280);
  canvas.center();
  background("white");
  canvas.mouseReleased(classifyCanvas);
  synth = window.speechSynthesis;
}

function preload(){
  classifier = ml5.imageClassifier('DoodleNet')
}

function draw(){
  stroke(13);
  stroke(0);

  if (mouseIsPressed){
    line(pmouseX , pmouseY , mouseX , mouseY);
  }
}

function classifyCanvas(){
  classifier.classify(canvas , gotResults);
}

function gotResults(error , results){
  if(error){
    console.error(error);
  }
  console.log(results);
  document.getElementById('label').innerHTML = "Label: " + results[0].label;
  document.getElementById('confidence').innerHTML = "Confidence: " + Math.round(results[0].confidence * 100) + "%";

  UtterThis = new SpeechSynthesisUtterance(result[0].label);
  synth = speak(UtterThis);
}

function clearCanvas(){
  backgraound("white");
}
