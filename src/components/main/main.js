import React from 'react'
import {Link } from "react-router-dom";
import "./main.css";
export default function main() {
  return (
    <div className='parent-name-heading'>
      <div className='second-parent-name'>
        <div className='main-heading'>
          <div className='main-heading-part'>
            <h1>hey, nishant this side</h1>
            <div className='para-head-parent'>
              <p> <br></br>I am a web developer and a product designer. I believe in impacting society and helping society by means of technology. <br></br> <br></br>I have built many projects that have helped people by providing more efficient and easier means.<br></br> <br></br>I have expertise in finding solutions to problems and learning through documentation</p>
              <br></br><p>Created many robust systems, frontend and backend, chat systems, and live-streaming platforms.<br></br><br></br> </p>
              </div>
            <div className='r-parent'>
              <h2>You can connect with me from this Social media :---</h2>
              <Link to="/Body">My Portfolio/projects</Link><br></br>
              <Link to="/Body">Twitter</Link><br></br>
              <Link to="/Body">Instagram</Link><br></br>
              <Link to="/Body">Youtube</Link><br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
