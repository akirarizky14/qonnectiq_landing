import Qonnectiq from "../../components/Global/Templates/Qonnectiq/Qonnectiq"
import Photo  from '../../assets/Global/Template/Dashboard.png';
import Photo1 from '../../assets/Home/Hunting/Hunting.png'
function Campus(){
    const slides = [
        {url:Photo},
        {url:Photo1},
        {url:"https://picsum.photos/200/300"},
    ]
    return(
        <>
            <Qonnectiq
                title="Qonnectiq for Campus"
                desc="Streamlines student development, covering pre-training, training, post-training, all in one app, for enhanced academic and career success."
                slides={slides}
            />
        </>
    )
}


export default Campus