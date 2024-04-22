import React from 'react'
import "./relativepath.css"

export default function relativepath({ item }) {
  const { id, title, des, tech, keypoints, img, date } = item;
  return (
    <div className='para'>
      <span>*</span><h1>{title}</h1>
      <h2>{date}</h2>
      <div className='para-padding'>
        <span className='relative-line'></span>
        <p>{des}</p>
        <div className='bullet-points'>
          
          <ul className='bullet-points-ul'>
          {keypoints?.map((item) => (
              <li>{item.text}</li>
            ))};
          </ul>
        </div>

        <p>Tech Stach :- React, Html, css, javascript,</p>
      </div>
    </div>
  )
}
