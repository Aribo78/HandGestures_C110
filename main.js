Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );


function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
    
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/KsZT3RAZx/model.json', modelloaded);

function modelloaded() {
    console.log('Model Loaded!');
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is" + prediction_1;
    speak_data_2 = "The second prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);

}
function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}


function gotResult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();

        if(results[0].label=="✌ peace")
        {
         document.getElementById("update_emoji").innerHTML = "&#9996;";
        }
        if(results[0].label=="🖐 hand")
        {
          document.getElementById("update_emoji").innerHTML = "&#128400;";
        }
        if(results[0].label=="✊ fist")
        {
            document.getElementById("update_emoji").innerHTML = "&#9994;";
        }
        if(results[0].label=="👍 thumbs up")
        {
            document.getElementById("update_emoji").innerHTML = "&#128077;";
        }
        if(results[0].label=="👐 double hand")
        {
            document.getElementById("update_emoji").innerHTML = "&#128080;";
        }
        if(results[0].label=="🤘 Spider man")
        {
            document.getElementById("update_emoji").innerHTML = "&#129304;";
        }

        if(results[1].label=="✌ peace")
        {
         document.getElementById("update_emoji2").innerHTML = "&#9996;";
        }
        if(results[1].label=="🖐 hand")
        {
          document.getElementById("update_emoji2").innerHTML = "&#128400;";
        }
        if(results[1].label=="✊ fist")
        {
            document.getElementById("update_emoji2").innerHTML = "&#9994;";
        }
        if(results[1].label=="👍 thumbs up")
        {
            document.getElementById("update_emoji2").innerHTML = "&#128077;";
        }
        if(results[1].label=="👐 double hand")
        {
            document.getElementById("update_emoji2").innerHTML = "&#128080;";
        }
        if(results[1].label=="🤘 Spider man")
        {
            document.getElementById("update_emoji2").innerHTML = "&#129304;";
        }

    }
}
