// MainPage.js

import React from "react";
import './MainPage.css';

import mainPhoto from './logo_main_nofont.png';
import pageBackground from './main_page_backgrond.jpg';
import discordIcon from './discord.png'; 

function MainPage() {
    const sectionStyle = {
      backgroundImage: `url(${pageBackground})`
    };

    return (
        <main className="main-page-container" style={sectionStyle}>
            <div className="image-column">
                <img src={mainPhoto} alt="Polynochnij Project Logo" className="main-photo" />
            </div>

            <div className="content-column">
                <h1>Polynochnij Project</h1>
                <p>
                    Добро пожаловать в мир, где каждый шаг может стать последним.
                    Здесь аномалии и мутанты — не вымысел, а суровая реальность.
                    Присоединяйтесь к нашему RP проекту и напишите свою собственную историю выживания.
                </p>
                <a href='https://discord.gg/NG6rz7ZYyM' className='discord-button' target="_blank" rel="noopener noreferrer">
                    <img src={discordIcon} alt="Discord logo" className="discord-icon" />
                    <span>Discord</span>
                </a>
            </div>
        </main>
    );
}

export default MainPage;