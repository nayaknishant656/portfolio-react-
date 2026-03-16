import React from 'react'
import { Link } from "react-router-dom";
import "./main.css"
export default function Footernavigation() {
  return (
    <>
      <div className='r-parent flex flex-col gap-0.5 mt-4'>
        <h2 className="text-sm font-bold">You can connect with me from this Social media :---</h2>
        <Link to="/Body" className="text-xs">My Portfolio/projects</Link>
        <a href='https://x.com/curious_nishant' className="text-xs">Twitter</a>
        <Link to="/Body" className="text-xs">Instagram</Link>
        <a href="https://www.youtube.com/watch?v=bd7E4fyz46o" className="text-xs">Youtube</a>
        <p className="text-xs italic text-gray-500">i mostly do random live streams on youtube</p>
      </div>
    </>

  )
}
