import React from "react";
import Blogcard from "./blogcard";
import "./blog.css";
export default function Blogs() {
  return (
    <>
      <div className="grandparent_mainheader_parent">
        <div className="parent_mainheader_child">
          <div className="blog_main_grandparent">
            <div className="blog_main_parent">
              <div className="blog_main_head">
                <Blogcard />
                  <Blogcard />
                    <Blogcard />
                      <Blogcard />
                        <Blogcard />
                          <Blogcard />
                            <Blogcard />
                            
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
