
import './App.css'
import Content from './components/Content'
import Footer from './components/Footer'
import Inputs from './components/Inputs'
import Intro from './components/Intro'
import Navbar from './components/Navbar'

function App() {

  return (
    <div  className="App" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
    <Navbar />
    <Intro />
    <Inputs />
    <Content />
    <Footer />
    </div>
  )
}

export default App
