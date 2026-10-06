import "./App.css";

function App() {
  return (
    <div className="portfolio">
      {/* Navbar */}
      <nav className="navbar">
        <h2>Vaishnavi.</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="hero">
        <div className="hero-text">
          <p className="welcome">WELCOME TO MY PORTFOLIO 👋</p>

          <h1>
            Hi, I'm <span>Vaishnavi</span>
          </h1>

          <h2>Information Technology Student</h2>

          <p>
            I am a passionate IT student interested in web development,
            programming and learning new technologies.
          </p>

          <a href="#projects" className="btn">
            View My Projects →
          </a>
        </div>

        <div className="hero-card">
          <div className="circle">👩🏻‍💻</div>
          <h3>Future IT Engineer</h3>
          <p>Learn • Build • Create</p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <p className="section-title">ABOUT ME</p>
        <h2>Turning Ideas Into Digital Experiences</h2>

        <p className="about-text">
          I am an Information Technology engineering student who enjoys
          exploring web technologies and creating useful digital projects.
          I believe in continuous learning and improving my technical skills
          through practical work.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section skills-section">
        <p className="section-title">MY SKILLS</p>
        <h2>Technologies I Work With</h2>

        <div className="skills">
          <div className="skill">⚛️ React</div>
          <div className="skill">🌐 HTML</div>
          <div className="skill">🎨 CSS</div>
          <div className="skill">⚡ JavaScript</div>
          <div className="skill">🟢 Node.js</div>
          <div className="skill">🐙 Git & GitHub</div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <p className="section-title">MY WORK</p>
        <h2>Featured Projects</h2>

        <div className="projects">
          <div className="project-card">
            <span>🌐</span>
            <h3>Student Portfolio</h3>
            <p>
              A responsive personal portfolio website created using React,
              JavaScript and CSS.
            </p>
          </div>

          <div className="project-card">
            <span>🗳️</span>
            <h3>Online Election System</h3>
            <p>
              A web-based system designed to conduct and manage college
              elections digitally.
            </p>
          </div>

          <div className="project-card">
            <span>🔐</span>
            <h3>SQL Injection Demo</h3>
            <p>
              An educational cybersecurity project demonstrating vulnerable
              and secure login methods.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <p className="section-title">CONTACT ME</p>
        <h2>Let's Connect 💜</h2>

        <p>
          Have a project idea or want to connect? Send me a message.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you! Your message has been submitted.");
          }}
        >
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>

          <button type="submit">Send Message 🚀</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Vaishnavi | Student Portfolio</p>
      </footer>
    </div>
  );
}

export default App;