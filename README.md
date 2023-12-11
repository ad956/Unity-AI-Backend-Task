### Prerequisites:

1. Node.js and npm:

   - Install Node.js and npm by downloading and installing them from the official website: [Node.js](https://nodejs.org/)

2. MongoDB:
   - Install MongoDB on your machine. You can download it from the official MongoDB website: [MongoDB](https://www.mongodb.com/try/download/community)
   - Make sure the MongoDB server is running.

### Steps to Run the Express Project:

1. Clone the Repository:
   git clone https://github.com/ad956/Unity-AI-Backend-Task.git

2. Navigate to the Project Directory:
   cd your-repository

3. Install Dependencies:
   npm install

4. Set Up MongoDB Connection:

   - Open the `index.js` file and ensure that the MongoDB connection URL is correctly configured. Modify it if needed.

5. Start the Server:
   npm start

   This command will start your Node.js server, and it will be accessible at `http://localhost:3000` by default.

6. Test the API Endpoints:
   - You can use tools like Postman or cURL to test the API endpoints.
   - Example: Use Postman to send a POST request to `http://localhost:3000/api/auth/register` to register a user.

### Important Notes:

- Make sure MongoDB is running before starting the Node.js server.
- Update the MongoDB connection URL in `index.js` if needed.
