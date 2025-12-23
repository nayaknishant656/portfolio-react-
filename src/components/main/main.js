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
                  <a href='https://docs.google.com/document/d/1-0k2bY4pWvV2p3n1Yk6G6U5r1F2H3I4J5K6L7M8N9O0/edit?usp=sharing' download>
                    <button className='resume__download_button'>
                    <IoDocuments />
                    </button>
                  </a>
                </div>
              </div>
              <div className='para-head-parent'>
                <p> <br></br>I am a software developer and a product designer. I believe in impacting society and helping society by means of technology. <br></br>I have expertise in finding solutions of problems and learning through documentation</p>
                <p>Created many robust systems, frontend and backend, chat systems, and live-streaming platforms.<br></br><br></br> </p>
                <p>COntribtuion it should i have contributed to the github profile</p>
                <p>contribution has shown into my zccount lets check this this side of contribution to this side</p>
                <p>it should added to the github</p>
                <p>gadi mai dalo isko</p>
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
