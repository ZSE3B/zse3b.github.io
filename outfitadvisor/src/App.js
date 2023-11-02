/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react';
import './App.scss';
import TurkishWeatherBlock from './TurkishWeatherBlock';
import ChatGpt from './ChatGpt';

function App() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
    console.log('jaha');
  };

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
          <section className={`pop-up ${isPopupVisible ? 'show' : ''}`}>
            <a href="#" className='close' onClick={togglePopup}> <i class="fa-solid fa-xmark"></i></a>
            <TurkishWeatherBlock />
          </section>

        <section>
          <p>Current weather</p>
        </section>
        <section>
          <p>Need inspiration?<br />Look here</p>
        </section>
        <section>
          <span><nobr>Your previous outfits</nobr></span>
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
              <a href="#">
                <span className='icon'> <i className="fa-solid fa-house"></i> </span>
              </a>
            </li>

            <li className='navbar-list'>
              <a href="#">
                <span className='icon'> <i className="fa-solid fa-cloud"></i> </span>
              </a>
            </li>

            <li className='navbar-list'>
              <a className="plus" href="#" onClick={togglePopup}>
                <span className='icon'> <i className="fa-solid fa-plus"></i> </span>
                <span className='text'> New </span>
              </a>
            </li>

            <li className='navbar-list'>
              <a href="#">
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
