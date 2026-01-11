import React, { useState, useEffect } from 'react';

export default function Projects() {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes wave {
        0% {
          transform: scale(0.8);
          opacity: 1;
        }
        100% {
          transform: scale(2.5);
          opacity: 0;
        }
      }
      
      .status-indicator {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 8px;
        height: 8px;
        background: #00ff00;
        border-radius: 50%;
        z-index: 1;
      }
      
      .status-indicator::before,
      .status-indicator::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: rgba(0, 255, 0, 0.5);
        animation: wave 2s infinite;
        z-index: -1;
      }
      
      .status-indicator::after {
        animation-delay: 1s;
        z-index: -1;
      }

      .tech-stack-container {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 16px;
      }

      .tech-icon-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
      }

      .tech-icon-item img {
        width: 32px;
        height: 32px;
      }

      .tech-icon-item h5 {
        font-size: 10px;
        margin: 0;
        color: #374151;
        font-weight: 500;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const techStacks = {
    doctorAI: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
    ],
    restAPI: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Vercel', icon: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png' }
    ],
    templeDonation: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' }
    ],
    ecommerce: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' }
    ]
  };

  const renderTechStack = (stack) => {
    return (
      <div className="tech-stack-container">
        {stack.map((tech, index) => (
          <div key={index} className="tech-icon-item">
            <img src={tech.icon} alt={tech.name} />
            <h5>{tech.name}</h5>
          </div>
        ))}
      </div>
    );
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const upcomingProjects = [
    {
      title: "AI Chatbot",
      description: "An AI-powered chatbot that provides instant customer support and enhances user engagement on websites and applications."
    },
    {
      title: "Real-time Collaboration",
      description: "A collaborative editor for multiple users with conflict resolution and presence indicators."
    },
    {
      title: "RAG, LLM Training",
      description: "A scalable live-streaming solution with chat, moderation tools, and real-time analytics."
    }
  ];

  return (
    <section style={{ padding: '32px 16px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Upcoming Projects */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6 mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
          Upcoming Projects
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {upcomingProjects.map((project, index) => (
            <div 
              key={index}
              className="relative p-5 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-shadow"
            >
              <div className="status-indicator"></div>
              <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '10px' }}>
                {project.title}
              </h2>
              <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#6b7280' }}>
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Completed Projects */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
          Completed Projects
        </h3>
        
        <div 
          className={`overflow-hidden transition-all duration-1000 ease-in-out ${
            isExpanded ? 'max-h-[3000px] opacity-100' : 'max-h-[200px]'
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div style={{ padding: '18px', borderRadius: '8px', border: '1px solid #e5e7eb', background: 'white' }}>
              <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '10px' }}>
                Doctor AI
              </h2>
              <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#6b7280', marginBottom: '12px' }}>
                Developed a dynamic prototype dashboard in Next.js, integrated the Google Gemini SDK/API, and implemented features such as PDF parsing and PDF analysis using LLM models. Designed API routing, used the Gemini LLM model for report analysis, integrated Gemini APIs, developed functionality for generating reports in PDF format with downloadable output.
              </p>
              {renderTechStack(techStacks.doctorAI)}
            </div>

            <div style={{ padding: '18px', borderRadius: '8px', border: '1px solid #e5e7eb', background: 'white' }}>
              <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '10px' }}>
                RESTFUL API with Express.js and MongoDB
              </h2>
              <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#6b7280', marginBottom: '12px' }}>
                Developed an HTTPS server with a REST API protocol. Implemented search, sort, pagination, delete, and PUT functionalities using Express.js. Designed a database schema in MongoDB and deployed the application on Vercel.
              </p>
              {renderTechStack(techStacks.restAPI)}
            </div>

            <div style={{ padding: '18px', borderRadius: '8px', border: '1px solid #e5e7eb', background: 'white' }}>
              <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '10px' }}>
                Temple Donation Management System
              </h2>
              <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#6b7280', marginBottom: '12px' }}>
                Developed using React, integrated own REST API, added customizable certificate generation feature, pagination, search, sort, in React.js, React-Redux, React-Context.
              </p>
              {renderTechStack(techStacks.templeDonation)}
            </div>

            <div style={{ padding: '18px', borderRadius: '8px', border: '1px solid #e5e7eb', background: 'white' }}>
              <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '10px' }}>
                Ecommerce---MultiFeatures
              </h2>
              <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#6b7280', marginBottom: '12px' }}>
                Developed an e-commerce platform in React.js, integrated third-party APIs in React, developed functionality like sort and filter, implemented a Fabric.js library for image editing, developed whole project in raw CSS, developed responsive frontend and mobile friendly.
              </p>
              {renderTechStack(techStacks.ecommerce)}
            </div>
          </div>
        </div>

        {/* Arrow Button */}
        <div className="flex justify-center mt-3">
          <button
            onClick={toggleExpand}
            className="flex items-center gap-1 px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-md transition-colors shadow-sm hover:shadow-md"
          >
            <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
            <svg 
              className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}