







WatsonSDK.SpeechToText.recognize(function(data){
    // data
    if(data.iscompleted === WatsonSDK.Constants.YES) {
        // connection closed, ready for another round of speech recognition
        return;
    }

    if(data.isfinal === WatsonSDK.Constants.YES) {
        // last transcript is returned, the WebSocket is automatically disconnected
    }
    // evaluate the transcription
    console.log(data.message);
}, function(error){
    // error
});
