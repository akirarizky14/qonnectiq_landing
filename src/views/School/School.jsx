import Qonnectiq from "../../components/Global/Templates/Qonnectiq/Qonnectiq"
import Photo  from '../../assets/Global/Template/Dashboard.png';
import Photo1 from '../../assets/Home/Hunting/Hunting.png'
import Phase from "../../components/Global/Templates/Phase/Phase";
import fetchData from "./fetchdata";
import Pocket from "../../components/Global/Templates/Pocket/Pocket";
function School(){
    const slides = [
        {url:Photo},
        {url:Photo1},
        {url:"https://picsum.photos/200/300"},
    ]
    return(
        <>
            <Qonnectiq
                title="Qonnectiq for School"
                desc="Elevate students' paths to dream college majors with complete training from pre training, training to post training, all in one app."
                slides={slides}
            />
            <Phase 
                fetchdata = {fetchData}
            />
            <Pocket/>
        </>
    )
}


export default School