const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://multi-speciality-hospitalhospitals.com/wp-content/uploads/2024/01/hospital-building.jpg',
    filename: 'building.jpg'
  },
  {
    url: 'https://multi-speciality-hospitalhospitals.com/wp-content/uploads/2024/01/entrance.jpg',
    filename: 'entrance.jpg'
  },
  {
    url: 'https://multi-speciality-hospitalhospitals.com/wp-content/uploads/2024/01/pharmacy.jpg',
    filename: 'pharmacy.jpg'
  },
  {
    url: 'https://multi-speciality-hospitalhospitals.com/wp-content/uploads/2024/01/emergency-entry.jpg',
    filename: 'emergency-entry.jpg'
  },
  {
    url: 'https://multi-speciality-hospitalhospitals.com/wp-content/uploads/2024/01/',
    filename: ''
  },
  {
    url: 'https://multi-speciality-hospitalhospitals.com/wp-content/uploads/2024/01/reception.jpg',
    filename: 'reception.jpg'
  },
  {
    url: 'https://multi-speciality-hospitalhospitals.com/wp-content/uploads/2024/01/',
    filename: ''
  },
  {
    url: 'https://multi-speciality-hospitalhospitals.com/wp-content/uploads/2024/01/waiting-area.jpg',
    filename: 'waiting-area.jpg'
  },
  {
    url: 'https://multi-speciality-hospitalhospitals.com/wp-content/uploads/2024/01/opd-waiting.jpg',
    filename: 'opd-waiting.jpg'
  },
  {
    url: 'https://multi-speciality-hospitalhospitals.com/wp-content/uploads/2024/01/nursing-station.jpg',
    filename: 'nursing-station.jpg'
  },
  {
    url: 'https://multi-speciality-hospitalhospitals.com/wp-content/uploads/2024/01/micu.jpg',
    filename: 'micu.jpg'
  },
  {
    url: 'https://multi-speciality-hospitalhospitals.com/wp-content/uploads/2024/01/nicu.jpg',
    filename: 'nicu.jpg'
  },
  {
    url: 'https://multi-speciality-hospitalhospitals.com/wp-content/uploads/2024/01/general-ward.jpg',
    filename: 'general-ward.jpg'
  },
  {
    url: 'https://multi-speciality-hospitalhospitals.com/wp-content/uploads/2024/01/ac-room.jpg',
    filename: 'ac-room.jpg'
  },
  {
    url: 'https://multi-speciality-hospitalhospitals.com/wp-content/uploads/2024/01/lab.jpg',
    filename: 'lab.jpg'
  }
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filepath = path.join(__dirname, '..', 'public', 'images', 'gallery', filename);
    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }

      response.pipe(file);

      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
};

const downloadAllImages = async () => {
  const galleryDir = path.join(__dirname, '..', 'public', 'images', 'gallery');
  
  // Create gallery directory if it doesn't exist
  if (!fs.existsSync(galleryDir)) {
    fs.mkdirSync(galleryDir, { recursive: true });
  }

  for (const image of images) {
    try {
      await downloadImage(image.url, image.filename);
    } catch (error) {
      console.error(`Error downloading ${image.filename}:`, error.message);
    }
  }
};

downloadAllImages().then(() => {
  console.log('All downloads completed');
}).catch((error) => {
  console.error('Error in download process:', error);
}); 