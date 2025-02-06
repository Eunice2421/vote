import React from 'react'
import evote from '../assets/vote_img.jpg'
import nrml_vote from '../assets/nrml_vote.png'
import { useNavigate } from 'react-router-dom'
export default function Home() {
    const use = useNavigate()
    return (
        <div className='user_bg  md:overflow-hidden'>
            <header>
                <h1 className=' ml-8  mt-4 font-bold md:text-xl lg:text-2xl'>eVoting</h1>
            </header>

            <main>
                <div className='flex justify-center items-center mt-10 flex-col md:flex-row  md:mt-10'>
                    <img src={evote} alt='err' className='evote' />
                    <div className='ml-8'>
                        <p className='text-center lg:text-xl md:text-lg home_para'>The future of democracy is written in code, but its heart beats in trust.A secure vote is <br></br>worth more than a thousand promises.Trust, but verify the vote.</p>
                        <div className='text-center'><button className="bg-cyan-400 text-violet-600 p-3 rounded-lg font-semibold get_btn mt-7 mb-3" onClick={() => use('/login')}>Get Started...</button></div>
                    </div>
                </div>

                <div className='flex justify-center items-center flex-col md:flex-row '>

                    <div>
                        <p className=' text-center md:text-lg lg:text-xl home_para '>One man’s vote may change the course of history.A vote is the smallest but most,<br></br> valuable piece of democracy.The ballot box is the guardian of freedom.</p>
                    </div>
                    <img src={nrml_vote} alt='error' className='evote' />
                </div>
            </main>
        </div>
    )
}
