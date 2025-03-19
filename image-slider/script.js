const images = [
  "./image1.avif", 
  "./image2.avif", 
  "./image3.avif", 
  "./image4.avif" 
];

let currentIndex = 0;

function showImage(index) {
    document.getElementById("slider-image").src = images[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length; 
    showImage(currentIndex);
}

function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; 
    showImage(currentIndex);
}

document.getElementById("next-btn").addEventListener("click", nextImage);
document.getElementById("prev-btn").addEventListener("click", previousImage);

showImage(currentIndex);
