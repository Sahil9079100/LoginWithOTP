# Login App with OTP Verification

This is a simple login application built with **React** for the frontend and **Node.js** for the backend. It allows users to log in using their username and phone number, receive an OTP via SMS, and verify it to gain access.

## Features
- User login with username and phone number.
- OTP verification via SMS using Fast2SMS.
- Dummy user data for testing (replace with a database in production).
- Simple and responsive UI.

---

## Prerequisites
Before running the project, ensure you have the following installed:
- Node.js (v16 or higher)
- npm (Node Package Manager)

---

## Setup and Installation

### 1. Clone the Repository
Clone this repository to your local machine:
```bash
git clone https://github.com/your-username/login-app.git
cd login-app
```

### 2. Set Up the Backend
Navigate to the backend folder:
```bash
cd backend
```

Install dependencies:
```bash
npm install
```

Set up the Fast2SMS API key:
- Sign up at Fast2SMS and get your API key.
- Open the `server.js` file and replace `YOUR_FAST2SMS_API_KEY` with your actual API key:
```javascript
const apiKey = 'YOUR_FAST2SMS_API_KEY'; // Replace with your Fast2SMS API key
```

Start the backend server:
```bash
node server.js
```
The backend will run on `http://localhost:5000`.

### 3. Set Up the Frontend
Navigate to the frontend folder:
```bash
cd ../frontend
```

Install dependencies:
```bash
npm install
```

Start the React app:
```bash
npm start
```
The frontend will run on `http://localhost:3000`.

---

## Project Structure

### Backend (`backend/server.js`)
- Handles user authentication and OTP verification.
- Uses Fast2SMS to send OTPs via SMS.
- Contains dummy user data for testing:
```javascript
const users = [
  { username: 'Sahil Vaishnav', phone: '123456789' },
  { username: 'Rishi Puri', phone: '987654321' },
  { username: 'Ankit Saini', phone: '011223344' },
];
```
Note: In a real project, replace this with a database (e.g., MongoDB, PostgreSQL).

### Frontend (`frontend/src/App.js`)
- Provides a user interface for login and OTP verification.
- Communicates with the backend using axios.

---

## Running the Project

### Backend
Navigate to the backend folder:
```bash
cd backend
```

Start the server:
```bash
node server.js
```

### Frontend
Navigate to the frontend folder:
```bash
cd ../frontend
```

Start the React app:
```bash
npm start
```

---

## Usage
- Open the frontend in your browser: `http://localhost:3000`.
- Enter a valid username and phone number (from the dummy data).
- Click `Get OTP` to receive an OTP via SMS.
- Enter the OTP and click `Login`.
- If the OTP is correct, you'll see a success message: "Hello `<Username>`, you are logged in!"

---

## Deployment
To deploy this project:
- **Backend**: Use Cyclic.sh or Heroku.
- **Frontend**: Use Vercel.

---

## Contributing
Contributions are welcome! If you find any issues or want to add new features, feel free to open a pull request.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## Acknowledgments
- Fast2SMS for the SMS API.
- React and Node.js for building the application.