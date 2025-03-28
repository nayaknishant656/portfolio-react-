import React from 'react'
import "./body.css"
import Relative from "./relativepath"
import data from "../../db.json"
import Footer from "../footer/footer"

export default function body() {
  return (
    <>
        <div className='parent-para-circle'>
          <div className='parent-header p-8 border-red-500'>
        <div className='header-main '>
          <h2 className="text-3xl font-bold">Hey,Nishant this side</h2>
          <h4>Software Developer/Product Designer</h4>
        </div>
        {/* <div className='para-head p-4 '>
          i am 18 year old high school graduate, Building Stuff since 2020 <br></br>
         i have expertise on javascript, Css, and Finding Solution of Problem and solving
        </div> */}
          <div className='top-centre'>
            {data?.map((item) => (
              <Relative item={item} key={item.id}/>
            ))};
            <Footer/>
          </div>
        </div>
      </div>
    </>
  )
}
