import '../../../css/Home/Carousel/Carousel.css'
import Photo from '../../../assets/Home/Carousel/Carousel-Home.png'
import Button from '@mui/material/Button'
function Carousel(){
    return(
        <div className="container-carousel-home">
            <div className="wrapper-carousel-home">
                <section className="left-carousel-home">
                    <section className="wrapper-left-carousel-home">
                        <h1>Innovative Training Solutions and Next Generation Learning Experiences</h1>
                        <div className="button-carousel-left-home">
                            <Button variant="contained">More Info</Button>
                        </div>
                    </section>
                </section>
                <section className="right-carousel-home">
                    <img src={Photo} alt="Carousel Photo" />
                </section>
            </div>
        </div>
    )
}

export default Carousel