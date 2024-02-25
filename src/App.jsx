import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './views/Home/Home'
import Navbar from './components/Global/Navbar/Navbar'
import Footer from './components/Global/Footer/Footer'
import Company from './components/Company/Company'
import Campus from './components/Campus/Campus'
import School from './components/School/School'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/company' element={<Company/>}/>
          <Route path='/campus' element={<Campus/>}/>
          <Route path='/school' element={<School/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
