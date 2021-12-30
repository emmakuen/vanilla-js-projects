// Get photos from Unsplash API
const getPhotos = async () => {
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    // Catch Error
  }
};

// On Load
getPhotos();
