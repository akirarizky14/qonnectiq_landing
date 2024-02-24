import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './views/Home/Home'
import Navbar from './components/Global/Navbar/Navbar'
import Footer from './components/Global/Footer/Footer'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
