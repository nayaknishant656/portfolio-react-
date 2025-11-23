import React from 'react'
import Timelinecard from './timelinecard'
import "./timeline.css"
export default function timeline() {
  return (
    <div className='grandparent_timeline'>
        <div className='parent_timeline'>
            <Timelinecard/>
        </div>
    </div>
  )
}
