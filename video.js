var VideoPlayer = document.getElementById('videoPlayer');
var myBideo = document.getElementById('myVideo');

function playVideo(file){
    myVideo=file;
    VideoPlayer.style.display='block';
    myVideo.style.display='block';
}
function closeBtn(){
    VideoPlayer.style.display='none';
    myVideo.style.display='none';
}