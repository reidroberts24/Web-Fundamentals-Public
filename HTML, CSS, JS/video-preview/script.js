console.log("page loaded...");

function playVideoMuted(element) {
    element.muted = true;
    element.play();
}

function playVideo(element) {
    if (element.paused == true) {
        element.muted = false;
        element.play();
    } else {
        element.pause();
    }
}

function pauseMutedVideo(element) {
    element.pause();
}