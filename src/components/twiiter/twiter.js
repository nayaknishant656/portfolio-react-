import React from 'react'
import './twiter.css'
export default function twiiter() {

  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  return (
    <>
      <div className='grand-parent-header'>
        <div className='main-parent-twiiter'>
          <h2>05/05/2024</h2>
          <span className='head__span'></span>
          <h2 className='h__twiiter'>Donation Management</h2>
          <div className='main-sunparent-parent'>
            <h3>eu-pho-ria</h3>
            <p>Synonyms of euphoria</p>
          </div>
          <div className='head__sub-parent'>
            <span className='head__sub-parent__span'></span>
            <h2>:: a feeling of well-being or elation</h2>
            <div className='head__sub_p'><span className='timeline__t'></span><p>Apparently, it is the change in mood---the feeling of euphoria and reduced anxiety---that prompts people to start using this dangerous drug. -Rita L. Atkinson et ai</p></div>
            <div className='head__sub_p'><span className='timeline__t'></span><p>They had almost a week to recover from the euphoria of Tuesdays series-winning victory  -Clifton Brown</p></div>
          </div>
        </div><br></br>

        <div className='main-parent-twiiter'>
          <h2>05/05/2024</h2><span className='head__span'></span>
          <h2 className='h__twiiter'>nishantttttttt shit post</h2>
          <div className='main-sunparent-parent'>
            <h3>devuja</h3>
            <p>dejavu-feeling-we have felt earlier</p>
          </div>
          <div className='head__sub-parent'>
            <span className='head__sub-parent__span'></span>
            <h2>:: a feeling of well-being or elation</h2>
            <div className='head__sub_p'><p><span className='timeline__t'></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel<span id="dots">...</span><span id="more"><p><br></br>They had almost a week to recover from the euphoria of Tuesdays series-winning victory  -Clifton Brown</p></span></p>
              <button onClick={myFunction} id="myBtn">Read more</button></div>
          </div>
        </div><br></br>
      </div>
    </>
  )
}
