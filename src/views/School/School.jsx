import Qonnectiq from "../../components/Global/Templates/Qonnectiq/Qonnectiq"
import Photo  from '../../assets/Global/Template/Dashboard.png';
import Photo1 from '../../assets/Home/Hunting/Hunting.png'
import Phase from "../../components/Global/Templates/Phase/Phase";
import fetchData from "./fetchdata";
import Pocket from "../../components/Global/Templates/Pocket/Pocket";
import Skill from "../../components/Global/Templates/Skill/Skill";
import data from './dataskill.json';

function School(){
    const slides = [
        {url:Photo},
        {url:Photo1},
        {url:"https://picsum.photos/200/300"},
    ]
    const skillData = Object.values(data);
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
            <Skill
                title="Empower Seamless Learning for a Brighter Future with Our Innovative LMS." 
                data={skillData}
            />
            <Pocket/>
        </>
    )
}


export default School