import Qonnectiq from "../../components/Global/Templates/Qonnectiq/Qonnectiq"
import Photo  from '../../assets/Global/Template/Dashboard.png';
import Photo1 from '../../assets/Home/Hunting/Hunting.png'
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
        </>
    )
}


export default School