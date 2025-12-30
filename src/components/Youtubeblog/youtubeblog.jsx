import React from 'react'

export default function Youtubeblog() {
  const data = [
    {
      Heading: "Youtube Blog Posts",
      Blogs: [
        {
          topic: "Understanding React Hooks",
          video: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
          description: "An in-depth look at React Hooks and how to use them effectively in your projects.",
          notes: "Covers useState, useEffect, and custom hooks."
        },
        {
          topic: "JavaScript ES6 Features",
          video: "https://www.youtube.com/watch?v=NCwa_xi0Uuc",
          description: "A comprehensive guide to the new features introduced in ES6.",
          notes: "Includes let/const, arrow functions, template literals, and more."
        },
        {
          topic: "CSS Flexbox Tutorial",
          video: "https://www.youtube.com/watch?v=JJSoEo8JSnc",
          description: "Learn how to use CSS Flexbox to create flexible and responsive layouts.",
          notes: "Covers flex container, flex items, and common layout patterns."
        }
      ]
    }
  ];
  
  return (
    <div className='max-w-2xl mx-auto py-8 px-6'>
      {data.map((item, index) => (
        <div key={index}>
          <h2 className='text-xl font-semibold mb-4 text-gray-900'>{item.Heading}</h2>
          {item.Blogs.map((blog, blogIndex) => (
            <div key={blogIndex} className='py-1 mb-3'>
              <a 
                href={blog.video} 
                target="_blank" 
                rel="noopener noreferrer"
                className='text-sm font-medium text-gray-800 hover:text-gray-600 hover:underline mb-1 block'
              >
                {blog.topic}
              </a>
              <p className='text-xs text-gray-600 mb-1'>{blog.description}</p>
              <p className='text-xs text-gray-500'>{blog.notes}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}