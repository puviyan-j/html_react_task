import React, { useState } from 'react';
import "./main.css"
import img1 from "./image/Mask group.png";
import img2 from "./image/Mask group (1).png";
import img3 from "./image/Mask group (2).png";
import img4 from "./image/Mask group.png";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";

// HiArrowLongRight
function Main() {

    const [add ,setadd]=useState(0);
    const [arrow,setarrow]=useState(true)
    const slide = [
        {
            img: img1,
            title: "2D Animated Explainer Videos",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
        },
        {
            img: img2,
            title: "Motion Graphics Videos",
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
        },
        {
            img: img3,
            title: "3D Animated Explainer Videos",
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
        },
        {
            img: img4,
            title: "Motion Graphics Videos",
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
        },
        {
            img: img3,
            title: "Motion Graphics Videos",
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
        }];

        const increment =()=>{
            if(add< slide.length-3){
               setadd(add+1)
               setarrow(true)
            }

            if(add === slide.length-4){
                setarrow(false)
            }
        }
        const decrement =()=>{
            if(add > 0){
                setadd(add-1)
                setarrow(false)}

                if(add ===1 ){ 
                    setarrow(true)}
        }
        
    



    return (
        <div className='main_div'>
            <div className='main_header'>
                <h2>
                    What type of explainer video you need?
                </h2>
                <p>
                    A story could be told in multiple
                    ways so does an explainer video.
                    Based on the complexity of the subject,
                    messaging style, audience persona, brand identity and budget, we offer 3 broad categories of explainer videos.
                </p>
            </div>
            <div className='main_slide'>
                {
                    slide.map((slide,index) => (


                        <div key={index} className='main_slider' style={{transform:`translateX(${add* -107}%)`}}>

                            <div main="main_slider_image">
                                <img  className="main_slider_img"src={slide.img} alt={"mainslide"} />
                            </div>
                            <div className='main_slide_title'>
                                <h3>{slide.title}</h3>
                                <p>{slide.content}</p>
                            </div>


                        </div>
                    ))
                }
            </div>
            <div className='main_button'>
                <button onClick={increment}><HiArrowLongLeft className={`leftarrow ${arrow ?"left":"right"}`}/></button>
                <button onClick={decrement}><HiArrowLongRight className={`rightarrow ${arrow ?"right":"left"}`} /> </button>
            </div>

        </div>
    )
}

export default Main