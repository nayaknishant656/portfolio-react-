import React from 'react';

export default function BlogsList() {
  const blogs = [
    {
      id: 1,
      title: "Building Scalable AI Agents with LangChain",
      date: "December 15, 2024",
      tldr: "Learn how to build production-ready AI agents using LangChain, covering memory management, tool integration, and deployment strategies.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Real-time Collaboration: WebSockets vs WebRTC",
      date: "December 10, 2024",
      tldr: "A comprehensive comparison of WebSockets and WebRTC for building real-time collaborative applications, with code examples and performance metrics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Securing Your Node.js Backend: Best Practices",
      date: "December 5, 2024",
      tldr: "Essential security practices for Node.js applications including authentication, authorization, rate limiting, and preventing common vulnerabilities.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "From Monolith to Microservices: A Journey",
      date: "November 28, 2024",
      tldr: "Our experience migrating a monolithic application to microservices architecture, including challenges faced and lessons learned.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Optimizing React Performance at Scale",
      date: "November 20, 2024",
      tldr: "Proven techniques for optimizing large React applications including code splitting, memoization, and virtual scrolling implementation.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Database Indexing: When and How",
      date: "November 15, 2024",
      tldr: "Deep dive into database indexing strategies, covering B-tree vs hash indexes, composite indexes, and query optimization techniques.",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section className="my-12 md:my-16 lg:my-20">
      <div className="mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
          Latest Blog Posts
        </h2>
        <p className="text-sm md:text-base text-gray-600 mt-2">
          Insights, tutorials, and thoughts on software development
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
        {blogs.map((blog) => (
          <article 
            key={blog.id}
            className="bg-white rounded-lg border border-gray-200 p-2 hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col h-full max-w-[280px]"
          >
            <time className="text-xs text-gray-500 font-medium">
              {blog.date}
            </time>
            
            <h3 className="text-sm font-semibold text-gray-900 mt-1 mb-1 line-clamp-2 hover:text-blue-600 transition-colors">
              {blog.title}
            </h3>
            
            <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 mb-2 flex-grow">
              <span className="font-semibold text-gray-700">TL;DR: </span>
              {blog.tldr}
            </p>
            
            <div className="flex items-center mt-auto pt-2 border-t border-gray-100">
              <div className="flex items-center text-blue-600 text-xs font-medium hover:text-blue-700 transition-colors">
                Read more
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}