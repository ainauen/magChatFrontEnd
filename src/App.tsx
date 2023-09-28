import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/home/Home';
//import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
//import ChatRoom from './pages/chatroom/ChatRoom';
import Chat from './pages/chatroom/Chat';
import {AuthenticatedTemplate, UnauthenticatedTemplate} from "@azure/msal-react";
import { SignOutButton } from './components/SignOutButton';
import { SignInButton } from './components/SignInButton';


function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <UnauthenticatedTemplate>
        <BrowserRouter>
          <div className='header-row'>
            <div className='headerNew'>
              
              <NavLink to="/">Home</NavLink>
              <SignInButton/>
            </div>
          </div>
          <div className='content-row'>
            <div className='contentNew'>
              <Routes>
                <Route path='/'  Component={Home} />
              </Routes>
            </div>
          </div>
          <div className='footer-row'>
            <div className='footerNew'>
              <NavLink to="/">Privacy Policy</NavLink>
              <NavLink to="/dashboard">Terms and Conditions</NavLink>
            </div>
          </div>
        </BrowserRouter>
        </UnauthenticatedTemplate>

        <AuthenticatedTemplate>
        <BrowserRouter>
          <div className='header-row'>
            <div className='headerNew'>
              
              <NavLink to="/">Home</NavLink>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/chatroom">Chatrooms</NavLink>     
              <SignOutButton />         
              
            </div>
          </div>
          <div className='content-row'>
            <div className='contentNew'>
              <Routes>
                <Route path='/'  Component={Home} />
                <Route path='/dashboard' Component={Dashboard} />
                <Route path='/chatroom' Component={Chat} />
              </Routes>
            </div>
          </div>
          <div className='footer-row'>
            <div className='footerNew'>
              <NavLink to="/">Privacy Policy</NavLink>
              <NavLink to="/dashboard">Terms and Conditions</NavLink>
            </div>
          </div>
        </BrowserRouter>
        </AuthenticatedTemplate>
      </div>

    </div>

  );
}

export default App;
