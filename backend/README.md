# upload-image-using-multer-middleware

Table of Contents

- [Overview](#overview)

- [How it works](#how-it-works)

- Dependencies
    - [Frontend](#frontend-dependencies)
    - [Backend](#backend-dependencies)

- Implementation
    - [Frontend](#frontend-implementation)
    - [Backend](#backend-implementation)

- [How to run](#how-to-run)

## Overview

The complete program constitutes a simple full-stack application for image uploads. On the frontend, a React component named `App` manages the state of a success message and facilitates image uploads through a form. The frontend sends an HTTP POST request, using the Fetch API, to a specified server endpoint on the backend created using Express. The backend, configured with necessary middleware and Multer for handling file uploads, checks the validity of the uploaded image based on allowed types. If successful, the server responds with a 201 status and a thank-you message; otherwise, it returns a 400 status with an error message. The Express server listens on port 4000, and CORS is configured to permit requests from the React app running on `http://localhost:3000`. The entire application thus enables users to upload single images, validating the file type on the server, and provides feedback to the user via the React frontend.

<p align="right">(<a href="#send-text-receive-message-via-http">back to top</a>)</p>

## How it works

1. **Frontend Initialization (React):** 
    - The React frontend begins by importing necessary dependencies and setting up the `App` component, which includes state management for a success message using the `useState` hook. The component also defines a function, `uploadImageViaHttpPostRequest`, to handle image uploads via HTTP POST requests.

2. **Image Upload Form (React):** 
    - The `App` component renders a form with a file input allowing users to select an image file. The form includes an `onSubmit` event that triggers the `uploadImageViaHttpPostRequest` function when the user attempts to submit the form.

3. **Image Upload Request (React):** 
    - Inside the `uploadImageViaHttpPostRequest` function, the selected image file is obtained, and a `FormData` object is created to store the image file. Using the Fetch API, an HTTP POST request is made to the server endpoint `http://localhost:4000/uploadsingleimage` with the image file attached in the request body.

4. **Server Configuration (Express):** 
    - The Express server is created and configured with necessary middleware such as `body-parser`, `cors` to handle JSON requests and enable Cross-Origin Resource Sharing, and `multer` to manage file uploads. The server is set to listen on port 4000.

5. **Multer Configuration (Express):** 
    - Multer is configured with a storage engine to specify the destination directory for storing uploaded images and to generate unique filenames. Additionally, file size limits and a file filter function (`checkFileType`) are set to ensure the uploaded file is a valid image type.

6. **File Type Validation (Express):** 
    - The `checkFileType` function is employed to verify whether the uploaded file has a valid image type based on allowed extensions and MIME types. If the file type is valid, the server continues processing; otherwise, it responds with a 400 status and an error message.

7. **Handling Upload on the Server (Express):** 
    - The server sets up a route "/uploadsingleimage" that handles HTTP POST requests for single image uploads using the configured Multer middleware. Upon receiving a valid image, it responds with a 201 status and a JSON message thanking the user; otherwise, it responds with a 400 status and an error message.

8. **Handling Responses (React):** 
    - On the React frontend, the success or error messages are updated based on the server's response. If the response is successful (status code in the range 200-299), the success message state is updated with the message from the server. In case of a 400 Bad Request status, the success message state is updated with the error message. The success message is then displayed on the frontend.


<p align="right">(<a href="#send-text-receive-message-via-http">back to top</a>)</p>

## Dependencies

### *Frontend Dependencies*

#### React:

- A JavaScript library for building user interfaces.
- Allows developers to create reusable UI components.
- Manages the state of components and efficiently updates the DOM.

#### Fetch API:

- A modern browser feature that provides a simple interface for making HTTP requests.
- Used in the frontend to send HTTP requests to the backend server.

### *Backend Dependencies*

#### Node.js:

- A JavaScript runtime built on Chrome's V8 JavaScript engine.
- Allows running JavaScript code on the server-side.
- Powers the backend server.

#### Express:

- A minimal and flexible Node.js web application framework.
- Simplifies the process of building robust and scalable web applications.
- Handles routing, middleware, and HTTP request/response processing.

#### Cors Middleware:

- The cors middleware is used to enable Cross-Origin Resource Sharing.
- Allows the backend to respond to requests from a different origin (in this case, the frontend).
- Configured with options specifying the allowed origin and credentials.

#### Multer Middleware:

- The multer middleware is designed to handle file uploads.
- It facilitates the processing of multipart/form-data, commonly used when uploading files through HTML forms.
- Allows developers to configure various options, including the destination directory for storing uploaded files, defining filename generation strategies, setting file size limits, and implementing custom file filters for validation.

<p align="right">(<a href="#send-text-receive-message-via-http">back to top</a>)</p>

## Implementation

### *Frontend Implementation*

#### React in the Frontend:

- The frontend is built using React, allowing the creation of components that manage their state.
- Components are responsible for rendering UI elements and managing user interactions.

#### Fetch API Usage:

- The `uploadImageViaHttpPostRequest` function in `App.js` uses the Fetch API to make an HTTP POST request to the backend server.
- The request includes a `formData` object that contains image file.

#### Dynamic Content Rendering:

- Depending on the server's response, the frontend dynamically displays either a success message or an error message on the webpage.
- Utilizes React state management to update the UI based on the server's response.

### *Backend Implementation*

#### Node.js Server:

- The backend server is implemented using Node.js, providing a runtime for executing JavaScript on the server.
- The `server.js` file contains the server implementation.

#### Express Middleware:

- Express middleware is used, including `cors` for Cross-Origin Resource Sharing and `multer` for handling image upload and storage configuration.

#### Handling HTTP POST Requests:

- The backend listens for HTTP POST requests on the `/uploadsingleimage` endpoint.
- The `app.post` method in `server.js` handles these requests.

#### Server-Side Processing:

- Upon receiving a request, the server logs the received data and checks if the submission contains an image file and is not empty.
- Responds with a success message if conditions are met; otherwise, sends a 400 Bad Request response with an error message.

#### Port Configuration:

- The server listens on port 4000, as specified in the `PORT` variable in `server.js`.
- You can modify the port based on your configuration.

<p align="right">(<a href="#send-text-receive-message-via-http">back to top</a>)</p>

## How to Run

1. **Clone the Repository:**
   ```
   git clone https://github.com/Walks99/http-protocol-example.git
   ```

2. **Switch into backend directory:**
    ```
    cd backend
    ```

3. **Install backend dependencies**
    ```
    npm install
    ```

4. **Start the backend server**
    ```
    npm run node
    ```

5. **Switch into frontend directory**
    ```
    cd ..
    cd frontend
    ```

6. **Install frontend dependencies**
    ```
    npm install
    ```

7. **start frontend server**
    ```
    npm start
    ```

8. **Access the application at**
    ```
    http://localhost:3000
    ```

<p align="right">(<a href="#send-text-receive-message-via-http">back to top</a>)</p>