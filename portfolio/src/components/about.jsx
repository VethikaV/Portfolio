import './CSS/style.css';
import vethika from '../assets/Vethika.jpeg';

function About() {
  return (
    <div className="about">
      <h1>ABOUT ME</h1>
      <img className="img" src={vethika} alt="Profile" />

      <h2>
        I am a passionate and detail-oriented Data Analyst with a strong foundation in Artificial
        Intelligence and Machine Learning. I have hands-on experience in data handling and analysis
        using Excel and MySQL, along with proficiency in Java, C, and Python for problem-solving and
        software development. I also possess front-end development skills in React.js and Node.js,
        and expertise in design tools such as Figma, Adobe Illustrator, and Canva for creating
        visually engaging and user-centric designs.
      </h2>

      {/* 🎓 Education Section */}
      <div className="education-container">
        <h1>Education</h1>
        <div className="education-list">
          <div className="education-item">
            <h3>2022-2026 (Current)</h3>
            <h4>B.Tech - Artificial Intelligence and Data Science</h4>
            <h4>St. Joseph's Institute of Technology</h4>
            <h4>CGPA: 8.74</h4>
          </div>

          <div className="education-item">
            <h3>2022 - 12th Bio-Math</h3>
            <h4>Alwin Memorial Public School</h4>
            <h4>Percentage: 90.2%</h4>
          </div>

          <div className="education-item">
            <h3>2020 - 10th General</h3>
            <h4>Alwin Memorial Public School</h4>
            <h4>Percentage: 91.8%</h4>
          </div>
        </div>
      </div>

      {/* 💼 Internship Section */}
      <div className="internship-container">
        <h1>Internship Experience</h1>
        <div className="internship-list">

          {/* Internship 1 */}
          <div className="internship-item">
            <h2>Engine Factory, Avadi</h2>
            <h4>June 25, 2024 – July 2, 2024</h4>
            <p>
              During this industrial internship, I gained practical exposure to large-scale
              manufacturing environments and mechanical production workflows. I studied different
              types of engines, their core components, and assembly processes used in real-world
              defense manufacturing.
            </p>
            <p>
              I closely observed heat treatment techniques such as annealing and hardening, along
              with precision machining processes. I also learned how quality control standards are
              enforced through inspections, tolerance checks, and performance testing to ensure
              reliability and safety.
            </p>
            <p>
              This experience strengthened my understanding of industrial operations, production
              efficiency, and the importance of accuracy and compliance in high-stakes engineering
              systems.
            </p>
          </div>

          {/* Internship 2 */}
          <div className="internship-item">
            <h2>Student Technology Empowerment Program – CDW</h2>
            <h4>January 20, 2025 – January 30, 2025</h4>
            <p>
              This internship focused on emerging technologies in Artificial Intelligence,
              particularly Large Language Models (LLMs) and intelligent automation. I received
              hands-on training in prompt engineering, AI workflows, and real-time system
              integration.
            </p>
            <p>
              I worked on a project using Retrieval-Augmented Generation (RAG), where I integrated
              external knowledge sources with LLMs to generate accurate and context-aware responses.
              I also explored AI agents and automation pipelines for solving real-world business
              problems.
            </p>
            <p>
              The program enhanced my understanding of applied AI systems, teamwork in technical
              environments, and the ethical deployment of generative AI solutions.
            </p>
          </div>

          {/* Internship 3 */}
          <div className="internship-item">
            <h2>AI Research Intern — Sri Gurubhyo Technologies (Remote)</h2>
            <h4>April 1, 2025 – May 31, 2025</h4>
            <p>
              As an AI Research Intern, I automated employee data integration by designing Python
              scripts to extract, clean, and validate large Excel datasets before securely
              integrating them into the company’s internal systems. This significantly reduced
              manual data handling and improved data consistency.
            </p>
            <p>
              I designed and implemented a multilingual OCR and translation pipeline using
              Tesseract OCR and Deep Translator. The system enabled real-time text extraction and
              translation across 116+ languages, making document processing faster and more
              accessible.
            </p>
            <p>
              Additionally, I developed a Flask-based backend to handle secure image uploads,
              language detection, error handling, and API responses. This internship strengthened
              my skills in backend development, AI pipelines, data validation, and scalable system
              design.
            </p>
          </div>

          {/* Internship 4 */}
          <div className="internship-item">
            <h2>Data Engineer Intern — Vebbox Software Solution</h2>
            <h4>June 1, 2025 – June 29, 2025</h4>
            <p>
              In this role, I worked on the backend and data engineering aspects of educational
              technology platforms. My responsibilities included validating datasets, ensuring
              accurate data flow between backend services and user-facing applications, and
              maintaining data integrity across systems.
            </p>
            <p>
              I assisted in SQL-based database optimization, data migration tasks, and quality
              assurance testing. I created large test datasets to verify transformations,
              analytics outputs, and system reliability under real-world conditions.
            </p>
            <p>
              I collaborated closely with developers and testers to identify issues, debug backend
              workflows, and re-test fixes before production releases. This experience enhanced my
              understanding of production-grade systems, data reliability, and cross-functional
              teamwork.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;
