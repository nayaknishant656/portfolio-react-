import React from 'react'
import "./blog.css"
import imgsrc from "../../img/blogimage.avif"
function blogcard() {
    return (
        <div className='granparent_blog__card'>
            <div className='parent_blog_card'>
                <div className='blog_header_card'>
                   <div className='blog_header_img'>
                    <img src={imgsrc} alt="" />
                   </div>
                    <h1>This is the heading of the blog</h1>
                    </div>
                <div className='blog_body_card'>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quibusdam sunt non! Laboriosam, veritatis est hic quas veniam beatae et iure, repellat vel voluptatem adipisci nemo impedit dolore accusamus quibusdam enim debitis obcaecati aut culpa?</p>
                </div>
                <div className='blog_body_footer'>
                    <button>Readme-about</button>
                </div>
            </div>
        </div>
    )
}
export default blogcard