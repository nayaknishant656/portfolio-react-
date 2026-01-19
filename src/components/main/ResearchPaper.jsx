import React, { useState } from 'react'

export default function ResearchPaper() {
  const [expandedId, setExpandedId] = useState(null);

  const researchPapers = [
    {
      id: 1,
      title: 'AI Agentic Agricultural Ecosystem for Future of Farming',
      authors: 'Nishant Kumar Nayak',
      description: 'A cutting-edge agricultural system leveraging AI agents to ',
      githubUrl: 'https://github.com/nayaknishant656/AI-Agentic-Advanced-Agriculture-Ecosystem'
    },
    {
      id: 2,
      title: 'Building Management System Using Deep Learning and IoT',
      authors: 'Nishant Kumar Nayak',
      description: 'An intelligent building management solution ',
      githubUrl: 'https://github.com'
    },
    {
      id: 3,
      title: 'Enterprise Resource Planning System with AI Integration and headcount reduce',
      authors: 'Nishant Kumar Nayak',
      description: 'A comprehensive ERP system enhanced ',
      githubUrl: 'https://github.com'
    }
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
  };

  return (
   <div className='px-2'>
        <div className='max-w-4xl mx-auto'>
    <h3 className="text-xl md:text-2xl font-bold text-black mb-6">
          Research Papers 
        </h3>   

            <div className='space-y-2'>        
                {researchPapers.map((paper) => (
                  <div key={paper.id} className='bg-white rounded-sm hover:shadow-sm transition-shadow duration-300 flex items-center'>
                    
                    <a href={paper.githubUrl} target="_blank" rel="noopener noreferrer" className='ml-4 text-gray-600 hover:text-gray-900 transition-colors duration-200'>
                        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                            <path fillRule='evenodd' d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' clipRule='evenodd' />
                        </svg>
                    </a>
                    <div>
                        <h3 className='text-base font-medium text-gray-900 mb-1 leading-snug'>{paper.title}</h3>
                        <p className='text-xs text-gray-500'>{paper.authors}</p>
                        <p className='text-sm text-gray-600'>
                          {expandedId === paper.id ? paper.description : truncateText(paper.description, 15)}
                          <button 
                            onClick={() => toggleExpand(paper.id)}
                            className='text-blue-600 hover:text-blue-800 ml-1'
                          >
                            {expandedId === paper.id ? 'Read less' : 'Read more'}
                          </button>
                        </p>
                    </div>
                  </div>
                ))}
            </div>
   </div>
   </div>
  )
}