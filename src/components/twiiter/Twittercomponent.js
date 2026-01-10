import React from 'react';

const TwitterComponent = ({ date, title, h3, p1, h2, p2, p3 }) => {
  return (
    <>
      <div className='main-parent-twiiter'>
        <h2>{date}</h2>
        <span className='head__span'></span>
        <h2 className='h__twiiter'>{title}</h2>
        <div className='main-sunparent-parent'>
          <h3>{h3}</h3>
          <p>{p1}</p>
        </div>
        <div className='head__sub-parent'>
          <span className='head__sub-parent__span'></span>
          <h2>{h2}</h2>
          <div className='head__sub_p'>
            <span className='timeline__t'></span>
            <p>{p2}</p>
          </div>
          <div className='head__sub_p'>
            <span className='timeline__t'></span>
            <p>{p3}</p>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default TwitterComponent;