import React from 'react'
import "./index.css"
import { Link } from "react-router-dom";
export default function index() {
  return (
    <>
    <main>
        <div className='header-parent'>
            {/* <div className='left-parent'>
                <img className='img-parent'></img>
            </div> */}
            <div className='right-parent'>
                <nav>
                    <ul className='ul-flex'>
                    <Link to="/" className="ul-link">Home</Link>
                    <Link to="twitter" className="ul-link">boredom</Link>
                    </ul>
                </nav>
            </div>
        </div>
    </main>
    
    </>
  )
}
