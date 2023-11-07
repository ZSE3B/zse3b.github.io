/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react';
import './App.scss';
import TurkishWeatherBlock from './TurkishWeatherBlock';
import ChatGpt from './ChatGpt.js';
import Login from './login';
import AppInfo from './info.js';
import Settings from './Settings.js';

const App = () => {
  const [isPopupVisibleWeather, setPopupVisibleWeather] = useState(false);
  const [isPopupVisibleChat, setPopupVisibleChat] = useState(false);
  const [isPopupVisibleLogin, setPopupVisibleLogin] = useState(false);
  const [isPopupVisibleSettings, setPopupVisibleSettings] = useState(false);
  const [isPopupVisibleInfo, setPopupVisibleInfo] = useState(false);

  const togglePopupInfo = () => {
    closeAllPopups();
    setPopupVisibleInfo(!isPopupVisibleInfo);
  };
  const togglePopupWeather = () => {
    closeAllPopups();
    setPopupVisibleWeather(!isPopupVisibleWeather);
  };

  const togglePopupChat = () => {
    closeAllPopups();
    setPopupVisibleChat(!isPopupVisibleChat);
  }

  const togglePopupLogin = () => {
    closeAllPopups();
    setPopupVisibleLogin(!isPopupVisibleLogin);
  }

  const togglePopupSettings = () => {
    closeAllPopups();
    setPopupVisibleSettings(!isPopupVisibleSettings);
  }; 

  const closeAllPopups = () => {
    setPopupVisibleWeather(false);
    setPopupVisibleChat(false);
    setPopupVisibleLogin(false);
    setPopupVisibleInfo(false);
    setPopupVisibleSettings(false);
  }

  return (
    <div className={`container`}>
      <header>
        <section>
          <h1>OutfitAdvisor</h1>
          <h3>Hello, username!</h3>
        </section>
        <section>
        <a href='#' onClick={togglePopupInfo}>
            <span>?</span>
        </a>
        </section>
      </header>
      <main>
      <section className={`pop-up ${isPopupVisibleInfo ? 'show' : ''}`}>
            <a href="#" className='close' onClick={togglePopupInfo}> <i class="fa-solid fa-xmark"></i></a>
            <AppInfo />
      </section>

          <section className={`pop-up ${isPopupVisibleWeather ? 'show' : ''}`}>
            <a href="#" className='close' onClick={togglePopupWeather}> <i class="fa-solid fa-xmark"></i></a>
            <TurkishWeatherBlock />
          </section>
          
          <section className={`pop-up ${isPopupVisibleChat ? 'show' : ''}`}> 
            <a href='#' className='close' onClick={togglePopupChat}><i class="fa-solid fa-xmark"></i></a>
            <ChatGpt />
          </section>

          <section className={`pop-up ${isPopupVisibleLogin ? 'show' : ''}`}> 
            <a href='#' className='close' onClick={togglePopupLogin}><i class="fa-solid fa-xmark"></i></a>
            <Login />
          </section>

          <section className={`pop-up ${isPopupVisibleSettings ? 'show' : ''}`}> 
            <a href='#' className='close' onClick={togglePopupSettings}><i class="fa-solid fa-xmark"></i></a>
            <Settings />
          </section>

        <section>
          <span>Coming soon!</span>
        </section>
        <section>
          <span>Need inspiration <br/> look here! <br/> &#40;coming soon&#41;</span>
        </section>
        <section>
          <span>Your previous outfits<br/>&#40;coming soon&#41;</span>
          <section className="div-wrapper">
            <div></div>
            <div></div>
            <div></div>
          </section>
        </section>
      </main>
      <footer>
        <div className="nav-bar">
          <ul>
            <li className='navbar-list'>
              <a href="#" onClick={closeAllPopups}>
                <span className='icon'> <i className="fa-solid fa-house"></i> </span>
              </a>
            </li>

            <li className='navbar-list'>
              <a href="#" onClick={togglePopupWeather}>
                <span className='icon'> <i className="fa-solid fa-cloud"></i> </span>
              </a>
            </li>

            <li className='navbar-list'>
              <a className="plus" href="#" onClick={togglePopupChat}>
                <span className='icon'> <i className="fa-solid fa-plus"></i> </span>
                <span className='text'> New </span>
              </a>
            </li>

            <li className='navbar-list'>
              <a href="#" onClick={togglePopupLogin}>
                <span className='icon'> <i className="fa-solid fa-user"></i> </span>
              </a>
            </li>
            <li className='navbar-list'>
              <a href="#" onClick={togglePopupSettings}>
                <span className='icon'> <i className="fa-solid fa-gear"></i> </span>
              </a>
            </li>
            <div className="indicator"></div>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
