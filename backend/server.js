// Importing necessary dependencies
const express = require("express");
const cors = require("cors"); 
require("dotenv").config();
const multer = require("multer");

// Create an instance of the Express application
const app = express(); 

// Enable CORS to allow requests from a specific origin
app.use(cors({ origin: "http://localhost:3000", credentials: true })); 

// Multer storage configuration for handling file uploads
const storageEngine = multer.diskStorage({
  destination: "./images", // Destination directory for storing uploaded images
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}--${file.originalname}`); // Generate a unique filename for each uploaded image
  },
});

// Multer configuration using the storage engine, setting file size limits, and adding a file filter
const upload = multer({
  storage: storageEngine,
  limits: { fileSize: 10000000 }, // Limit the file size to 10 MB
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb); // Call the file type check function
  },
});

// Importing the path module for handling file paths
const path = require("path");

// Function to check if the uploaded file has a valid image type
const checkFileType = function (file, cb) {
  const fileTypes = /jpeg|jpg|png|gif|svg/; // Allowed image file types

  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = fileTypes.test(file.mimetype);

  if (mimeType && extName) {
    return cb(null, true); // File type is valid
  } else {
    cb("Error: You can Only Upload Images!!"); // File type is not valid
  }
};

// Route to handle HTTP POST requests for multiple image uploads
app.post("/uploadmultipleimages", upload.array("images", 10), async (req, res) => {
  console.log("Received images", req.files);

  // Check if any image files were successfully uploaded
  if (req.files && req.files.length > 0) {
    return res.status(201).json({
      message: `Thank you for uploading ${req.files.length} image(s)`,
    });
  }

  // If no valid image files were uploaded, respond with a 400 Bad Request status and an error message
  res.status(400).json({
    message: "Please upload at least one valid image",
  });
});

// Set the server to listen on port 4000
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
