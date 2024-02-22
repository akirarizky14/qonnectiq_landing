import React from 'react'
import '../../../css/Global/CardPrograms/CardPrograms.css'
function CardPrograms(props) {
  return (
    <div className="container-cardprograms">
      <div className="wrapper-cardprograms">
        <div className="top-cardprograms">
          <img src={props.image} alt="" />
        </div>
        <div className="middle-cardprograms">
          <h3>{props.title}</h3>
          <h4>{props.desc}</h4>
        </div>
        <div className="bottom-cardprograms">
          <h2>RP{props.price}</h2>
          <h5>{props.free}</h5>
        </div>
      </div>
    </div>
  )
}

export default CardPrograms