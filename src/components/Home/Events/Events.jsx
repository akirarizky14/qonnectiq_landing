import React from 'react'
import '../../../css/Home/Events/Events.css'
import CardPrograms from '../../Global/CardPrograms/CardPrograms'
import photoDump from '../../../assets/Home/Programs/dump-programs.png'
function Events() {
  return (
    <div className="container-events">
      <div className="wrapper-events">
        <div className="header-events">
          <h1>Upcoming Events</h1>
        </div>
        <div className="content-events">
          <div className="wrapper-content-events">
            <CardPrograms 
              title="Leadership Skills Assessments Test"
              desc="Evaluate an individual's leadership strengths and development areas."
              price="200.000,-"
              free="GRATIS"
              image={photoDump}
            />
            <CardPrograms 
              title="Leadership Skills Assessments Test"
              desc="Evaluate an individual's leadership strengths and development areas."
              price="200.000,-"
              free="GRATIS"
              image={photoDump}
            />
            <CardPrograms 
              title="Leadership Skills Assessments Test"
              desc="Evaluate an individual's leadership strengths and development areas."
              price="200.000,-"
              free="GRATIS"
              image={photoDump}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events