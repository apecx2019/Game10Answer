import React, { useEffect, useRef, useState } from "react";
import image5 from "./pic/image 5.png"
import image6 from "./pic/image 6.png"
export const Easy = () => {
let [round,setround] = useState(0)

let [list,setlist] = useState([]);
let [life,setLife] = useState(11)
const msg1_50 = useRef()
const msg2_50 = useRef()
const msg3_50 = useRef()


useEffect(()=>{
    setLife(life - 1)
},[round])

const randomnum = () => {
    let r = Math.floor(Math.random() * 50) + 1;
    console.log('random ' + r)
    return r
  };

const [random, setRandom] = useState(randomnum)



const playN50= () => {
    console.log(round) 
    console.log(list)
    if (round == 10) {
       
        msg2_50.current.textContent = "เหลืออีก 0 :  รอบ ";
        msg1_50.current.textContent += " Game Over. The number was " + random + ".";
        alert("You've reached the maximum number of guesses. Please restart the game.");
        return; 

    }

    const user_guess = parseInt(document.getElementById('guess50').value ); 
    if (user_guess < 1 || user_guess > 50) {
        alert("กรุณาใส่เลขระหว่าง 1-50"); 
    } else {
        list.push(user_guess);
        setround(round + 1);

        
        if (user_guess < random) {
            msg1_50.current.textContent = "Your guess is too low";
            msg3_50.current.textContent = "เลขที่ทาย : " + list.join(',');
        } else if (user_guess > random) {
            msg1_50.current.textContent = "Your guess is too high";
            msg3_50.current.textContent = "เลขที่ทาย : " + list.join(',');
        } else {
            msg1_50.current.textContent = "Congratulations! You've guessed the number!";
            msg3_50.current.textContent = "เลขที่ทาย: " + list.join(',');
        }
        
        msg2_50.current.textContent = "เหลืออีก  : " + life + " รอบ";
        
        //if (round = max_guesses_100) {
         //  document.getElementById('msg1_100').textContent += " Game Over. The number was " + random + ".";
        //}
    }
}

    return (
        <div>
            <div className="center">
        <img className="n1" src={image5} alt=""/>
        <div className="container">
            <a href="./easy" className="bottom">Easy</a>
        </div>
        <p className="number">1-50</p>
        <form className="ct1">
            <input type="number" id="guess50" className="input1 text-center"/>
        </form>
        <div className="ct1">
            <button onClick={playN50} id="mybtns" className="bottomcheck">Random</button>
        </div>
        <div className="ct2">
            <p className="ct2" ref={msg1_50}></p>  
            <p className="ct2" ref={msg2_50}></p> 
            <p className="ct2" ref={msg3_50}></p> 
       </div>
        <div className="home">
            <a href="/">
                <img src={image6} alt=""/>
            </a>
        </div>
    </div>
        </div>
    )
}