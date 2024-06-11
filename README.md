# Vanilla JS HTTPS Server

This project is a simple Node.js server that handles HTTP requests and responses. It uses the built-in `https` module to create a secure server.

## Functionality

The server handles the following types of requests:

- GET request at the '/' endpoint: The server responds with the `index.html` file.
- POST request at the '/submit' endpoint: The server receives data from the user, adds it to an array, and then redirects to the '/display' endpoint.
- GET request at the '/display' endpoint: The server responds with the `display.html` file, which includes the data received from the user.
- GET request at the '/input' endpoint: The server responds with an HTML file that contains a form for the user to enter data.

## Components

The project consists of the following components:

- `server.js`: This is the main server file. It creates the server and handles all the requests and responses.
- `index.html`: This is the HTML file that is sent as a response to a GET request at the '/' endpoint. It contains a form that the user can use to enter data and submit it to the server.
- `display.html`: This is the HTML file that is sent as a response to a GET request at the '/display' endpoint. It displays the data received from the user.
- `input.html`: This is the HTML file that is sent as a response to a GET request at the '/input' endpoint. It contains a form that the user can use to enter data and submit it to the server.

### `server.js` breakdown

The `server.js` file contains the following code:

1. Import the necessary modules:

```javascript
const https = require('https');
const fs = require('fs');
```

2. Read the SSL certificate files (the server key and certificate) from the file system. Replace the file paths with the paths to your own certificate files:

```javascript
const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
};
```

3. Create the server:

```javascript
const server = https.createServer(options, (req, res) => {
  // Handle requests
});
```

4. Starting the server:

```javascript
server.listen(8000, () => {
  console.log('Server running on https://localhost:8000/');
});
```



## How to Run the Project

1. Install Node.js and npm on your machine.
2. Clone this repository.
3. Navigate to the project directory and run `npm install` to install the necessary dependencies.
4. Run `node server.js` to start the server.
5. Open your browser and navigate to `https://localhost:8000/` to view the application.
