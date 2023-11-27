import React from 'react'
import {Link} from "react-router-dom";


function Rhome() {
  return (
    <div>
            <div className=''>
        <div className='bg-black h-[100vh] overflow-hidden '>

            <h1 className='flex items-center justify-center h-[80vh] text-white text-[5rem]'>Welcome to our website
            </h1>
            <div className='flex justify-center'>

            <Link to="Home/Info">
            <button className='text-white bg-slate-600 w-[10vw] h-[5vh] rounded-lg'>INFO</button>

            </Link>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Rhome