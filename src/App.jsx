import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
// You would create and import these other components as well
// import Skills from './components/Skills';
// import Contact from './components/Contact';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
      <div className="App">
        <header>
          You can create a Header/Navbar component here
        </header>
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my projects and skills in data science!</p>

        <main>
          <About />
          <Projects />
          {/* <Skills /> */}
          {/* <Contact /> */}
        </main>
        <footer>
          <p>© 2023 Harsh Tripathi</p>
          <p>Follow me on <a href="https://github.com/harryvtripathi">GitHub</a> | <a href="https://www.linkedin.com/in/harsh-tripathi-1b0b4a1b6/">LinkedIn</a></p>
        </footer>
      </div>

  )
}

export default App
