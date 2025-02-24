import React from 'react';
import './CSS/home.css';
import vethika from '../assets/cute_photo.jpeg'

import { RiInstagramLine, RiLinkedinBoxFill, RiGithubFill } from 'react-icons/ri';
 
const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <h1 className="home__name">Vethika V</h1>
        <div className="home__perfil">
          <div className="home__image">
            <img src={vethika} alt="Vethika" className="home__img" />
            <div className="home__shadow"></div>
            <div className="geometric-box"></div>
          </div>

          <div className="home__social">
            <a href="https://www.instagram.com/_vethika__/" target="_blank" rel="noopener noreferrer" className="home__social-link">
              <RiInstagramLine size={24} />
            </a>
            <a href="https://www.linkedin.com/in/vethika-venkatraman-106082210/" target="_blank" rel="noopener noreferrer" className="home__social-link">
              <RiLinkedinBoxFill size={24} />
            </a>
            <a href="https://github.com/VethikaV" target="_blank" rel="noopener noreferrer" className="home__social-link">
              <RiGithubFill size={24} />
            </a>
          </div>    
        </div>
      </div>
    </section>
  );
};

export default Home;
