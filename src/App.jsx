import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
      <div className="App">
        <header>
          Welcome
        </header>
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my projects and skills in data science!</p>

        <main>
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <footer>
          <p>© 2023 Harsh Tripathi</p>
          <p>Follow me on <a href="https://github.com/harryvtripathi">GitHub</a> | <a href="https://www.linkedin.com/in/harrsh-tripathi-a2455312b/">LinkedIn</a></p>
        </footer>
      </div>

  )
}

export default App
