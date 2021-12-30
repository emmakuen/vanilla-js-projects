const imgContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let loadMore = false;
let loaded = 0;

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

    // Event Listener, check when each is finished loading
    imageEl.addEventListener("load", imageLoaded);

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

// Check if all images where loaded
const imageLoaded = () => {
  loaded++;
  if (loaded === imgContainer.childElementCount) {
    loadMore = true;
    loader.hidden = true;
  }
};

// Check if scrolling near bottom of page, then load more photos
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY > document.body.offsetHeight - 1000 &&
    loadMore
  ) {
    loadMore = false;
    getPhotos().then((photos) => displayPhotos(photos));
  }
});

// On Load
getPhotos().then((photos) => displayPhotos(photos));
