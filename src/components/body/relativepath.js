import React from 'react'
import "./relativepath.css"
import { FaBeer } from 'react-icons/fa';
import { FaExternalLinkAlt } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
export default function relativepath({ item }) {
  const { id, title, des, tech, keypoints, img, images, date, feat, link, upcoming, category, assigmnetlink } = item;
  return (
    <div className='para'>
      {/* <h1 >{title}</h1> */}
      <a className="link-main" href={img}><h1 className='title-heading'>{title}</h1><FaExternalLinkAlt /></a>
      <div className='grandparent-image-preview'>
        <div className='parent-image-preview'>
          {images && images.length > 0 && (
            <PhotoProvider
            // overlayRender={() => (
            //   <div style={{
            //     position: 'absolute',
            //     bottom: 0,
            //     left: 0,
            //     right: 0,
            //     padding: '20px 24px',
            //     background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)',
            //     color: '#fff',
            //     pointerEvents: 'none',
            //     zIndex: 1000,
            //   }}>
            //     <p style={{ margin: 0, fontWeight: 700, fontSize: '16px', marginBottom: '4px' }}>
            //       {title}
            //     </p>
            //     <p style={{ margin: 0, fontSize: '13px', lineHeight: '1.5' }}>
            //       {des}
            //     </p>
            //   </div>
            // )}
            >
              {images.map((item, index) => (
                <PhotoView key={index} src={item} style={{ padding: "8px 0" }}>
                  {index < 5 ? (
                    <div className="thumb-wrapper">
                      <img src={item} alt="" className="thumb-img" />
                      <div className="thumb-overlay">
                        <span className="thumb-icon">⊕</span>
                      </div>
                    </div>
                  ) : null}
                </PhotoView>
              ))}
            </PhotoProvider>
          )}
        </div>
      </div>
      {assigmnetlink ? (
        <a href={assigmnetlink}>QUESTIONLINK</a>
      ) : null}

      {upcoming ? (
        <h2 className='upcoming-project' style={{ color: 'red', fontWeight: 'plain' }}>
          Upcoming Project
        </h2>
      ) : null}
      {/* {category ? (
        <h2 className='category-project' style={{ color: 'blue', fontWeight: 'plain', width: "fit-content" }}>
          {category}
        </h2>
      ) : null} */}
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
        <p>{tech}</p>
      </div>
    </div>
  )
}
