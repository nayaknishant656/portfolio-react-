import React from 'react'
import Timelinecard from './timelinecard'
import "./timeline.css"
export default function timeline() {

  const data = [    
    {
      Heading: "GO Language",
      Summary: "Epcot Center",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto labore distinctio odio deleniti soluta inventore nemo itaque recusandae. Quaerat minima corporis fuga reprehenderit repellat minus deleniti ratione quas debitis saepe eos sed nesciunt ipsum."
    },
    {
      Heading: "Python",
      Summary: "Silicon Valley",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto labore distinctio odio deleniti soluta inventore nemo itaque recusandae. Quaerat minima corporis fuga reprehenderit repellat minus deleniti ratione quas debitis saepe eos sed nesciunt ipsum."
    },
    {
      Heading: "JavaScript",
      Summary: "Tech Hub",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto labore distinctio odio deleniti soluta inventore nemo itaque recusandae. Quaerat minima corporis fuga reprehenderit repellat minus deleniti ratione quas debitis saepe eos sed nesciunt ipsum."
    }
  ];
  return (
    <div className='grandparent_timeline'>
        <div className='parent_timeline'>
            <Timelinecard data={data}/>
        </div>
    </div>
  )
}
