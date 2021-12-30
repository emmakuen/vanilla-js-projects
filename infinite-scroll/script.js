const imgContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

// Get photos from Unsplash API
const getPhotos = async () => {
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    return data;
  } catch (err) {
    // Catch Error
  }
};

// Create Elements for Links, Photos, Add to DOM
const displayPhotos = (photos) => {
  photos.forEach((photo) => {
    // Create <a> to Unsplash
    const linkEl = document.createElement("a");
    setAttributes(linkEl, {
      href: photo.links.html,
      target: "_blank",
    });
    // Create <img> for photo
    const imageEl = document.createElement("img");
    setAttributes(imageEl, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    // Put <img> inside <a>, put poth inside imgContainer
    linkEl.appendChild(imageEl);
    imgContainer.appendChild(linkEl);
  });
};

// Helper to Set Attributes
const setAttributes = (element, attributes) => {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
};

// On Load
getPhotos().then((photos) => displayPhotos(photos));
