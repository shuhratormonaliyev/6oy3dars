import React, { useState } from 'react';

const ImageGallery = () => {
  const images = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/200',
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/seed/picsum/200/300'
  ];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div style={styles.container}>
      <h1>Image Gallery</h1>
      <div style={styles.gallery}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery Image ${index + 1}`}
            style={styles.thumbnail}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
      <div>
        <img src={selectedImage} alt="Selected" style={styles.selectedImage} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px'
  },
  gallery: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  thumbnail: {
    margin: '10px',
    cursor: 'pointer',
    width: '100px',
    height: '100px'
  },
  selectedImage: {
    marginTop: '20px',
    width: '300px',
    height: '300px'
  }
};

export default ImageGallery;
