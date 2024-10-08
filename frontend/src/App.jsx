// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Login from './components/login';
import Signup from './components/signup';
import Home from './components/home';
import TrainResults from './components/TrainResults';
import { AuthProvider } from './context/AuthContext';
import Profile from './components/Profile'; 
import Booking from './components/booking';

const App = () => {
    return (
        <AuthProvider> {/* Wrap your app with AuthProvider */}
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/train-results" element={<TrainResults />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
