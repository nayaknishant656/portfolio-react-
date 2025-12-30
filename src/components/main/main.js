import React from 'react'
import "./main.css";
import Typewriter from 'typewriter-effect';
import { Appwrite, Anthropic, NextJs, NodeJs , Download } from "developer-icons";
import { IoDocuments } from "react-icons/io5";
import FooterNavigation from "./Footernavigation"
import Techstack from './techstack';
import BlogsList from './BlogsList';
import Projects from './projects';
export default function main() {
  return (
    <>

      <div className='parent-name-heading'>
        <div className='second-parent-name'>
          <div className='main-heading'>
            <div className='main-heading-part'>
          <h1>Hey , Nishant this side,</h1>
              <Typewriter className="main-heainding-part-typewriter"
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(2500).typeString('<h1><strong>Staff Engineer</strong></h1>')
                    .pauseFor(300).deleteChars(19)
                    .pauseFor(3000).typeString('<h1><strong>Software Developer</strong></h1>')
                    .deleteChars(19)
                    .pauseFor(3000)
                    .typeString('<h1><strong>Software Architecture</strong></h1>')
                    .pauseFor(1000)
                    .start()
                }}
              />
              <div className='resume__download_parent'>
                <div className='resume__download_child'>
                  <a href='https://drive.google.com/file/d/1TjDGvPpc-iQsqknjj1083rBoY6HVgrxf/view?usp=sharing' download>
                    <button className='resume__download_button'>
                    <IoDocuments />
                    </button>
                  </a>
                </div>
              </div>
              <div className='para-head-parent'>
                <p> <br></br>I am a software developer and a product designer. I believe in impacting society and helping society by means of technology. <br></br>I have expertise in finding solutions of problems and learning through documentation</p>
              </div>



           <Techstack/>
              <Projects/>
               <BlogsList/>
             <FooterNavigation/>

            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  )
}
