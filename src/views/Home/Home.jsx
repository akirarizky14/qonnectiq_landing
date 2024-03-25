
import Carousel from "../../components/Home/Carousel/Carousel"
import Events from "../../components/Home/Events/Events"
import Programs from "../../components/Home/Programs/Programs"
import SlideShow from "../../components/Home/SlideShow/SlideShow"
import Solution from "../../components/Home/Solution/Solution"
import Hunting from "../../components/Home/Hunting/Hunting"
function Home(){
    return(
        <>
            <Carousel/>
            <SlideShow/>
            {/* <Programs/> */}
            <Solution/>
            {/* <Events/> */}
            <Hunting/>
        </>
    )
}

export default Home