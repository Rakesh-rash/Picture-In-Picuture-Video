const VideoElement=document.getElementById("video");
const button=document.getElementById("button");


async function selectMediaStream(){
    try{
        const MediaStream=await navigator.mediaDevices.getDisplayMedia();
        VideoElement.srcObject=MediaStream;
        VideoElement.onloadedmetadata=()=>{
            VideoElement.play()
        }

    }catch(error){

    }
}
button.addEventListener('click',()=>{
    button.disabled=true;
    VideoElement.requestPictureInPicture();
    button.disable=false;
})

selectMediaStream();