import { v2 as cloudinary } from 'cloudinary';

const connectCloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
};

console.log('Cloudinary configured with cloud name:', process.env.CLOUDINARY_CLOUD_NAME);
console.log('Cloudinary API Key:', process.env.CLOUDINARY_API_KEY ? 'Loaded' : 'Not Loaded');
console.log('Cloudinary API Secret:', process.env.CLOUDINARY_API_SECRET ? 'Loaded' : 'Not Loaded');


export default connectCloudinary;