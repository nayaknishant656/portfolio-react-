import React from 'react';

export default function BlogsList() {
  const blogs = [
    {
      id: 1,
      title: "Building Scalable AI Agents with LangChain",
      date: "December 15, 2024",
      tldr: "",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Real-time Collaboration: WebSockets vs WebRTC",
      date: "December 10, 2024",
      tldr: "",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Securing Your Node.js Backend: Best Practices",
      date: "December 5, 2024",
      tldr: "",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "From Monolith to Microservices: A Journey",
      date: "November 28, 2024",
      tldr: "",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Optimizing React Performance at Scale",
      date: "November 20, 2024",
      tldr: "",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Database Indexing: When and How",
      date: "November 15, 2024",
      tldr: "",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section className="my-4 md:my-6 lg:my-8">
      <div className="mb-2">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
          Latest Blog Posts
        </h2>
        {/* <p className="text-sm md:text-base text-gray-600 mt-2">
          Insights, tutorials, and thoughts on software development
        </p> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {blogs.map((blog) => (
          <article
            key={blog.id}
            className="rounded-lg p-1 hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col h-full max-w-[280px]"
            style={{ background: 'transparent' }}
          >
            <time className="text-xs font-medium" style={{ color: '#6b7280' }}>
              {blog.date}
            </time>

            <h3 className="text-sm font-semibold mt-1 mb-1 line-clamp-2 hover:text-blue-600 transition-colors" style={{ color: 'black' }}>
              {blog.title}
            </h3>

            {/* <p className="text-xs leading-relaxed line-clamp-3 mb-2 flex-grow" style={{ color: '#374151' }}>
              <span className="font-semibold" style={{ color: '#1f2937' }}>TL;DR: </span>
              {blog.tldr}
            </p> */}

            <div className="flex items-center mt-auto pt-2" style={{}}>
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