import '../../css/Home/Hunting/Hunting.css'
import photo from '../../assets/Home/Hunting/Hunting.png'
import { Button } from '@mui/material'
function Hunting(){
    return(
        <div className="container-hunting">
            <div className="wrapper-hunting">
                <div className="left-hunting">
                    <img src={photo} alt="Photo" />
                </div>
                <div className="right-hunting">
                    <div className="wrapper-right-hunting">
                        <div className="title-right-hunting">
                            <h1>We're on the Hunt for 100 Professional Trainers Across Every Field!</h1>
                        </div>
                        <div className="button-right-hunting">
                            <Button variant='contained'>Join Us</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hunting