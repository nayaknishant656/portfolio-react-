import React from 'react'
import "./main.css";
import Typewriter from 'typewriter-effect';
import { Appwrite, Anthropic, NextJs, NodeJs } from "developer-icons";
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

              <Typewriter className="main-heainding-part-typewriter"
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(2500).typeString('<h1>Hey this is <strong> Nishant</strong></h1>')
                    .pauseFor(300).deleteChars(7)
                    .pauseFor(300).typeString('<h1><strong>Software Developer</strong></h1>')
                    .deleteChars(15)
                    .pauseFor(300)
                    .typeString('<h1><strong>Software Architecture</strong></h1>')
                    .pauseFor(1000)
                    .start()
                }}
              />
              <div className='para-head-parent'>
                <p> <br></br>I am a software developer and a product designer. I believe in impacting society and helping society by means of technology. <br></br>I have expertise in finding solutions of problems and learning through documentation</p>
                <p>Created many robust systems, frontend and backend, chat systems, and live-streaming platforms.<br></br><br></br> </p>
                <p>COntribtuion it should i have contributed to the github profile</p>
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
