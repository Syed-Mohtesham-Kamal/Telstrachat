import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div>
      <div className="nav_header container">
        <header>
          <div className="whatsappDownload">
            <img className="logoImg" src="Images/TLogo.png" alt="" />
          </div>
        </header>
        <nav>
          <div className="navItems-area">
            <div className="navItems"><b>About</b></div>
            <div className="navItems"><Link to="/signup"><b>For Users</b></Link></div>            
            <div className="navItems"><b>For Manager</b></div>
          </div>
        </nav>
      </div>
      <section className="privateImage-area">
        <img className="privateImage" src="Images/Main banner.png" alt="" />
        <div className="chatGraphicsArea">
          <div className="chatGraphics-description">
            <h1 className="chatGraphics-description-head">Privacy Matters</h1>
            <p className="chatGraphics-description-info">Simple, reliable, private
              messaging and calling for free*,
              available all over the world.</p>
            <button className="chatGraphics-description-download" href="#">Know&nbsp;More&nbsp; 
              <i className="fa-solid fa-download"></i>
            </button>
          </div>
          <p className="terms">* Data charges may apply. Contact your provider for
            details.</p>
        </div>
      </section>
      <section className="chatHeads">
        <img className="chatHeadsImage1" src="Images/chatHeadsImage1.png" alt="" />
      </section>
      <section className="privateDescriptionLarge">
        <h2 className="privateDescriptionLarge-text">With private messaging and
          calling, you can be yourself, speak freely
          and feel close to the most important people in your life no matter
          where they are.</h2>
      </section>
      <section className="chatHeads chatHeadsTest">
        <img className="chatHeadsImage1" src="Images/chatHeadsImage2.png" alt="" />
      </section>
    </div>
  );
}

export default Main;
