import React, { useState } from 'react'
import p1 from '../assets/profile_1.jpg'
import p2 from '../assets/profile_3.jpeg'
import p3 from '../assets/profie_2.jpeg'

export default function Voting() {
    const [vote, setVote] = useState(false)
    const [Candidate, setCandidate] = useState('null')

    const handleVote = (candidate) => {
        if (!vote) {

            setVote(true)
            setCandidate(candidate)
        }
    }
    return (
        <div>
            <nav className='text-left font-bold bg-gray-300 text-black p-5 text-2xl' >
                eVoting
            </nav>
            <header className='text-center font-bold text-black p-5 text-2xl'>Voting is Live</header>


            {/* Candidate 1 */}

            <div className='flex justify-around'>
                <div >
                    <img src={p1} alt="p1 err" className='pic ' />
                    <div className='text-center font-semibold text-2xl'>
                        <p> 1st Candidate </p>
                        <p>Team A</p>
                        <p> President</p>
                        <button className={`w-24 h-10 rounded-md text-center ${vote && Candidate !== '1st Candidate' ? 'bg-gray-400' : 'bg-black text-white'}`} disabled={vote && Candidate !== '1st Candidate'} onClick={() => handleVote('1st Candidate')}>Vote</button>
                    </div>
                </div>
                {/* Candidate 2 */}

                <div>
                    <img src={p2} alt="p2 err" className='pic' />
                    <div className='text-center font-semibold text-2xl'>
                        <p> 2nd Candidate </p>
                        <p>Team B</p>
                        <p> President</p>
                        <button className={`w-24 h-10 rounded-md text-center ${vote && Candidate !== '2nd Candidate' ? 'bg-gray-400' : 'bg-black text-white'}`} disabled={vote && Candidate !== '2nd Candidate'} onClick={() => handleVote('2nd Candidate')}>Vote</button>
                    </div>
                </div>

                {/* Candidate 3 */}

                <div>
                    <img src={p3} alt="p3 err" className='pic' />
                    <div className='text-center font-semibold text-2xl'>
                        <p> 3rd Candidate </p>
                        <p>Team C</p>
                        <p> President</p>
                        <button className={`w-24 h-10 rounded-md text-center ${vote && Candidate !== '3rd Candidate' ? 'bg-gray-400' : 'bg-black text-white'}`} disabled={vote && Candidate !== '3rd Candidate'} onClick={() => handleVote('3rd Candidate')}>Vote</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
