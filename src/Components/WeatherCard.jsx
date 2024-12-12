import { useState } from "react"

const WeatherCard = (props) => {
     const[background, setBackground]=useState(false);

  return (
    <div className={!background ? "bg-black text-white py-2 px-4" : "bg-red-400"}>
        <p><span className="text-blue-400 font-bold">Temperature :</span> {props.temperature}</p>
        <h1><span className="text-blue-400 font-bold">City :  </span> {props.city}</h1>
        <p><span className="text-blue-400 font-bold">Country :</span> {props.country}</p>
        <p><span className="text-blue-400 font-bold">Winter : </span> {props.winter}</p>
        <p><span className="text-blue-400 font-bold">Summer :  </span>{props.summer}</p>
    </div>
  )
}

export default WeatherCard