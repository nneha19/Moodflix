
import './App.css'
import Content from './components/Content'
import Footer from './components/Footer'
import Inputs from './components/Inputs'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import { useState } from 'react'
function App() {

const [response, setResponse] = useState("");
const [loading, setLoading] = useState(false);

  return (
    <div  className="App" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
    <Navbar />
    <Intro />
    <Inputs setResponse={setResponse} setLoading={setLoading} />
    <Content response={response} loading={loading} />
    <Footer />
    </div>
  )
}

export default App
