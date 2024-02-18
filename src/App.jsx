import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './views/Home/Home'
import Navbar from './components/Global/Navbar/Navbar'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
