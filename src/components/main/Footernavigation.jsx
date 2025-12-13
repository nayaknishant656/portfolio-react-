import React from 'react'
import { Link } from "react-router-dom";
import "./main.css"
export default function Footernavigation() {
  return (
    <>
    <div className='r-parent'>
                <h2>You can connect with me from this Social media :---</h2>
                <Link to="/Body">My Portfolio/projects</Link><br></br>
                <a href='https://x.com/curious_nishant'>Twitter</a><br></br>
                <Link to="/Body">Instagram</Link><br></br>
                <a href="https://www.youtube.com/watch?v=bd7E4fyz46o">Youtube</a><br></br>
                <p>i mostly do random live streams on youtube</p>
              </div>
    </>
   
  )
}
