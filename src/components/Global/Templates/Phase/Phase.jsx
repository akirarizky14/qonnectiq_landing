import '../../../../css/Global/Template/Phase/Phase.css'
import { useState ,useEffect} from 'react';
import fetchdata from './fetchdata';
import React from 'react';
const Buttona = ({ onClick, text, active }) => {
    return (
      <button className={active ? 'active' : ''} onClick={onClick}>
        {text}
      </button>
    );
};

function Phase() {
    const [data, setData] = useState({});
    const [activeButton, setActiveButton] = useState('Pre - Training Phase'); // Menambahkan state untuk menandai tombol mana yang aktif
    const [windowWidth,setwindowWidth] = useState(window.innerWidth);
    const [showDescription, setShowDescription] = useState(false);

    const handleResize = () =>{
        setwindowWidth(window.innerWidth)
    }

    useEffect(() => {
        const newData = fetchdata(activeButton);
        setData(newData);

        activeButton === 'Pre - Training Phase'
        setShowDescription(true);
        
        window.addEventListener('resize',handleResize);
        return () =>{
            window.removeEventListener('resize',handleResize)
        }
    }, [activeButton]);

    const handleClick = (category) => {
        if (activeButton === category) {
            setShowDescription(true); // Jika tombol yang diklik adalah yang sedang aktif, tampilkan deskripsi
        } else {
            setActiveButton(category);
            setShowDescription(false); // Jika tombol yang diklik bukan yang sedang aktif, sembunyikan deskripsi
        }
    };
    
    return (
        <div className="container-phase">
            <div className="wrapper-phase">
                <section className="bottom-phase">
                    <div className='button-bottom-phase'>
                        {['Pre - Training Phase', 'Training Phase', 'Post - Training Phase'].map((phase, index) => (
                            <React.Fragment key={index}>
                                <Buttona onClick={() => handleClick(phase)} text={phase} active={activeButton === phase} />
                                {activeButton === phase && showDescription && (
                                    <div className='wrapper-description-bottom-phase' style={{display: windowWidth >= 1080 ? 'none' : 'block'}}>
                                        <h2>{data.jargon}</h2>
                                        <ul className='dot'>
                                            {data && Object.values(data.data).map((item, index) => (
                                                <li key={index}>
                                                    <h3>{item.title}</h3>
                                                </li>
                                            ))}
                                        </ul>
                                        <h2>{data.jargon2}</h2>
                                        <ul className='dot'>
                                            {data && Object.values(data.data2).map((item, index) => (
                                                <li key={index}>
                                                    <h3>{item.title}</h3>
                                                </li>
                                            ))}
                                        </ul>
                                        <h2>{data.jargon3}</h2>
                                        <ul className='dot'>
                                            {data && Object.values(data.data3).map((item, index) => (
                                                <li key={index}>
                                                    <h3>{item.title}</h3>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="line-bottom-phase" style={{display: windowWidth <= 1080 ? 'none' : 'block'}}>
                        <hr />
                    </div>
                    <div className="description-bottom-phase" style={{display: windowWidth <= 1080 ? 'none' : 'block'}}>
                        {(!data || Object.keys(data).length === 0) ? (
                            <p>No data available</p>
                        ) : (
                            <div className='wrapper-description-bottom-phase'>
                                <h2>{data.jargon}</h2>
                                <ul className='dot'>
                                    {data && Object.values(data.data).map((item, index) => (
                                        <li key={index}>
                                            <h3>{item.title}</h3>
                                        </li>
                                    ))}
                                </ul>
                                <h2>{data.jargon2}</h2>
                                <ul className='dot'>
                                    {data && Object.values(data.data2).map((item, index) => (
                                        <li key={index}>
                                            <h3>{item.title}</h3>
                                        </li>
                                    ))}
                                </ul>
                                <h2>{data.jargon3}</h2>
                                <ul className='dot'>
                                    {data && Object.values(data.data3).map((item, index) => (
                                        <li key={index}>
                                            <h3>{item.title}</h3>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Phase