import React from 'react';
import { ExpressJsDark, NextJs, NodeJs } from 'developer-icons';
export default function Projects() {
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
      top: 12px;
      right: 12px;
      width: 10px;
      height: 10px;
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
  `;
  document.head.appendChild(style);

  return (
    <section className='proects__main'>
      <div className='uc__projects'>
        <div className='grand-parent__uc'>
          <div className='parent__uc'>
            <div className="mb-4 md:mb-6">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold m-0">
                Upcoming Projects
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
              <div className="relative p-3 md:p-4 lg:p-5 rounded-lg border border-gray-200 bg-white">
                <div className="status-indicator"></div>
                <h3 className="text-sm md:text-base lg:text-lg font-semibold mb-2">
                  AI Chatbot
                </h3>
                <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                  An AI-powered chatbot that provides instant customer support and enhances user engagement on websites and applications.
                </p>
                
              </div>

              <div className="relative p-3 md:p-4 lg:p-5 rounded-lg border border-gray-200 bg-white">
                <div className="status-indicator"></div>
                <h3 className="text-sm md:text-base lg:text-lg font-semibold mb-2">
                  Real-time Collaboration
                </h3>
                <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                  A collaborative editor for multiple users with conflict resolution and presence indicators.
                </p>
              </div>

              <div className="relative p-3 md:p-4 lg:p-5 rounded-lg border border-gray-200 bg-white">
                <div className="status-indicator"></div>
                <h3 className="text-sm md:text-base lg:text-lg font-semibold mb-2">
                  RAG, LLM Training
                </h3>
                <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                  A scalable live-streaming solution with chat, moderation tools, and real-time analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grandparent__accordian mt-8 md:mt-10 lg:mt-12">
        <div className="parent__accordian">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6">
            This is the list of projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
            <div className="p-3 md:p-4 lg:p-5 rounded-lg border border-gray-200 bg-white">
              <h2 className="text-sm md:text-base lg:text-lg font-semibold mb-2">
                Doctor AI
              </h2>
              <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                Developed a dynamic prototype dashboard in Next.js, integrated the Google Gemini SDK/API, and implemented features such as PDF parsing and PDF analysis using LLM models. Designed API routing, used the Gemini LLM model for report analysis, integrated Gemini APIs, developed functionality for generating reports in PDF format with downloadable output
              </p>

              <div className='tech-stack-show'>
                  <div className='tech-stack-show-children'>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2">
                      React.js
                    </span>
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-2">
                      Node.js
                    </span>
                    <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded mr-2">
                      Express.js
                    </span>
                  </div>
                </div>
            </div>

            <div className="p-3 md:p-4 lg:p-5 rounded-lg border border-gray-200 bg-white">
              <h2 className="text-sm md:text-base lg:text-lg font-semibold mb-2">
                RESTFUL API with Express.js and MongoDB
              </h2>
              <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                Developed an HTTPS server with a REST API protocol. Implemented search, sort, pagination, delete, and PUT functionalities using Express.js. Designed a database schema in MongoDB and deployed the application on Vercel.
              </p>

               <div className='tech-stack-show'>
                  <div className='tech-stack-show-children'>
                    <div classname="techicon">
                      <NextJs size={32} /><span className='text-sm'>Nextjs</span>
                       <ExpressJsDark size={32} /><span className='text-sm'>ExpressJsDark</span>
                       <NodeJs size={32} /><span className='text-sm'>NodeJs</span>
                      </div>
                    <span className="inline-block  text-green-800 text-xs px-2 py-1 rounded mr-2">
                     <NodeJs size={32} /> Node.js
                    </span>
                    <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded mr-2">
                      Express.js
                    </span>
                  </div>
                </div>
            </div>

            <div className="p-3 md:p-4 lg:p-5 rounded-lg border border-gray-200 bg-white">
              <h2 className="text-sm md:text-base lg:text-lg font-semibold mb-2">
                Cultural Donation Management System
              </h2>
              <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                developed using react , integrated own rest api , added customizable certificate generation feature,pagination , search , sort , in react js , react-redux , react-context
              </p>
            </div>

            <div className="p-3 md:p-4 lg:p-5 rounded-lg border border-gray-200 bg-white">
              <h2 className="text-sm md:text-base lg:text-lg font-semibold mb-2">
                Ecommerce---MultiFeatures
              </h2>
              <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                Developed an e-commerce platform in react.js, integrated third-party apis in react, developed functionality like sort and filter, implemented a fabric.js library for image editing, developed whole project in raw css, developed responsive frontend and mobile friendly.
              </p>
            </div>




          </div>
        </div>
      </div>
    </section>
  );
}