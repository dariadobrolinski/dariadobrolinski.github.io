import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Awards from './components/Awards'
import Contact from './components/Contact'
import './index.css'

function App() {
  return (
    <div className="relative bg-black min-h-screen noise-overlay">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Awards />
      </main>
      <Contact />
    </div>
  )
}

export default App
