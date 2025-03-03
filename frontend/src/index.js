import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// using createRoot instead of render, because i was having some issues with render lol :D
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);