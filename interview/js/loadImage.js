function loadImage(url) {
  return new Promise((resolve, reject) => {
    let image = new Image();
    image.src = url;
    image.onload = () => {
      resolve(image);
    };
    image.onerror = () => {
      reject(new Error('Cound not load image at ' + url));
    };
  });
}
