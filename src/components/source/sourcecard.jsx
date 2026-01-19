import React from 'react'

export default function Sourcecard({ data }) {
    const { Scale, Optimization, Latency } = data.Backend;
    
    return (
        <div className='max-w-2xl mx-auto py-8 px-6'>
            <h1 className='text-xl'>My Thoughts on Technology, Why It Was Built, and Its Business Impact</h1>
            {/* Scale Section */}
            <div>
                <h2 className='text-xl font-semibold mb-4 text-gray-900'>Scale</h2>
                {Scale.map((item, index) => (
                    <div key={index} className='py-1 mb-3'>
                        <a href={item.blog} className='text-sm font-medium text-gray-800 hover:text-gray-600 hover:underline mb-1 block'>
                            {item.topic}
                        </a>
                        <p className='text-xs text-gray-600 mb-1'>{item.description}</p>
                        <p className='text-xs text-gray-500'>{item.notes}</p>
                    </div>
                ))}
            </div>

            {/* Optimization Section */}
            <div className='mt-8'>
                <h2 className='text-xl font-semibold mb-4 text-gray-900'>Optimization</h2>
                {Optimization.map((item, index) => (
                    <div key={index} className='py-1 mb-3'>
                        <a href={item.blog} className='text-sm font-medium text-gray-800 hover:text-gray-600 hover:underline mb-1 block'>
                            {item.topic}
                        </a>
                        <p className='text-xs text-gray-600 mb-1'>{item.description}</p>
                        <p className='text-xs text-gray-500'>{item.notes}</p>
                    </div>
                ))}
            </div>

            {/* Latency Section */}
            <div className='mt-8'>
                <h2 className='text-xl font-semibold mb-4 text-gray-900'>Latency</h2>
                {Latency.map((item, index) => (
                    <div key={index} className='py-1 mb-3'>
                        <a href={item.blog} className='text-sm font-medium text-gray-800 hover:text-gray-600 hover:underline mb-1 block'>
                            {item.topic}
                        </a>
                        <p className='text-xs text-gray-600 mb-1'>{item.description}</p>
                        <p className='text-xs text-gray-500'>{item.notes}</p>
                    </div>
                ))}
            </div>
            
        </div>
    )
}