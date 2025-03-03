import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleGetOTP = async () => {
        try {
            const response = await axios.post('http://localhost:5000/send-otp', { username, phone });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data?.message || 'Failed to send OTP');
        }
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/login', { username, phone, otp });
            setMessage(response.data.message);
            setLoggedIn(true);
        } catch (error) {
            setMessage(error.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            {!loggedIn ? (
                <>
                    <h1>Login Page</h1>
                    <div>
                        <label>Username: </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Phone Number: </label>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <button onClick={handleGetOTP}>Get OTP</button>
                    <div>
                        <label>OTP: </label>
                        <input
                            type="text"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                        />
                    </div>
                    <button onClick={handleLogin} disabled={!otp}>Login</button>
                    {message && <p>{message}</p>}
                </>
            ) : (
                <h1>Hello {username}, you are logged in!</h1>
            )}
        </div>
    );
};

export default App;