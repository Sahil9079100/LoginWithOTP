const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 5000;

// this is dummy user data, in real project the user data will cam from DB
const users = [
    { username: 'Jhon Khan', phone: '123456789' },  // put real number of the user
    { username: 'Sam Jain', phone: '987654321' },// put real number of the user
    { username: 'Robert kumar', phone: '011223344' },// put real number of the user
];

const otpStore = {};// to store OTPs temporarily

app.use(cors());
app.use(bodyParser.json());

// fast2sms api key
const apiKey = 'your_fast2sms_api_key';             // replace with your fast2sms api key

// this is the endpoint to send OTP
app.post('/send-otp', async (req, res) => {
    const { username, phone } = req.body;

    // this will  check if the user is valid or not, user even exist or not
    const user = users.find(u => u.username === username && u.phone === phone);
    if (!user) {
        return res.status(400).json({ message: 'Invalid username or phone number' });
    }

    // to generate random 6 digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);
    otpStore[phone] = otp.toString();

    // using fast2sms to send OTP
    try {
        const response = await axios.get('https://www.fast2sms.com/dev/bulkV2', {
            params: {
                authorization: apiKey,
                route: 'otp',
                variables_values: otp,
                numbers: phone,
            },
        });
        res.json({ message: 'OTP sent successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to send OTP', error: error.response?.data });
    }
});

// that is the endpoint to login the user
app.post('/login', (req, res) => {
    const { username, phone, otp } = req.body;

    // to conforn if the OTP is valid or not, if otp matches or not
    if (otpStore[phone] === otp) {
        delete otpStore[phone]; // it will clear the OTP from the input field
        return res.json({ message: 'Login successful', username });
    } else {
        return res.status(400).json({ message: 'Invalid OTP' });
    }
});

/*this is only to test the server locally, its not used in the real project, 
 you can remove it if you dont want to test it locally.
 */
app.get('/send-otp', (req, res) => {
    res.json({ message: 'Use POST method to send OTP' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});