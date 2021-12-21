let mainvVid = document.querySelector('main-video');
document.querySelector('.course-3 .box .video video').forEach(vid =>{
  vid.onclick = () =>{
    let src=vid.getAttribute('src');
    mainvVid.classList.add('active');
    mainvVid.querySelector('video').src = src;
  }
});
document.querySelector('#close-vid').onclick = () =>{
  mainvVid.classList.remove('active');
}