import React from 'react'

const NavBar = () => {
  return (
    <div className=' flex justify-between  w-11/12 mx-auto bg-blue-400 py-2 px-4 text-center text-white  '>
        <dir className="font-semibold text-xl ">task</dir>
        <div className='flex gap-6 text-center px-4 items-center'>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        </div>
    </div>
  )
}

export default NavBar