import '../../../css/Global/Navbar/Navbar.css'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import logo from '../../../assets/Global/Navbar/Logo_Qonnectiq_Desktop.png'
import logoMobile from '../../../assets/Global/Navbar/Logo_Qonnectiq_Mobile.png'
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState  } from 'react'
function Navbar(){
    const [Medium,setisMedium] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    useEffect(()=>{
        const handleResize = () =>{
            setisMedium(window.innerWidth < 1080);
            if (window.innerWidth >= 1080) {
                setShowMenu(false); 
            }
        };
        handleResize();
        
        window.addEventListener('resize',handleResize);
        return()=>{
            window.removeEventListener('resize',handleResize);
        } 
    },[])
    const toogleHamburger = () =>{
        setShowMenu(!showMenu)
    }
    return(
        <div className="container-navbar">
            <div className="wrapper-navbar">
                <section className="left-navbar">
                    <div className="menu-mobile" onClick={toogleHamburger}>
                        <MenuIcon className='hamburger-menu' />
                    </div>
                    <figure>
                        <Link to="/"><img src={Medium ? logoMobile : logo} alt="Logo Qonnectiq" href="/" /></Link>
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
            <section className='menu-mobile-dropdown' style={{display: showMenu ? 'flex' : 'none'}}>
                <Link to="/company" className='Link'><h3>Q for Company</h3></Link>
                <hr />
                <Link to="/campus" className='Link'><h3>Q for Campus</h3></Link>
                <hr />
                <Link to="/school" className='Link'><h3>Q for School</h3></Link>
                <hr/>
                <Link to="/programs" className='Link'><h3>Our Programs</h3></Link>
            </section>
        </div>
    )
}

export default Navbar