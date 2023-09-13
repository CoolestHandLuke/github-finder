import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

/* Hello! And welcome to my application! This is the most complicated React project I've made to date, 
and I learned a lot while building it. This project utilized Router, useContext, axios, and reducers, all of which 
were new to me when I started. In short, this app fetches data from the Github API and displays the data in 
a nicely formatted way. All CSS is handled by Tailwind, which I also knew nothing about when I began this project. 
Overall, I feel like I've gained a lot of confidence in working with React and using the built in hooks. Tailwind is 
still a little intimidating but I feel confident I will get better with it in due time. Also, I made use of DaisyUI
and FontAwesome for some of the components. */

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
