import multer from "multer";
import path from "path";

// Set up storage engine for multer
const storage = multer.diskStorage({
    // cb : callback function to specify the destination and filename for uploaded files
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Directory to save uploaded files
    },

    filename: (req, file, cb) => {
        const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1E9);

        cb(null, uniqueName + path.extname(file.originalname)); // Save file with unique name and original extension
    }
});

// File type validation

const fileFilter = (req, file, cb) => {

    if(
        file.mimetype.startsWith("image/") || // Accept image files
        file.mimetype === "application/pdf" // Accept PDF files
    ){
        cb(null, true); // Accept the file
    } else {
        cb(new Error("Only image and PDF files are allowed"), false); // Reject unsupported file types
    }
    
};

// Export multer instance with defined storage and file filter

export const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // Limit file size to 5MB
});