import React from 'react'
import {Link} from "react-router-dom";

function Home() {
  return (
    <div className=''>
        <div className='bg-black h-[100vh] overflow-hidden '>


            <div className='flex justify-center items-center h-[80vh] flex-col gap-7  '>
                <div className='flex justify-center items-center h-[30vh] w-80 flex-col gap-7 bg-slate-500 rounded-lg '> 

            
                    <h1 className='uppercase  text-white'>Sing in</h1>
                    <input type="text" placeholder='UserName' />
                    <input type="password" placeholder='Password' />
                    <Link to="Singup/Singed">
                    <button className='text-white bg-black w-20 h-7 rounded-md'>Sing in</button>
                    </Link>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Home