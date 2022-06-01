import React from 'react';

const Loading = () => {

    // rendering loading component here
    return (
        <div className='flex justify-center'>
            <div className='flex justify-center items-center'>
                <div className='spinner-grow inline-block w-8 h-8 bg-neutral rounded-full opacity-0' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </div>
            </div>
            <div className='flex justify-center items-center ml-10'>
                <div className='spinner-grow inline-block w-8 h-8 bg-neutral rounded-full opacity-0' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </div>
            </div>
            <div className='flex justify-center items-center ml-10'>
                <div className='spinner-grow inline-block w-8 h-8 bg-neutral rounded-full opacity-0' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default Loading;