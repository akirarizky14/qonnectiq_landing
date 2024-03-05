import Qonnectiq from "../../components/Global/Templates/Qonnectiq/Qonnectiq"
import Photo  from '../../assets/Global/Template/Dashboard.png';
import Photo1 from '../../assets/Home/Hunting/Hunting.png'
import Phase from "../../components/Global/Templates/Phase/Phase";
import fetchData from "./fetchdata";
import Journey from "../../components/Global/Templates/Journey/Journey";
import Pocket from "../../components/Global/Templates/Pocket/Pocket";
import Partner from "../../components/Global/Templates/Partner/Partner";
import Skill from "../../components/Global/Templates/Skill/Skill";

import data from './dataskill.json';

function Company(){
    const slides = [
        {url:Photo},
        {url:Photo1},
        {url:"https://picsum.photos/200/300"},
    ]
    const skillData = Object.values(data);
    return(
        <>
            <Qonnectiq
                title="Qonnectiq for Company"
                desc="All-in-one employee development app streamlines pre-training, training, and post-training, efficiently managing the entire cycle to boost skills, productivity, and company growth."
                slides={slides}
            />
            <Phase fetchdata={fetchData}/>
            <Journey 
                title="Your Complete Training Journey, All in One App!"
                desc="All-In-One Training Journey Unveiled on Your Dashboard!"
                slides={slides}
            />
            <Partner/>
            <Skill 
                title="Elevating Employee Skills through Our Advanced LMS Platform " 
                data={skillData}
            />
            <Pocket/>
        </>
    )
}


export default Company