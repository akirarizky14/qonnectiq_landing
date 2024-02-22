
import Carousel from "../../components/Home/Carousel/Carousel"
import Programs from "../../components/Home/Programs/Programs"
import SlideShow from "../../components/Home/SlideShow/SlideShow"
import Solution from "../../components/Home/Solution/Solution"
function Home(){
    return(
        <>
            <Carousel/>
            <SlideShow/>
            <Programs/>
            <Solution/>
        </>
    )
}

export default Home