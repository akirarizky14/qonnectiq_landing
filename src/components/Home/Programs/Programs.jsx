import '../../../css/Home/Programs/Programs.css'
import ButtonCategories from './ButtonCategories'
import CardPrograms from '../../Global/CardPrograms/CardPrograms'
import dummyPhoto from '../../../assets/Home/Programs/dump-programs.png'
import Button from '@mui/material/Button';
function Programs() {
  return (
    <div className="container-programs">
        <div className="wrapper-programs">
            <div className="top-programs">
                <div className="title-top-rpograms">
                    <h1>Let’s Join Our Programs</h1>
                </div>
                <div className="categories-top-programs">
                    <ButtonCategories title="Assessment test"/>
                    <ButtonCategories title="Hard Skills Training"/>
                    <ButtonCategories title="Soft Skills Training"/>
                    <ButtonCategories title="Psychological Consultation"/>
                    <ButtonCategories title="Coaching"/>
                </div>
            </div>
            <div className="middle-programs">
                <div className="wrapper-middle-programs">
                    <CardPrograms image={dummyPhoto} 
                    title="Leadership Skills Assessments Test" 
                    desc="Evaluate an individual's leadership strengths and development areas." 
                    price="RP299.000,-"
                    free="GRATIS"
                    />
                    <CardPrograms image={dummyPhoto} 
                    title="Leadership Skills Assessments Test" 
                    desc="Evaluate an individual's leadership strengths and development areas." 
                    price="RP299.000,-"
                    free="GRATIS"
                    />
                    <CardPrograms image={dummyPhoto} 
                    title="Leadership Skills Assessments Test" 
                    desc="Evaluate an individual's leadership strengths and development areas." 
                    price="RP299.000,-"
                    free="GRATIS"
                    />
                    <CardPrograms image={dummyPhoto} 
                    title="Leadership Skills Assessments Test" 
                    desc="Evaluate an individual's leadership strengths and development areas." 
                    price="RP299.000,-"
                    free="GRATIS"
                    />
                    <CardPrograms image={dummyPhoto} 
                    title="Leadership Skills Assessments Test" 
                    desc="Evaluate an individual's leadership strengths and development areas." 
                    price="RP299.000,-"
                    free="GRATIS"
                    />
                    <CardPrograms image={dummyPhoto} 
                    title="Leadership Skills Assessments Test" 
                    desc="Evaluate an individual's leadership strengths and development areas." 
                    price="RP299.000,-"
                    free="GRATIS"
                    />
                </div>
            </div>
            <div className="bottom-programs">
                <Button variant="contained" className="wrapper-bottom-programs">
                    See More
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Programs