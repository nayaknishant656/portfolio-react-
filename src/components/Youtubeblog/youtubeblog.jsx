import React from 'react';

const data = [
  {
    Heading: "Youtube Blog Posts",
    Blogs: [
      {
        topic: "Adding a feature",
        video: "https://www.youtube.com/watch?v=-PYLoLxsf-Q",
        description: "Feature development session",
        notes: "Published: January 28, 2025"
      },
      {
        topic: "Adding a feature",
        video: "https://www.youtube.com/watch?v=GaLbn0OC80Y",
        description: "Feature development session",
        notes: "Published: January 27, 2025"
      },
      {
        topic: "postnut clearity",
        video: "https://www.youtube.com/watch?v=aTfkSCbdpYk",
        description: "Coding session",
        notes: "Published: December 25, 2024"
      },
      {
        topic: "25 Days to Mains, Building a webapp in 5 hour",
        video: "https://www.youtube.com/watch?v=EQEiMGWaFm8",
        description: "Building a complete webapp in 5 hours while preparing for exams",
        notes: "Published: December 26, 2024"
      },
      {
        topic: "Integrating certificate generation Feature in Paardharshi",
        video: "https://www.youtube.com/watch?v=j_QELAuAahc",
        description: "Adding certificate generation functionality to Paardharshi project",
        notes: "Published: August 31, 2024"
      },
      {
        topic: "Integrating certificate generation Feature in Paardharshi",
        video: "https://www.youtube.com/watch?v=rRORI3f_QZ8",
        description: "Certificate generation feature integration",
        notes: "Published: August 31, 2024"
      },
      {
        topic: "i code when i feel stress",
        video: "https://www.youtube.com/watch?v=pfKoDFRmcqc",
        description: "Stress-relief coding session",
        notes: "Published: May 25, 2024"
      },
      {
        topic: "i code when i feel stress",
        video: "https://www.youtube.com/watch?v=mvq-3noIQy0",
        description: "Stress-relief coding session",
        notes: "Published: May 24, 2024"
      },
      {
        topic: "Coding class 1 | Aj se class lunga sbki",
        video: "https://www.youtube.com/watch?v=W5bfOaXfAv4",
        description: "First coding class session",
        notes: "Published: May 4, 2024"
      },
      {
        topic: "deploying paaradarsheeni | brushing up my coding skills",
        video: "https://www.youtube.com/watch?v=bd7E4fyz46o",
        description: "Deployment session for Paaradarsheeni project",
        notes: "Published: March 29, 2024"
      },
      {
        topic: "deploying paaradarsheeni | brushing up my coding skills",
        video: "https://www.youtube.com/watch?v=u2lJ0UxjoG4",
        description: "Deployment and skill improvement session",
        notes: "Published: March 24, 2024"
      },
      {
        topic: "building paaradarsheeni | brushing up my coding skills",
        video: "https://www.youtube.com/watch?v=lMakwxjvJMw",
        description: "Building Paaradarsheeni project",
        notes: "Published: March 18, 2024"
      },
      {
        topic: "building paaradarsheeni | brushing up my coding skills",
        video: "https://www.youtube.com/watch?v=pH3HybkqwpY",
        description: "Building Paaradarsheeni project",
        notes: "Published: March 17, 2024"
      },
      {
        topic: "building paaradarsheeni | brushing up my coding skills",
        video: "https://www.youtube.com/watch?v=hn5DrrYOrjw",
        description: "Building Paaradarsheeni project",
        notes: "Published: Date not available"
      },
      {
        topic: "deploying paaradarsheeni | brushing up my coding skills",
        video: "https://www.youtube.com/watch?v=u2lJ0UxjoG4",
        description: "Deployment and skill improvement session",
        notes: "Published: March 24, 2024"
      },
      {
        topic: "building paaradarsheeni | brushing up my coding skills",
        video: "https://www.youtube.com/watch?v=lMakwxjvJMw",
        description: "Building Paaradarsheeni project",
        notes: "Published: March 18, 2024"
      },
      {
        topic: "building paaradarsheeni | brushing up my coding skills",
        video: "https://www.youtube.com/watch?v=pH3HybkqwpY",
        description: "Building Paaradarsheeni project",
        notes: "Published: March 17, 2024"
      },
      {
        topic: "building paaradarsheeni | brushing up my coding skills",
        video: "https://www.youtube.com/watch?v=hn5DrrYOrjw",
        description: "Building Paaradarsheeni project",
        notes: "Published: Date not available"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=HLMpokI9Kms",
        description: "A deep dive into coding concepts and problem solving",
        notes: "Working through various challenges and implementations"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=IQkiooo5Wx0",
        description: "Building features and exploring new technologies",
        notes: "Session focused on development and learning"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=5f9Qtk6pwWQ",
        description: "Project development and debugging session",
        notes: "Tackling technical challenges and optimizations"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=09Q-FrHeCd8",
        description: "Exploring algorithms and data structures",
        notes: "Learning session with practical implementations"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=gqmVkvsVmC4",
        description: "Web development and frontend work",
        notes: "Building interactive user interfaces"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=hndjI6feL7M",
        description: "Backend development and API integration",
        notes: "Working on server-side logic and databases"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=BrOpHHs50GU",
        description: "Full stack development session",
        notes: "Connecting frontend and backend components"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=UMRpyaK9pOY",
        description: "Code refactoring and optimization",
        notes: "Improving code quality and performance"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=oFapgXEQx-s",
        description: "Working on new features and functionality",
        notes: "Development session with creative solutions"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=KBtcCdi6cJI",
        description: "Problem solving and algorithm practice",
        notes: "Coding challenges and solutions"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=Xl2qc30htks",
        description: "Project planning and implementation",
        notes: "Building from concept to deployment"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=plLO32EydIQ",
        description: "Learning new frameworks and tools",
        notes: "Exploring modern development technologies"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=H3AAk0kWU0g",
        description: "Database design and management",
        notes: "Working with data models and queries"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=4U8nXcPUh1E",
        description: "Testing and debugging applications",
        notes: "Ensuring code reliability and stability"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=MhR6ErVFIMA",
        description: "UI/UX improvements and styling",
        notes: "Enhancing visual design and user experience"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=PJu2DLoE0Gs",
        description: "Authentication and security implementation",
        notes: "Building secure login systems"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=BIHCJZP9W98",
        description: "API development and documentation",
        notes: "Creating robust backend endpoints"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=jS-XsIpjNkY",
        description: "State management and data flow",
        notes: "Implementing clean architecture patterns"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=0O0icNu85zo",
        description: "Responsive design implementation",
        notes: "Making applications work across devices"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=bErDtN0dQKg",
        description: "Performance optimization techniques",
        notes: "Speeding up application load times"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=7GPUluRi4NQ",
        description: "Version control and collaboration",
        notes: "Git workflows and team development"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=IFu2yxLg56I",
        description: "Component architecture and reusability",
        notes: "Building modular and maintainable code"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=IYf92pucKT0",
        description: "Error handling and validation",
        notes: "Creating robust error management systems"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=4bOw8ZIipEE",
        description: "Real-time features implementation",
        notes: "WebSockets and live updates"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=mA98WqAOVg8",
        description: "Cloud deployment and hosting",
        notes: "Deploying applications to production"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=vW4fRRd3l_8",
        description: "Third-party integrations",
        notes: "Connecting with external services and APIs"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=dYic7qNBIDE",
        description: "Animation and interactive effects",
        notes: "Adding motion and transitions to UI"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=OAbLh8EdVJs",
        description: "Search and filtering functionality",
        notes: "Implementing efficient data queries"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=mflcS6xGwJU",
        description: "Form handling and validation",
        notes: "Creating user-friendly input experiences"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=Vw3GmPTC9iQ",
        description: "File upload and management",
        notes: "Handling media and document uploads"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=zg-HHU4JjQI",
        description: "Notification systems",
        notes: "Building alerts and messaging features"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=6dQRxaDvouc",
        description: "Analytics and tracking",
        notes: "Implementing user behavior monitoring"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=Rs_bYsiLIsM",
        description: "Accessibility improvements",
        notes: "Making apps usable for everyone"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=btfy4LZx3tI",
        description: "Progressive web app features",
        notes: "Adding offline functionality and PWA capabilities"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=Vxm3B2nWJ5Y",
        description: "Payment integration",
        notes: "Implementing checkout and payment flows"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=gvk5XZJ-8lc",
        description: "Email and communication features",
        notes: "Setting up automated messaging systems"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=D-xA0Ozgi2g",
        description: "Caching strategies",
        notes: "Improving app speed with smart caching"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=WCPuKX-CxsU",
        description: "Microservices architecture",
        notes: "Breaking down monolithic applications"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=hEspWnWOCKQ",
        description: "GraphQL implementation",
        notes: "Building flexible API queries"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=Unt4QraQWxU",
        description: "Docker containerization",
        notes: "Creating portable development environments"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=hl9rDLSqJZ8",
        description: "CI/CD pipeline setup",
        notes: "Automating deployment workflows"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=cCNJie-Tr5k",
        description: "Monitoring and logging",
        notes: "Tracking application health and errors"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=PuocC_8tzNg",
        description: "Internationalization",
        notes: "Adding multi-language support"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=wxcagFobtOE",
        description: "SEO optimization",
        notes: "Improving search engine visibility"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=nqRtA5rw-Ds",
        description: "Admin dashboard creation",
        notes: "Building management interfaces"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=SR-4yNUFObs",
        description: "Role-based access control",
        notes: "Implementing user permissions systems"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=squ29BHrB2g",
        description: "Data visualization",
        notes: "Creating charts and graphs"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=NpzsbWgVkjw",
        description: "Socket programming",
        notes: "Building real-time communication features"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=afSoBlufZ84",
        description: "Code review and best practices",
        notes: "Learning from code analysis"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=k23mYqzBCBc",
        description: "Mobile responsiveness",
        notes: "Optimizing for mobile devices"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=0YXMNBMsGYs",
        description: "Lazy loading implementation",
        notes: "Improving initial page load performance"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=Evvf3SN8cIo",
        description: "Custom hooks development",
        notes: "Creating reusable React logic"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=aSHCQzH8ZUc",
        description: "TypeScript integration",
        notes: "Adding type safety to JavaScript"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=xInMIszkA6I",
        description: "Webpack configuration",
        notes: "Setting up build tools and bundlers"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=IzVhiBtyD5I",
        description: "Redux state management",
        notes: "Implementing global state solutions"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=70vI26u5blQ",
        description: "Unit testing",
        notes: "Writing tests for components and functions"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=WeXhCvIHvbI",
        description: "Integration testing",
        notes: "Testing application workflows"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=POVczIGsMqg",
        description: "E2E testing setup",
        notes: "Automating user journey tests"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=-GJ0gVHUsvg",
        description: "Code splitting",
        notes: "Optimizing bundle sizes"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=kolhmzIOfgU",
        description: "Service workers",
        notes: "Adding offline capabilities"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=YoeSA_oMKOY",
        description: "OAuth integration",
        notes: "Implementing social login"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=87PAsttu8M4",
        description: "Pagination implementation",
        notes: "Handling large data sets efficiently"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=YXXxXthbnP0",
        description: "Infinite scroll",
        notes: "Creating seamless data loading"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=-T6-Jb2naUo",
        description: "Drag and drop features",
        notes: "Building interactive UI elements"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=EHkc7eD6UUc",
        description: "Modal and popup systems",
        notes: "Creating overlay components"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=zLNaU_jRHcU",
        description: "Toast notifications",
        notes: "Implementing temporary message displays"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=UkTbnri5sjM",
        description: "Dark mode implementation",
        notes: "Adding theme switching functionality"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=DdyhwxITMxk",
        description: "Custom routing",
        notes: "Building navigation systems"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=BmSRlVLD2FE",
        description: "Markdown editor",
        notes: "Creating rich text input fields"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=r3fU7v0JwG4",
        description: "Export functionality",
        notes: "Generating PDFs and downloadable files"
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=zLNaU_jRHcU",
        description: "Coding session",
        notes: ""
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=UkTbnri5sjM",
        description: "Coding session",
        notes: ""
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=DdyhwxITMxk",
        description: "Coding session",
        notes: ""
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=BmSRlVLD2FE",
        description: "Coding session",
        notes: ""
      },
      {
        topic: "Coding Session",
        video: "https://www.youtube.com/watch?v=r3fU7v0JwG4",
        description: "Coding session",
        notes: ""
      },
    ]
  }
];

const extractVideoId = (url) => {
  const match = url.match(/[?&]v=([^&]+)/);
  return match ? match[1] : null;
};

export default function YouTubeBlogDisplay() {
  return (
      <div className='max-w-2xl mx-auto py-8 px-6'>
      {data.map((item, index) => (
        <div key={index}>
          <h2 className='text-xl font-semibold mb-4 text-gray-900'>{item.Heading}</h2>
          {item.Blogs.map((blog, blogIndex) => {
            const videoId = extractVideoId(blog.video);
            return (
              <div key={blogIndex} className='flex flex-col py-1 mb-6'>
                {videoId && (
                  <div className='mb-2'>
                    <iframe
                      width="80"
                      height="80"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={blog.topic}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className='rounded'
                    ></iframe>
                  </div>
                )}
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
            );
          })}
        </div>
      ))}
    </div>
  );
}