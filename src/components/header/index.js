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
                    <Link to="/" className="ul-link"><div>Home</div></Link>
                    <Link to="Body" className="ul-link"><div>Product</div></Link>
                    <Link to="Twitter" className="ul-link"><div>Hot Code</div></Link>
                    <Link to="Source" className="ul-link"><div>Source</div></Link>
                    <Link to="Blogs" className="ul-link"><div>Blogs</div></Link>
                    {/* <Link to="Gallery" className="ul-link"><div>Gallery</div></Link>
                    <Link to="videos" className="ul-link"><div>Videos</div></Link>
                    <Link to="Youtubeblog" className="ul-link"><div>YoutubeBlog</div></Link> */}
                    </ul>
                </nav>
            </div>
        </div>
    </main>
    
    </>
  )
}
