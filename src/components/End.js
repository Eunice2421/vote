import React from 'react';
import end from '../assets/win.jpeg';

export default function End() {
    return (
        <div className='user_bg overflow-hidden'>
            <nav className='text-left font-bold text-black p-5 text-xl sm:text-4xl lg:text-2xl'>
                <h1>eVoting</h1>
            </nav>
            <div className='flex flex-col sm:flex-row justify-center items-center w-full h-full complete'>
                <div className='flex justify-center mb-8 sm:mb-0 '>
                    <img src={end} alt='end err' className='w-72 rounded-xl h-72 sm:w-96 sm:h-96' />
                </div>
                <div className='text-center sm:text-left sm:ml-10 '>
                    <p className='font-bold text-black p-5 text-2xl sm:text-4xl lg:ml-32'>
                        Voting has completed
                    </p>
                    <div className='text-xl sm:text-2xl font-semibold lg:ml-40'>
                        <p>Candidate A has won the voting.</p>
                        <p className=''>Congratulation !!!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

