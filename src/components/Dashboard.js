import React, { useContext } from 'react'
import user from '../assets/user_manage.jpeg'
import voting from '../assets/voting_manage.jpeg'
import { Contextuse } from '../Providers'

function Dashboard() {

  let { votingSessions } = useContext(Contextuse)
  let live="live"

  let currentLoggedIn = votingSessions.find(item => item.status === live)
  console.log(currentLoggedIn)
 
  if (!currentLoggedIn) {
    return <p>No active voting session found</p>;
  }

  // Destructure values from currentLoggedIn
  const { votingId, title, startTime, endTime, totalVotes } = currentLoggedIn;

  return (
    <div>
      <nav className='flex font-bold head text-black p-5 text-2xl' >
        <p className='ml-20'>
          eVoting</p>
        <p className=' dash'>DashBoard</p>
      </nav>

      <div className=' flex justify-center items-center gap-20 mt-10 ' >
        <div>  <img src={voting} alt='err' className='manage mb-4' />
        <p className=' ml-20 text-xl font-bold'>Voting Management</p></div>
      
        <div><img src={user} alt='err' className='manage mb-4' />
          <p className=' ml-20 text-xl font-bold '>User Management</p></div>
      </div>
      <div>
        <h1 className=' text-center text-2xl font-extrabold mt-8'>Rencending Voting</h1>
        <div className=' docs text-xl font-semibold'>
          
          <li>Voting Id : {currentLoggedIn.votingId}</li>
          <li>Voting Title : {title}</li>
          <li>Voting Start Time : {startTime}</li>
          <li>Voting End Time : {endTime}</li>
          <li>Voting Tottal No of Votes : {totalVotes}</li>
        </div>

      </div>

    </div>
  )
}

export default Dashboard