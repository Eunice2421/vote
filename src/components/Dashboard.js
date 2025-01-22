import React, { use, useContext } from 'react';
import user from '../assets/user_manage.jpeg';
import voting from '../assets/voting_manage.jpeg';
import { Contextuse } from '../Providers';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  let { votingSessions } = useContext(Contextuse);
  let live = "live";

  let current = votingSessions.find(item => item.status === live);
  console.log(current);
  let use = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="flex font-bold text-black p-5 text-2xl bg-sky-400">
        <p className="ml-4 sm:ml-20">eVoting</p>
        <p className="ml-auto dash">Dashboard</p>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-20 mt-10 px-4">
        {/* Voting Management */}
        <div className="text-center">
          <img src={voting} alt="err" className="manage mx-auto mb-4" onClick={() => use("/voter")} />
          <p className="text-xl font-bold">Voting Management</p>
        </div>

        {/* User Management */}
        <div className="text-center">
          <img src={user} alt="err" className="manage mx-auto mb-4" onClick={() => use("/user")} />
          <p className="text-xl font-bold">User Management</p>
        </div>
      </div>

      {/* Voting Details */}
      <div className="mt-8 px-4">
        <h1 className="text-center text-2xl font-extrabold">Recent Voting</h1>
        <div className="docs mt-6 text-xl font-semibold flex items-center justify-center">
          {current ? (
            <ul type='square' >
              <li>Voting Id: {current.votingId}</li>
              <li>Voting Title: {current.title}</li>
              <li>Voting Start Time: {current.startTime}</li>
              <li>Voting End Time: {current.endTime}</li>
              <li>Voting Total No of Votes: {current.totalVotes}</li>
            </ul>
          ) : (
            <p className="text-center">No active voting session found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
