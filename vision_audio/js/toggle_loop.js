function toggle_loop() {
    var ao = document.getElementById("my_audio_control");
    
    if(ao.loop) {ao.loop = false; }
    else { ao.loop = true; }
    ao.onload();
}