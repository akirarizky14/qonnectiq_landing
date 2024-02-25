import Qonnectiq from "../Global/Templates/Qonnectiq/Qonnectiq"
import photo from '../../assets/Global/Template/Dashboard.png'
function Company(){
    return(
        <>
            <Qonnectiq
                title="Qonnectiq for Company"
                desc="All-in-one employee development app streamlines pre-training, training, and post-training, efficiently managing the entire cycle to boost skills, productivity, and company growth."
                image={photo}
            />
        </>
    )
}


export default Company