import React from 'react'
import '../../../../css/Global/Template/Pocket/Pocket.css'
import Photo from '../../../../assets/Global/Template/App.png'
import Google from '../../../../assets/Global/Template/Google.png'
import AppStore from '../../../../assets/Global/Template/AppStore.png'

function Pocket() {
  return (
    <div className="container-pocket">
        <div className="wrapper-pocket">
            <div className="left-pocket">
                <img src={Photo} alt="Photo" />
            </div>
            <div className="right-pocket">
                <div className="wrapper-right-pocket">
                    <h1>Your Training Companion Anywhere, Anytime - Now in Your Pocket!</h1>
                    <div className="app-right-pocket">
                        <img src={Google} alt="Play Store" />
                        <img src={AppStore} alt="App Store" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pocket