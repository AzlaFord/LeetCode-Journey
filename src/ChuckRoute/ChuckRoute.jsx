import { useEffect, useState } from "react"
import "./ChuckRoute.css"
import chuckImg from "../assets/chuck-norris1.jpg";

function ChuckRoute(){

    const [qoute,setqoute] = useState("")

    useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
        .then(res => res.json())
        .then(data => {
        console.log(data.value)
        setqoute(data.value)
        });
    }, []); 

    return (
        <>
            <div className="chuckblock">
                <img src={chuckImg} alt="Chuck Norris" className="chucknor" />
                <div className="ChuckSays">{qoute}</div>
            </div>
        </>)
}

export default ChuckRoute