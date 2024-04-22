import React from 'react'
import "./body.css"
import Relative from "./relativepath"
import data from "../../db.json"

export default function body() {
  return (
    <>
      
        <div className='parent-para-circle'>
          <div className='parent-header p-8 border-red-500'>
        <div className='header-main '>
          <h2 className="text-3xl font-bold">Hey,Nishant this side</h2>
          <h4>Web-app Dev/Product Designer</h4>
        </div>
        <div className='para-head p-4 '>
          i am 18 year old high school graduate, currently preparaing for jee mains, <br></br>
          by just figuring out and i am in expect googling thing out and deep concept of programming and codeflow
        </div>
          <div className='top-centre'>
            {data?.map((item) => (
              <Relative item={item} key={item.id}/>
            ))};
          </div>
        </div>
      </div>
    </>
  )
}
