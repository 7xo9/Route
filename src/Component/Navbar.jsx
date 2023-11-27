import React from 'react'
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className='bg-slate-600 text-white h-20  '>
        <div className='flex justify-between pt-3'>

            <Link to="/">
            <h1 className='text-[2rem] pl-10'>Route</h1>
            </Link>


            <div>
                <ul className='pr-10 btns'>
                  <Link to="/Home">
                  <button className='pr-10 pt-4'>Sing in</button>
                  </Link>
                  
                  <Link to="/Singup">
                  <button>Sing up</button>
                  </Link>

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar