import '../../../css/Home/Solution/Solution.css'
import { useState ,useEffect} from 'react';
import fetchdata from './fetchdata';
import { Button } from '@mui/material';
const Buttona = ({ onClick, text, active }) => {
    return (
      <button className={active ? 'active' : ''} onClick={onClick}>
        {text}
      </button>
    );
};

function Solution() {
    const [data, setData] = useState({});
    const [activeButton, setActiveButton] = useState('Campus'); // Menambahkan state untuk menandai tombol mana yang aktif
    const [windowWidth,setwindowWidth] = useState(window.innerWidth);
    const [showDescription, setShowDescription] = useState(false);

    const handleResize = () =>{
        setwindowWidth(window.innerWidth)
    }

    useEffect(() => {
        const newData = fetchdata(activeButton);
        setData(newData);

        activeButton === 'Campus'
        setShowDescription(true);
        
        window.addEventListener('resize',handleResize);
        return () =>{
            window.removeEventListener('resize',handleResize)
        }
    }, [activeButton]);

    const handleClick = (category) => {
        setActiveButton(category);
        setShowDescription(false);
    };
    return (
        <div className="container-solution">
            <div className="wrapper-solution">
                <section className="top-solution">
                    <h1>Your Ultimate Technology Partner in Innovative Training Solutions</h1>
                </section>
                <section className="bottom-solution">
                    <div className='button-bottom-solution'>
                        <Buttona onClick={() => handleClick('Campus')} text="Campus" active={activeButton === 'Campus'} />
                            {activeButton === 'Campus' && showDescription && (
                                <div className='wrapper-description-bottom-solution' style={{display: windowWidth >= 1080 ? 'none' : 'block'}}>
                                    <h2 >{data.jargon}</h2>
                                    <ul className='dot'>
                                        {data &&
                                            Object.values(data.data).map((item, index) => (
                                                <li key={index}>
                                                    <h3>{item.title}</h3>
                                                    <p>{item.description}</p>
                                                </li>
                                            ))}
                                    </ul>
                                    <div className="Button-more">
                                        <Button variant="contained">Get to Know More</Button>
                                        <Button variant="contained">Training Framework</Button>
                                    </div>
                                </div>
                            )}
                        <Buttona onClick={() => handleClick('School')} text="School" active={activeButton === 'School'} />
                            {activeButton === 'School' && showDescription && (
                                    <div className='wrapper-description-bottom-solution' style={{display: windowWidth >= 1080 ? 'none' : 'block'}}>
                                        <h2 >{data.jargon}</h2>
                                        <ul className='dot'>
                                            {data &&
                                                Object.values(data.data).map((item, index) => (
                                                    <li key={index}>
                                                        <h3>{item.title}</h3>
                                                        <p>{item.description}</p>
                                                    </li>
                                                ))}
                                        </ul>
                                        <div className="Button-more">
                                            <Button variant="contained">Get to Know More</Button>
                                            <Button variant="contained">Training Framework</Button>
                                        </div>
                                    </div>
                                )}
                        <Buttona onClick={() => handleClick('Company')} text="Company" active={activeButton === 'Company'} />
                        {activeButton === 'Company' && showDescription && (
                                <div className='wrapper-description-bottom-solution' style={{display: windowWidth >= 1080 ? 'none' : 'block'}}>
                                    <h2 >{data.jargon}</h2>
                                    <ul className='dot'>
                                        {data &&
                                            Object.values(data.data).map((item, index) => (
                                                <li key={index}>
                                                    <h3>{item.title}</h3>
                                                    <p>{item.description}</p>
                                                </li>
                                            ))}
                                    </ul>
                                    <div className="Button-more">
                                        <Button variant="contained">Get to Know More</Button>
                                        <Button variant="contained">Training Framework</Button>
                                    </div>
                                </div>
                            )}
                    </div>
                    <div className="line-bottom-solution" style={{display: windowWidth <= 1080 ? 'none' : 'block'}}>
                        <hr />
                    </div>
                    <div className="description-bottom-solution" style={{display: windowWidth <= 1080 ? 'none' : 'block'}}>
                        {(!data || Object.keys(data).length === 0) ? (
                            <p>No data available</p>
                        ) : (
                            <div className='wrapper-description-bottom-solution'>
                                <h2 >{data.jargon}</h2>
                                <ul className='dot'>
                                    {data &&
                                        Object.values(data.data).map((item, index) => (
                                            <li key={index}>
                                                <h3>{item.title}</h3>
                                                <p>{item.description}</p>
                                            </li>
                                        ))}
                                </ul>
                                <div className="Button-more">
                                    <Button variant="contained">Get to Know More</Button>
                                    <Button variant="contained">Training Framework</Button>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Solution