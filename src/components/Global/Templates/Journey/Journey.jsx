import '../../../../css/Global/Template/Journey/Journey.css'
import React, { useState, useEffect } from 'react';
import '../../../../assets/Global/Template/Dashboard.png'
import { Button } from '@mui/material';
import ImageSlider from './ImageSlider';
function Journey(props) {
    return (
        <div className="container-journey">
            <div className="wrapper-journey">
                <div className="top-journey">
                    <h1>{props.title}</h1>
                </div>
                <div className="bottom-journey">
                    <div className="left-journey">
                        <div className="image-left-journey">
                            <ImageSlider slides={props.slides} />
                        </div>
                    </div>
                    <div className="right-journey">
                        <div className="desc-right-journey">
                            <h3>{props.desc}</h3>
                        </div>
                        <div className="button-right-journey">
                            <Button className='Button' variant='contained'>All About the App</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Journey;