import React from 'react'
import './twiter.css' 
import TwitterComponent from './Twittercomponent';
export default function twiiter() {

  // function myFunction() {
  //   var dots = document.getElementById("dots");
  //   var moreText = document.getElementById("more");
  //   var btnText = document.getElementById("myBtn");

  //   if (dots.style.display === "none") {
  //     dots.style.display = "inline";
  //     btnText.innerHTML = "Read more";
  //     moreText.style.display = "none";
  //   } else {
  //     dots.style.display = "none";
  //     btnText.innerHTML = "Read less";
  //     moreText.style.display = "inline";
  //   }
  // }

const data = [
  {
      "id": 1,
      "date": "05/05/2024",
      "title": "Donation Management",
      "h3": "eu-pho-ria",
      "p1": "Synonyms of euphoria",
      "h2": ":: a feeling of well-being or elation",
      "p2": "Apparently, it is the change in mood---the feeling of euphoria and reduced anxiety---that prompts people to start using this dangerous drug. -Rita L. Atkinson et al",
      "p3": "They had almost a week to recover from the euphoria of Tuesdays series-winning victory -Clifton Brown"
    },
    {
      "id": 2,
      "date": "06/12/2024",
      "title": "Community Outreach",
      "h3": "res-il-ience",
      "p1": "Synonyms of resilience",
      "h2": ":: the capacity to recover quickly from difficulties; toughness",
      "p2": "The resilience of the human spirit is remarkable, allowing individuals to overcome adversity and emerge stronger than before. -Dr. Angela Duckworth",
      "p3": "After facing numerous setbacks, the team demonstrated incredible resilience by bouncing back and winning the championship. -Michael Jordan"
    },
    {
      "id": 3,
      "date": "07/20/2024",
      "title": "Educational Programs",
      "h3": "em-pa-thy",
      "p1": "Synonyms of empathy",
      "h2": ":: the ability to understand and share the feelings of another",
      "p2": "Empathy is about finding echoes of another person in yourself, allowing you to connect deeply with their experiences and emotions. -Mohsin Hamid",
      "p3": "Healthcare professionals who practice empathy create stronger bonds with patients, leading to better treatment outcomes and patient satisfaction. -Dr. Helen Riess"
    },
    {
      "id": 4,
      "date": "08/15/2024",
      "title": "Volunteer Recognition",
      "h3": "al-tru-ism",
      "p1": "Synonyms of altruism",
      "h2": ":: selfless concern for the well-being of others",
      "p2": "True altruism involves putting the needs of others before your own without expecting anything in return, a quality that defines the greatest humanitarian efforts. -Peter Singer",
      "p3": "The volunteers demonstrated pure altruism by dedicating countless hours to help those affected by the natural disaster, asking for nothing in return. -Red Cross Report"
    },
    {
      "id": 5,
      "date": "09/03/2024",
      "title": "Annual Fundraiser",
      "h3": "gen-er-os-i-ty",
      "p1": "Synonyms of generosity",
      "h2": ":: the quality of being kind and generous",
      "p2": "Generosity is not just about giving money; it's about giving time, attention, and care to make a meaningful difference in someone's life. -Maya Angelou",
      "p3": "The community's generosity was overwhelming, with donations pouring in from all corners to support families in need during the holiday season. -Community Chronicle"
    },
    {
      "id": 6,
      "date": "10/18/2024",
      "title": "Impact Assessment",
      "h3": "trans-for-ma-tion",
      "p1": "Synonyms of transformation",
      "h2": ":: a thorough or dramatic change in form or appearance",
      "p2": "The transformation of the neighborhood was remarkable, evolving from a neglected area into a thriving community center within just two years. -Urban Development Journal",
      "p3": "Personal transformation requires courage, commitment, and a willingness to step outside your comfort zone to become the person you aspire to be. -Tony Robbins"
    },
    {
      "id": 7,
      "date": "11/22/2024",
      "title": "Grant Applications",
      "h3": "per-se-ver-ance",
      "p1": "Synonyms of perseverance",
      "h2": ":: continued effort to do or achieve something despite difficulties",
      "p2": "Perseverance is the hard work you do after you get tired of doing the hard work you already did, pushing through when others would quit. -Newt Gingrich",
      "p3": "The researcher's perseverance over two decades finally paid off when she discovered a breakthrough treatment that would save countless lives. -Science Today"
    },
    {
      "id": 8,
      "date": "12/01/2024",
      "title": "Holiday Campaign",
      "h3": "com-pas-sion",
      "p1": "Synonyms of compassion",
      "h2": ":: sympathetic pity and concern for the sufferings or misfortunes of others",
      "p2": "Compassion is not religious business, it is human business; it is not luxury, it is essential for our own peace and mental stability. -Dalai Lama",
      "p3": "The nurse's compassion towards her elderly patients went beyond medical care, as she took time to listen to their stories and comfort their fears. -Healthcare Review"
    },
    {
      "id": 9,
      "date": "01/10/2025",
      "title": "Strategic Planning",
      "h3": "vi-sion-ar-y",
      "p1": "Synonyms of visionary",
      "h2": ":: thinking about or planning the future with imagination or wisdom",
      "p2": "A visionary leader doesn't just see what is, but imagines what could be, inspiring others to work toward a future that doesn't yet exist. -Steve Jobs",
      "p3": "The organization's visionary approach to solving homelessness combined innovative housing solutions with comprehensive support services. -Social Innovation Quarterly"
    },
    {
      "id": 10,
      "date": "02/14/2025",
      "title": "Partnership Development",
      "h3": "col-lab-o-ra-tion",
      "p1": "Synonyms of collaboration",
      "h2": ":: the action of working with someone to produce or create something",
      "p2": "Effective collaboration harnesses the diverse strengths of team members, creating solutions that are greater than the sum of individual contributions. -Patrick Lencioni",
      "p3": "The collaboration between local businesses and nonprofit organizations resulted in a sustainable program that provided job training for hundreds of unemployed youth. -Economic Times"
    }
  ];



  return (
    <>
<div className='grand-parent-header'>
  <h1 className='text-xl '>Products That can Impact People</h1>
  <div className='thread_parent_components'>
      {data.map((item) => (
      <> <div className='thread_child_content'></div> <TwitterComponent 
          key={item.id}
          date={item.date}
          title={item.title}
          h3={item.h3}
          p1={item.p1}
          h2={item.h2}
          p2={item.p2}
          p3={item.p3}
        /></>  
      ))}
    </div></div>
    </>
  )
}
