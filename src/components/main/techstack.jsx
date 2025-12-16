import React from 'react';

export default function TechStack() {
  // Simple icon placeholders using colored divs
  const Icon = ({ color, label }) => (
    <div 
      style={{width: '30px', height: '30px', backgroundColor: color, borderRadius: '6px'}} 
      className="flex items-center justify-center text-white text-xs font-bold"
      title={label}
    >
      {label.slice(0, 2)}
    </div>
  );

  return (
    <div className='my-8'>
      <div className='bg-white rounded-lg border border-gray-200 p-3'>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4'>
          <div className='border border-gray-300 rounded p-2'>
            <h3 className='text-base md:text-lg font-semibold text-gray-700 mb-1'>AI Agents / AI Infrastructure</h3>
            <div className='flex gap-2'>
              <Icon color="#8B5CF6" label="Anthropic" />
              <Icon color="#339933" label="NodeJs" />
            </div>
          </div>
          
          <div className='border border-gray-300 rounded p-2'>
            <h3 className='text-base md:text-lg font-semibold text-gray-700 mb-1'>Frontend</h3>
            <div className='flex gap-2'>
              <Icon color="#000000" label="NextJs" />
            </div>
          </div>
          
          <div className='border border-gray-300 rounded p-2'>
            <h3 className='text-base md:text-lg font-semibold text-gray-700 mb-1'>Backend</h3>
            <div className='flex gap-2'>
              <Icon color="#339933" label="NodeJs" />
              <Icon color="#FD366E" label="Appwrite" />
            </div>
          </div>
          
          <div className='border border-gray-300 rounded p-2'>
            <h3 className='text-base md:text-lg font-semibold text-gray-700 mb-1'>Security</h3>
            <div className='flex gap-2'>
              <Icon color="#339933" label="NodeJs" />
              <Icon color="#FD366E" label="Appwrite" />
            </div>
          </div>
          
          <div className='border border-gray-300 rounded p-2'>
            <h3 className='text-base md:text-lg font-semibold text-gray-700 mb-1'>DevOps / Cloud</h3>
            <div className='flex gap-2'>
              <Icon color="#FD366E" label="Appwrite" />
              <Icon color="#339933" label="NodeJs" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}