import React, { useState } from 'react';
import './App.scss';
import './info.scss'

const url = "https://github.com/ZSE3B/zse3b.github.io/blob/main/outfitadvisor/README.md";

const AppInfo = () =>{
    return(
        <div className="info-container">
            <h2>App Info</h2>

            <div className='more-details'>
                <p className='infos'><span className='details'>App version:</span> 0.6</p>
                <p className='infos'><span className='details'>Docs: </span> <a href={url}>check here</a></p>
                <p className='infos'><span className='details'>Created by: </span><br/> Fantastyczna czwórka</p>
            </div>
        </div>
    );
};

export default AppInfo