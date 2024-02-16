import React from "react";
import image4 from "./pic/image 4.png"
import image5 from "./pic/image 5.png"
import { useNavigate } from "react-router";
export const Home = () => {
    const goto = useNavigate()

    return (
        <div className="center">
        <img src={image4} alt="" />
        <div className="container">
            <a onClick={() => goto('/normal')} className="bottom">Normal</a>
        </div>
        <img src={image5} alt="" />
        <div className="container">
        <a onClick={() => goto('/easy')} className="bottom">Easy</a>
        </div>
    </div>
  
    )
}