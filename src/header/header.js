import React, { useState } from 'react';
import "./header.css";
import prev from "./image/up-arrow 4.png";
import next from "./image/up-arrow 3.png";


function Header() {

    const [currentindex, setcurrentindex] = useState(0);
    const [move,setmove]=useState(0)


    // const names = [{name:"barathkumar R"},{name:"hari"},{name:"bharath"},{name:"dinashkumar"}];
    const name = ["barathkumar", "hari", "barth", "dinashkumar", "jai", "kil"];
    const nextslide = () => {
        if (currentindex < name.length - 1) {
            setcurrentindex(currentindex + 1)
            setmove(move+1)
        }
    }

    const preslide = () => {
        if (currentindex > 0) {
            setcurrentindex(currentindex - 1)
            setmove(move-1)
        }
    }


    return (<>
        <div className='header'>
            <div className='header_head' >HTML Task</div>
            <div className='header_section'>
                <div className='header_section_padding'>
                    <div className='header_title'>
                        <h2><span>Distance doesn’t matters for </span><br />
                            OUR TEAM MEMBERS</h2>
                        <p className='header_content'>
                            With Akkenna nearshore software development team,
                            you get access
                            to a talent pool of multi- skilled specialists
                            to plug any skill gaps within your in-house team. With our distributed
                            team, our experts are positioned to a seamless working partnership.
                        </p>
                    </div>

                    <div className='carosal'>
                        {
                            name.map((name, index) => (
                            <div key={index} style={{transform:`translateX(${move* -165}px)`}} className={`${index === currentindex  ? "carosal_name" : "carosal_name_small"} ${index < currentindex && "prev"}`}>
                                <span>{name}</span>
                            </div>))
                        }
                    </div>
                    <div className='button'>
                        <button onClick={preslide}><img src={prev} alt='prev' /></button>
                        <button onClick={nextslide}><img src={next} alt='prev' /></button>
                    </div>

                </div>
            </div>

        </div>
    </>


    )
}

export default Header