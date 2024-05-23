import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function main() {
  return (
    <div className='parent-name-heading'>
        <div className='second-parent-name'>
         <div className='main-heading'>
            <h1>hey, nishant this side</h1>
            <Link to="/Body">Productpage</Link>
         </div>
        </div>
    </div>
  )
}
