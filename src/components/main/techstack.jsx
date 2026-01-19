import React, { useState } from 'react';

export default function TechStack() {
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = [
    {
      title: "AI/ML & Infrastructure",
      proficiency: 6,
      icons: [
        { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", name: "TensorFlow" },
        { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", name: "Python" },
        { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", name: "PyTorch" },
      ]
    },
    {
      title: "Frontend",
      proficiency: 9,
      icons: [
        { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React" },
        { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", name: "Next.js" },
        { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name: "JavaScript" },
        { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", name: "TypeScript" },
        { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name: "HTML5" },
        { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", name: "CSS3" },
        { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", name: "Tailwind CSS" },
      ]
    },
    {
      title: "Backend",
      proficiency: 8,
      icons: [
        { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", name: "Node.js" },
        { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", name: "Express" },
        { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", name: "PHP" },
        { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", name: "Django" },
      ]
    },
    {
      title: "Database",
      proficiency: 8,
      icons: [
        { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", name: "MongoDB" },
        { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", name: "MySQL" },
        { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", name: "PostgreSQL" },
        { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", name: "Redis" },
      ]
    },
    {
      title: "DevOps & Cloud",
      proficiency: 7,
      icons: [
        { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", name: "AWS" },
        { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", name: "Docker" },
        { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", name: "Git" },
        { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", name: "GitHub" },
        { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", name: "Firebase" },
      ]
    }
  ];

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="my-8">
      <div className="rounded-lg border border-gray-200 p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold text-white-200 mb-6">Tech Stack</h2>
        
        <div 
          className={`overflow-hidden transition-all duration-1000 ease-in-out ${
            isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-[150px]'
          }`}
        >
          <div className="flex flex-col gap-3">
            {categories.map((category, idx) => (
              <div 
                key={idx}
                className="rounded-lg p-3 hover:shadow-md transition-shadow"
                style={{ background: 'white', border: '2px solid black' }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm md:text-base font-semibold" style={{ color: 'black' }}>
                    {category.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    {category.title === "AI/ML & Infrastructure" && (
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-600 text-xs rounded-full border border-blue-500/30">
                        Learning
                      </span>
                    )}
                    <div className="flex items-center gap-1">
                      <span className="text-xs" style={{ color: '#6b7280' }}>Proficiency:</span>
                      <span className="text-sm font-bold" style={{ color: 'black' }}>{category.proficiency}/10</span>
                    </div>
                  </div>
                </div>
                
                {/* Proficiency bar */}
                <div className="w-full h-1.5 bg-gray-200 rounded-full mb-3 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                    style={{ width: `${category.proficiency * 10}%` }}
                  ></div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.icons.map((icon, iconIdx) => (
                    <div 
                      key={iconIdx}
                      className="flex flex-col items-center gap-1 transform hover:scale-105 transition-transform"
                      title={icon.name}
                    >
                      <img 
                        src={icon.url} 
                        alt={icon.name}
                        className="w-10 h-10 object-contain"
                        loading="lazy"
                      />
                      <span className="text-xs text-center font-medium" style={{ color: '#000000ff' }}>
                        {icon.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
    </div>
  );
}