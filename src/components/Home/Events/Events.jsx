import React from 'react'
import '../../../css/Home/Events/Events.css'
import CardPrograms from '../../Global/CardPrograms/CardPrograms'
function Events() {
  return (
    <div className="container-events">
      <div className="wrapper-events">
        <div className="header-events">
          <h1>Upcoming Events</h1>
        </div>
        <div className="content-events">
          <CardPrograms/>
        </div>
      </div>
    </div>
  )
}

export default Events