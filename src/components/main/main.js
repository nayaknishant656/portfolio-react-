import React from 'react'
import {Link } from "react-router-dom";
import "./main.css";
import Footer from "../footer/footer"
import Typewriter from 'typewriter-effect';
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
      .pauseFor(2500)
      .typeString('<h1>Hey this is <strong> Nishant</strong></h1>')
      .pauseFor(300)
      .deleteChars(7)
      .pauseFor(300)
      .typeString('<h1><strong>Software Developer</strong></h1>')
      .deleteChars(15)
      .pauseFor(300)
      .typeString('<h1><strong>Software Architecture</strong></h1>')
      .pauseFor(1000)
      .start()
  }}
/>
            <div className='para-head-parent'>
              <p> <br></br>I am a software developer and a product designer. I believe in impacting society and helping society by means of technology. <br></br> <br></br>I have built many projects that have helped people by providing more efficient and easier means software platform.<br></br> <br></br>I have expertise in finding solutions of problems and learning through documentation</p>
              <br></br><p>Created many robust systems, frontend and backend, chat systems, and live-streaming platforms.<br></br><br></br> </p>
              </div>















            <div className='r-parent'>
              <h2>You can connect with me from this Social media :---</h2>
              <Link to="/Body">My Portfolio/projects</Link><br></br>
              <a href='https://x.com/curious_nishant'>Twitter</a><br></br>
              <Link to="/Body">Instagram</Link><br></br>
              <a href="https://www.youtube.com/watch?v=bd7E4fyz46o">Youtube</a><br></br>
              <p>i mostly do random live streams on youtube</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
