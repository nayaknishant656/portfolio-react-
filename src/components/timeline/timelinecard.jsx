import React from "react";
import { FaArrowUp } from "react-icons/fa";

export default function TimelineCard({ data }) {
  const { Heading, Summary, Description } = data[0];
  
  return (
    <div className="max-w-2xl mx-auto py-8 px-6">
      <div className="py-1 mb-3">
        
        <div>
          
          {/* HEADER */}
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-800">{Heading}</h3>
            <FaArrowUp className="text-xs text-gray-500" />
          </div>

          {/* DETAILS DROPDOWN */}
          <details className="group">
            <summary className="text-xs text-gray-600 cursor-pointer hover:text-gray-800 list-none mb-1">
              {Summary}
            </summary>

            <div className="text-xs text-gray-500 mt-2 pl-2">
              {Description}
            </div>

          </details>

        </div>

      </div>
    </div>
  );
}