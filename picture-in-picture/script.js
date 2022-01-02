const buttonEl = document.getElementById("button");
const videoEl = document.getElementById("video");

// Prompt to select media stream, pass to videoEl, then play
const selectMediaStream = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoEl.srcObject = mediaStream;
    videoEl.onloadedmetadata = () => {
      videoEl.play();
    };
  } catch (error) {
    // Catch error
    console.log("Whoops,", error);
  }
};

buttonEl.addEventListener("click", async () => {
  // Disable Button
  buttonEl.disabled = true;
  // Start Picture in Picture
  await videoEl.requestPictureInPicture();
  // Reset Button
  buttonEl.disabled = false;
});

// On Load
selectMediaStream();
