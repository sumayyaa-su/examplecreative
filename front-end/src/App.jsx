import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Userprofile from './components/Userprofile';
import Doctorprofile from './components/Doctorprofile';
import Nav from './components/Nav'; 
import Login from './components/Login';
import Signup from './components/Singup'
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Admin from './components/Admin';
import AboutUs from './components/Aboutus';
import Services from './components/Services';
import Chat from './components/Chat';
import AdminDashboard from './components/Admin';
import ContactUs from './components/Contactus';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Navigation bar - make sure it's outside the Routes so it's visible on all pages */}
      <Nav />
    
      {/* Define routes */}
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Aboutus" element={<AboutUs/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Chat" element={<Chat/>} />
        <Route path="/chat/:chatId" component={Chat} />
        <Route path="/Contactus" element={< ContactUs/>} />
        
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/doctorprofile" element={<Doctorprofile />} />
        <Route path="/user" element={<Userprofile />} />
        <Route path="*" element={<div>Page Not Found</div>} />
        
      </Routes>
      
    </>
  
  );
}

export default App;
