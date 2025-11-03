import React from 'react';
import './CSS/style.css';

const Achievement = () => {
  return (
    <div className="achievement">
      <h2>ACHIEVEMENTS & CERTIFICATIONS</h2>

      {/* Achievements Section */}
      <div className="achievement__container">
        <h3>Achievements</h3>
        <ul className="achievement__list">
          <li>
            <strong>GeeksforGeeks Campus Mantri</strong> — St. Joseph’s Institute of Technology (2024–2025)
          </li>
          <li>
            Organized and hosted two coding events — <strong>“St. Joseph’s × GeeksforGeeks”</strong> with 100+ participants
          </li>
          <li>
            Solved <strong>150+</strong> problems on LeetCode, <strong>1000+</strong> on Skillrack, and <strong>100+</strong> on GeeksforGeeks
          </li>
        </ul>
      </div>

      {/* Certifications Section */}
      <div className="achievement__container">
        <h3>Certifications</h3>
        <ol className="achievement__list">
          <li>NPTEL: Introduction to Operating Systems (Elite)</li>
          <li>NPTEL: Python for Data Science (Elite)</li>
          <li>NPTEL: Data Mining (Elite)</li>
          <li>NPTEL: Database Management Systems</li>
          <li>NPTEL: Introduction to Machine Learning (Elite)</li>
          <li>Typewriting Senior — English & Tamil (First Class)</li>
        </ol>
      </div>
    </div>
  );
};

export default Achievement;
