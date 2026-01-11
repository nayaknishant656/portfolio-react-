import React from 'react'
import "./relativepath.css"
import { FaBeer } from 'react-icons/fa';
import { FaExternalLinkAlt } from "react-icons/fa";

export default function relativepath({ item }) {
  const { id, title, des, tech, keypoints, img, date, feat, link } = item;
  return (
    <div className='para'>
      {/* <h1 >{title}</h1> */}
      <a className="link-main" href={img}><h1 className='title-heading'>{title}</h1><FaExternalLinkAlt /></a>
      <h2 className='date-portfolio'>{date}
      </h2>
      {link ? (
        <a style={{ textDecoration: 'underline', color: 'indigo' }} href={link}>
          BACKEND API
        </a>
      ) : (
        <p></p>
      )}
      <div className='para-padding'>
        <span className='relative-line'></span>
        <p className='para_pad_des'>{des}</p>
        <div className='bullet-points'>
          <ul className='bullet-points-ul'>
            {keypoints?.map((item) => (
              <><li>{item.text}</li>
              </>
            ))}
          </ul>
        </div>
        <p>Tech Stach :- React, Html, css, javascript,</p>
      </div>
    </div>
  )
}
