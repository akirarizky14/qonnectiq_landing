import React, { useEffect, useState } from 'react';
import '../../../../css/Global/Template/Skill/Skill.css';
import shuffle from '../../../../assets/Global/Template/shuffle.png';
function Skill({ data, title }) {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        setDatas(data);
    }, [data]);
    return (
        <div className="container-skill">
            <div className="wrapper-skill">
                <div className="title-skill">
                    <h1>{title}</h1>
                </div>
                <div className="description-skill">
                    {datas && datas.map((item, index) => (
                        <div className='wrapper-desc-skill' key={index}>
                            <div className="list-desc-skill">
                                <img src={shuffle} alt="Shuffle" />
                            </div>
                            <div className="desc-skill">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skill;
