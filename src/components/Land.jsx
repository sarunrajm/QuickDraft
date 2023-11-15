import React from 'react';
import { Link } from 'react-router-dom';
import './Land.css';

function Land() {
  return (
    <div className="landing-container">
      <header>
        <h1>QuickDraft</h1>
        <p>Effortless Precision in Every Line</p>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Text <br /> formatting</h2>
          <p>bold, italics, underline, etc</p>
        </div>
        <div className="feature">
          <h2>Font styles <br /> and sizes</h2>
          <p>Adjustable Font Size,
          Headings and Subheadings
          </p>
        </div>
        <div className="feature">
          <h2>Bulleted and numbered lists</h2>
          <p>Symbol Options,
          Visual Appeal
          </p>
        </div>
      </section>
      <section className="cta">
        <p>Embark on your document journey effortlessly with our intuitive app, designed to streamline your workflow.</p>
        <Link to="/document">
          <button className="cta-button">START</button>
        </Link>
      </section>
      
    </div>
  );
}

export default Land;
