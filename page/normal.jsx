import React, { useEffect, useRef, useState } from "react";
import image4 from "./pic/image 4.png"
import image6 from "./pic/image 6.png"
export const Normal = () => {
let [round,setround] = useState(0)

let [list,setlist] = useState([]);
let [life,setLife] = useState(11)
const msg1_100 = useRef()
const msg2_100 = useRef()
const msg3_100 = useRef()


useEffect(()=>{
    setLife(life - 1)
},[round])

const randomnum = () => {
    let r = Math.floor(Math.random() * 100) + 1;
    console.log('random ' + r)
    return r
  };

const [random, setRandom] = useState(randomnum)



const playN100= () => {
    console.log(round) 
    console.log(list)
    if (round == 10) {
       
        msg2_100.current.textContent = "เหลืออีก 0 :  รอบ ";
        msg1_100.current.textContent += " Game Over. The number was " + random + ".";
        alert("You've reached the maximum number of guesses. Please restart the game.");
        return; 

    }

    const user_guess = parseInt(document.getElementById('guess100').value ); 
    if (user_guess < 1 || user_guess > 100) {
        alert("กรุณาใส่เลขระหว่าง 1-100"); 
    } else {
        list.push(user_guess);
        setround(round + 1);

        
        if (user_guess < random) {
            msg1_100.current.textContent = "Your guess is too low";
            msg3_100.current.textContent = "เลขที่ทาย : " + list.join(',');
        } else if (user_guess > random) {
            msg1_100.current.textContent = "Your guess is too high";
            msg3_100.current.textContent = "เลขที่ทาย : " + list.join(',');
        } else {
            msg1_100.current.textContent = "Congratulations! You've guessed the number!";
            msg3_100.current.textContent = "เลขที่ทาย: " + list.join(',');
        }
        
        msg2_100.current.textContent = "เหลืออีก  : " + life + " รอบ";
        
        //if (round = max_guesses_100) {
         //  document.getElementById('msg1_100').textContent += " Game Over. The number was " + random + ".";
        //}
    }
}

    return (
        <div>
            <div className="center">
        <img className="n1" src={image4} alt=""/>
        <div className="container">
            <a href="./normal" className="bottom">Normal</a>
        </div>
        <p className="number">1-100</p>
        <form className="ct1">
            <input type="number" id="guess100" className="input1 text-center"/>
        </form>
        <div className="ct1">
            <button onClick={playN100} id="mybtns" className="bottomcheck">Random</button>
        </div>
        <div className="ct2">
            <p className="ct2" ref={msg1_100}></p>  
            <p className="ct2" ref={msg2_100}></p> 
            <p className="ct2" ref={msg3_100}></p> 
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