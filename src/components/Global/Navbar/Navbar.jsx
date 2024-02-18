import '../../../css/Global/Navbar/Navbar.css'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import logo from '../../../assets/Global/Navbar/Logo_Qonnectiq_Desktop.png'
function Navbar(){
    return(
        <div className="container-navbar">
            <div className="wrapper-navbar">
                <section className="left-navbar">
                    <figure>
                        <Link to="/"><img src={logo} alt="Logo Qonnectiq" href="/" /></Link>
                    </figure>
                </section>
                <section className="right-navbar">
                    <section className="left-right-navbar">
                        <Link to="/company" className='Link'><h3>Q for Company</h3></Link>
                        <Link to="/campus" className='Link'><h3>Q for Campus</h3></Link>
                        <Link to="/school" className='Link'><h3>Q for School</h3></Link>
                        <Link to="/programs" className='Link'><h3>Our Programs</h3></Link>
                    </section>
                    <section className="right-right-navbar">
                        <Button variant="contained">Log In</Button>
                    </section>
                </section>
            </div>
        </div>
    )
}

export default Navbar