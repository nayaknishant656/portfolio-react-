import React from "react";
import "./timeline.css";
import { FaArrowUp } from "react-icons/fa";

export default function TimelineCard() {
  return (
    <div className="grandparent_timelinecard">
      <div className="Parent_timelinecard">
        
        <div className="content_timelinecard">
          
          {/* HEADER */}
          <div className="content_master_head">
            <div className="content_left">
              <h3>GO Language</h3>
            </div>

            <div className="content_right">
              <FaArrowUp />
            </div>
          </div>

          {/* DETAILS DROPDOWN */}
          <details>
            <summary>Epcot Center</summary>

            <div className="content_center_paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto 
              labore distinctio odio deleniti soluta inventore nemo itaque recusandae.
              Quaerat minima corporis fuga reprehenderit repellat minus deleniti 
              ratione quas debitis saepe eos sed nesciunt ipsum.
            </div>

          </details>

        </div>

      </div>
    </div>
  );
}
