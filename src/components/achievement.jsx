import React from 'react';
import './CSS/achievement.css';

const Achievement = () => {
  return (
    <div className="achievement">
      <h2>ACHIEVEMENT</h2>
      <div className="achievement__container">
        <ul className="achievement__list">
          <li>
            <strong>Geeks for Geeks Campus Mantri</strong> of St. Joseph’s Institute of Technology (2024-2025)
          </li>
          <li>
            Part of Media Team of the event <strong>"AIZEN 2K24"</strong> (28/9/24)
          </li>
          <li>
            Conducted a Coding Event <strong>"St. Joseph’s X GeeksforGeeks"</strong> (10/12/24)
          </li>
          <li>
            Conducted a Coding Event <strong>"St. Joseph’s X GeeksforGeeks"</strong> (24/2/25)
          </li>
          <li>
            <strong>Solved Problems:</strong>
            <ul>
              <li>LeetCode: 100+</li>
              <li>SkillRack: 1000+</li>
              <li>GeeksforGeeks: 100+</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Achievement;
