import React from "react";
import "./timeline.css";
import { FaMobileAlt } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

export default function TimelineCard() {
  return (
    <div className="grandparent_timelinecard">
      <div className="Parent_timelinecard">
        <div className="content_timelinecard">
          <div className="content_master_head">
          <div className="content_left">
            <h3>GO Language</h3>
          </div>
          <div className="content_right">
            <FaArrowUp />
          </div>
          </div>
          <div className="content_center_paragrapgh">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto labore distinctio odio deleniti soluta inventore nemo itaque recusandae, veniam consequatur, voluptatum hic voluptatibus mollitia error molestias voluptas saepe repellendus ratione?
            Quaerat, eaque? Minima corporis fuga reprehenderit repellat minus deleniti ratione quas, debitis saepe eos sed nesciunt ipsum a suscipit temporibus. Nemo vel accusamus maiores asperiores, eos odio at et consectetur.</div>
        </div>
      </div>
    </div>
  );
}
