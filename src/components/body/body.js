import React from 'react'
import "./body.css"
import Relative from "./relativepath"
import data from "../../db.json"
import { FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";
// import Footer from "../footer/footer"

export default function body() {
  return (
    <>
        <div className='parent-para-circle'>
          <div className='parent-header p-8 border-red-500'>
        <div className='header-main '>
          <h2 className="text-3xl font-bold">Hey,Nishant this side</h2>
          <h4>Software Developer/Product Designer</h4>
          <div className='social-icons flex space-x-4 '>
            <a href="https://github.com/nayaknishant656" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
            <a href="mailto:nishantkumarnayak094@gmail.com">
              <FaEnvelope className="social-icon" />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <FaFileAlt className="social-icon" />
            </a>
          </div>
        </div>
        {/* <div className='para-head p-4 '>
          i am 18 year old high school graduate, Building Stuff since 2020 <br></br>
         i have expertise on javascript, Css, and Finding Solution of Problem and solving
        </div> */}
          <div className='top-centre'>
            {data?.map((item) => (
              <Relative item={item} key={item.id}/>
            ))};
            {/* <Footer/> */}
          </div>
        </div>
      </div>
    </>
  )
}
