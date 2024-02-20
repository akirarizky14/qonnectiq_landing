import React from 'react'
import '../../../css/Home/Programs/ButtonCategories.css'
function ButtonCategories(props) {
  return (
    <div className="container-button-categories">
        <span>{props.title}</span>
    </div>
  )
}

export default ButtonCategories