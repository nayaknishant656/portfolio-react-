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
                    <Link to="timeline" className="ul-link">Hot Code</Link>
                    <Link to="Blogs" className="ul-link">Blogs</Link>
                    <Link to="Gallery" className="ul-link">Gallery</Link>
                    <Link to="videos" className="ul-link">Videos</Link>
                    </ul>
                </nav>
            </div>
        </div>
    </main>
    
    </>
  )
}
