import { useState } from "react"

const Counter = () => {
   const [add, setAdd]=useState(0)
  return (
    <div className="text-center">
         <p className="text-center">{add}</p>
         <div className="flex justify-center gap-6">
      <button className="bg-blue-400 py-1 px-3 text-center capitalize font-semibold text-white rounded-md" onClick={() => setAdd(prevAdd => prevAdd + 10)}>increment</button>
      <button className="bg-yellow-400 py-1 px-3 text-center capitalize font-semibold text-white rounded-md" onClick={() => setAdd(prevAdd => prevAdd - 5)}>decrement</button>
      <button className="bg-red-400 py-1 px-3 text-center capitalize font-semibold text-white rounded-md" onClick={() => setAdd(prevAdd => 0)}>reset</button>
      </div>
    </div>
  )
}

export default Counter