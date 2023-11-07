/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react';
import './App.scss';
import TurkishWeatherBlock from './TurkishWeatherBlock';
import ChatGpt from './ChatGpt';
import login from './login';

function App() {
  const [isPopupVisibleWeather, setPopupVisibleWeather] = useState(false);
  const [isPopupVisibleChat, setPopupVisibleChat] = useState(false);
  const [isPopupVisibleLogin, setPopupVisibleLogin] = useState(false);

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

  const closeAllPopups = () => {
    setPopupVisibleWeather(false);
    setPopupVisibleChat(false);
    setPopupVisibleLogin(false);
  }

  return (
    <div className="container">
      <header>
        <section>
          <h1>OutfitAdvisor</h1>
          <h3>Hello, username!</h3>
        </section>
        <section>
          <span>?</span>
        </section>
      </header>
      <main>
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
            <login />
          </section>

        <section>
          <p>Coming soon!</p>
        </section>
        <section>
          Need inspiration
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
              <a href="#">
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
