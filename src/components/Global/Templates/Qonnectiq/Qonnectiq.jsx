import '../../../../css/Global/Template/Qonnectiq/Qonnectiq.css'
import React, { useState, useEffect } from 'react';
import '../../../../assets/Global/Template/Dashboard.png'
import Photo  from '../../../../assets/Global/Template/Dashboard.png';
import Photo1 from '../../../../assets/Home/Hunting/Hunting.png'
import ReactCardSlider from 'react-card-slider-component';
function Qonnectiq(props) {
    const slides = [
        {image:{Photo}},
        {image:{Photo1}},
        {image:"https://picsum.photos/200/300"},
    ]
    return (
        <div className="container-qonnectiq">
            <div className="wrapper-qonnectiq">
                <div className="left-qonnectiq">
                    <div className="title-left-qonnectiq">
                        <h1>{props.title}</h1>
                    </div>
                    <div className="desc-left-qonnectiq">
                        <h3>{props.desc}</h3>
                    </div>
                </div>
                <div className="right-qonnectiq">
                    {/* <div className="image-right-qonnectiq">
                        <img src="" alt="" />
                    </div> */}
                    <ReactCardSlider slides={slides}/>
                </div>
            </div>
        </div>
    );
}

export default Qonnectiq;