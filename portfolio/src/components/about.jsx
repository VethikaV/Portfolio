import './CSS/about.css';
import vethika from '../assets/Vethika.jpeg';


function About() {
  return (
    <div className="about">
      <h1>ABOUT ME</h1>
      <img className="img" src={vethika} alt="Profile" />
      <h2>I am an enthusiastic Data Analyst with a  foundation in Machine Learning.
         I have hands-on experience working with data using Excel and possess proficiency in C programming and Java for problem-solving 
         and software development. Additionally, I have expertise in Figma for UI/UX design and Canva for creative content creation.</h2>

      
      <div className="education-container">
        <h2>Education</h2>
        <div className="education-item">
          <h3>2022-2026 (Current)</h3>
          <h4>B.Tech - Artificial Intelligence and Data Science</h4>
          <h4>St. Joseph's Institute of Technology</h4>
          <h4>CGPA: 8.72</h4>
        </div>
        <div className="education-item">
          <h3>2022 - 12th Bio-Math</h3>
          <h4>Alwin Memorial Public School</h4>
          <h4>Percentage: 90.2%</h4>
        </div>
        <div className="education-item">
          <h3>2020 - 10th General</h3>
          <h4>Alwin Memorial Public School</h4>
          <h4>Percentage: 91.3%</h4>
        </div>
      </div>

      <div className="education-container">
      <h1>Internship</h1>
      </div>
        
      <div className="education-container">
      
      <h2>Engine Factory, Avadi</h2>
      <h4>June 25, 2024 to July 2, 2024</h4>
      <p>Gained in-depth knowledge of various engine types and their components. Observed real-time heat treatment processes and manufacturing techniques. Learned about quality control procedures and testing methodologies.</p>
      </div>


      <div className="education-container">
      <h2>Student Technology Empowerment Program at CDW</h2>
      <h4>January 20, 2025 to January 30, 2025</h4>
      <p>Hands-on experience with Large Language Models (LLMs) and their applications. Worked on a real-time project using RAG (Retrieval-Augmented Generation) and AI agents. Developed skills in AI integration and automation for practical solutions.</p>
      </div>
    </div>
  );
}

export default About;
