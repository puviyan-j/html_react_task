import React, { useEffect, useState } from 'react'
import "./react.css"
import img6 from "./image/A man developing website in laptop using coding 1.png"
import img7 from "./image/A women working on UI UX Design in laptop 1 (1).png";
import img8 from "./image/software development in laptop using coding langua 1.png";

function Reacts() {
    const [text, settext] = useState("Animated Explainer video");
    const [cont, setcont] = useState([]);



    const content = [
        {
            img: img6,
            cat: "Animated Explainer video",
            heading: "Lorem Ipsum suit",
            text: "Our development process is agile and flexible, allowing for constant communication and the ability to adapt to changing requirements. "
        },
        {
            img: img7,
            cat: "Animated Explainer video",
            heading: "Lorem Ipsum suit",
            text: "Our development process is agile and flexible, allowing for constant communication and the ability to adapt to changing requirements. "
        },
        {
            img: img8,
            cat: "Animated Explainer video",
            heading: "Lorem Ipsum suit",
            text: "Our development process is agile and flexible, allowing for constant communication and the ability to adapt to changing requirements. "
        },
        {
            img: img6,
            cat: "Animated Explainer video",
            heading: "Lorem Ipsum suit",
            text: "Our development process is agile and flexible, allowing for constant communication and the ability to adapt to changing requirements. "
        },
        {
            img: img7,
            cat: "Whiteboard Video",
            heading: "Lorem Ipsum suit",
            text: "Our development process is agile and flexible, allowing for constant communication and the ability to adapt to changing requirements. "
        },
        {
            img: img8,
            cat: "Whiteboard Video",
            heading: "Lorem Ipsum suit",
            text: "Our development process is agile and flexible, allowing for constant communication and the ability to adapt to changing requirements. "
        },
        {
            img: img6,
            cat: "Whiteboard Video",
            heading: "Lorem Ipsum suit",
            text: "Our development process is agile and flexible, allowing for constant communication and the ability to adapt to changing requirements. "
        },
        {
            img: img7,
            cat: "Whiteboard Video",
            heading: "Lorem Ipsum suit",
            text: "Our development process is agile and flexible, allowing for constant communication and the ability to adapt to changing requirements. "
        },
        {
            img: img8,
            cat: "Live Video Production",
            heading: "Lorem Ipsum suit",
            text: "Our development process is agile and flexible, allowing for constant communication and the ability to adapt to changing requirements. "
        },
        {
            img: img6,
            cat: "Live Video Production",
            heading: "Lorem Ipsum suit",
            text: "Our development process is agile and flexible, allowing for constant communication and the ability to adapt to changing requirements. "
        },
        {
            img: img7,
            cat: "Live Video Production",
            heading: "Lorem Ipsum suit",
            text: "Our development process is agile and flexible, allowing for constant communication and the ability to adapt to changing requirements. "
        },
        {
            img: img8,
            cat: "Live Video Production",
            heading: "Lorem Ipsum suit",
            text: "Our development process is agile and flexible, allowing for constant communication and the ability to adapt to changing requirements. "
        },

    ];
    useEffect(() => {
        const res = content.filter(res => res.cat === text)
        setcont(res)

    }, [text])

    return (
        <div className='react_page'>
            <h1>React Task</h1>
            <div className='react_page_heading'>
                <h3>
                    Our latest and greatest explainer videos
                </h3>
                <p>
                    You can use our digital storytelling expertise to explain your ideas, product or service to the world. Watch some of our successful explainer video production projects.
                </p>
            </div>
            <div className='react_section'>
                <ul>
                    <li className={text === "Animated Explainer video" ? "selected":""} onClick={() => (settext("Animated Explainer video"))}>Animated Explainer <br /> Video</li>
                    <li className={text === "Whiteboard Video" ? "selected":""} onClick={() => (settext("Whiteboard Video"))}>Whiteboard Video</li>
                    <li className={text === "Live Video Production" ? "selected":""} onClick={() => (settext("Live Video Production"))}>Live Video Production</li>
                </ul>
            </div>
            <div className='react_slide'>
                {
                    cont.map((cont,index) => (
                        <div key={index} className='react_slide_section'>
                            <div className='react_slide_view'>
                                <img src={cont.img} alt={cont.heading} />
                                <h4>{cont.heading}</h4>
                            </div>
                            <div className='react_slide_content-condent'>
                                <h4>{cont.heading}</h4>
                                <p>{cont.text}</p>
                                <button> Learn More</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Reacts