import '../../../css/Home/SlideShow/SlideShow.css'
import photo from '../../../assets/Home/SlideShow/photo-dump.png'
function SlideShow(){
    return(
        <div className="container-slideshow">
            <div className="wrapper-slideshow">
                <div className="left-button-slideshow">
                    <div className="wrapper-left-button-slideshow">
                        <h1>{'<'}</h1>
                    </div>
                </div>
                <div className="middle-card-slideshow">
                    <div className="wrapper-card-slideshow">
                        <div className="left-wrapper-card-slideshow">
                            <div className="image-left-wrapper-card-slideshow">
                                <img src={photo} alt="" />
                            </div>
                        </div>
                        <div className="middle-wrapper-card-slideshow">
                            <div className="wrapper-middle-wrapper-card-slideshow">
                                <div className="top-middle-wrapper-card-slideshow">
                                    <h3>webinar</h3>
                                </div>
                                <div className="middle-middle-wrapper-card-slideshow">
                                    <h1>Transitioning from University to the Workplace</h1>
                                </div>
                                <div className="bottom-middle-wrapper-card-slideshow">
                                    <h4>Galuh Saraswati, M.Psi., Psikolog</h4>
                                </div>
                            </div>
                        </div>
                        <div className="right-wrapper-card-slideshow">
                            <div className="wrapper-right-wrapper-card-slideshow">
                                <div className="left-right-wrapper-card-slideshow">
                                    <hr />
                                </div>
                                <div className="right-right-wrapper-card-slideshow">
                                    <div className="price-right-right-wrapper-card-slideshow">
                                        <h1>Gratis</h1>
                                    </div>
                                    <div className="date-right-right-wrapper-card-slideshow">
                                        
                                        <h3>11 Desember 2023</h3>
                                    </div>
                                    <div className="button-right-right-wrapper-card-slideshow">
                                        <h4>Daftar Webinar</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-button-slideshow">
                    <div className="wrapper-left-button-slideshow">
                        <h1>{'>'}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlideShow