import '../../../css/Global/Footer/Footer.css';
import { Link } from 'react-router-dom';
import photo from '../../../assets/Global/Navbar/Logo_Qonnectiq_Desktop.png';
import photo1 from '../../../assets/Global/Footer/Maps.png';
function Footer(){
    return(
        <div className="container-footer">
            <div className="top-footer">
                <div className="wrapper-top-footer">
                    <div className="mobile-logo-qonnectiq">
                        <img src={photo} alt="Logo Qonnectiq" />
                    </div>
                    <div className="wrap-mobile-desc">
                        <div className="location-top-footer wrap-top-footer">
                            <div className="title-footer">
                                <h3>Location</h3>
                            </div>
                            <div className="image-top-footer">
                                <img src={photo1} alt="" />
                            </div>
                        </div>
                        <div className="partners-top-footer wrap-top-footer">
                            <div className="title-footer">
                                <h3>Training Partners</h3>
                            </div>
                            <div className="desc-top-footer">
                                <Link className='Link'>Qonnectiq for Company</Link>
                                <Link className='Link'>Qonnectiq for Campus</Link>
                                <Link className='Link'>Qonnectiq for School</Link>
                            </div>
                        </div>
                        <div className="programs-top-footer wrap-top-footer">
                            <div className="title-footer">
                                <h3>Our Programs</h3>
                            </div>
                            <div className="desc-top-footer">
                                <Link className='Link'>Assessment Test</Link>
                                <Link className='Link'>Hard Skill Training</Link>
                                <Link className='Link'>Soft Skill Training</Link>
                                <Link className='Link'>Psychological Consultation</Link>
                                <Link className='Link'>Coaching</Link>
                            </div>
                        </div>
                        <div className="partners-top-footer wrap-top-footer">
                            <div className="title-footer">
                                <h3>Training Partners</h3>
                            </div>
                            <div className="desc-top-footer">
                                <Link className='Link'>admin@qonnectiq.com</Link>
                                <Link className='Link'>+62 813 8080 4008</Link>
                                <Link className='Link'>021 5010 5222</Link>
                                <Link className='Link'>qonnectiq.app | qonnectiq.learning</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-footer">
                <div className="wrapper-bottom-footer">
                    <div className="image-bottom-footer">
                        <img src={photo} alt="Photo" />
                    </div>
                    <div className="cp-bottom-footer">
                        <span>@copyright 2023  |  PT Indigo Sarana Abadi</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer