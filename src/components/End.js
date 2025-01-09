import React from 'react'
import end from '../assets/win.jpeg'

export default function End() {
    return (
        <div>

            <nav className='text-left font-bold head text-black p-5 text-2xl' >
                eVoting
            </nav>
            <div className='end_body'>
                <header className='text-center font-bold text-black p-5 text-2xl '>Voting has completed</header>
                <img src={end} alt='end err' className='win' />
                <div className=' text-xl font-semibold win_line'>
                    <p>Candidate A has won the voting.</p>
                    <p className=' ml-16 pt-3 pb-28'>Congratulation !!!</p>
                </div>
            </div>
        </div>
    )
}
