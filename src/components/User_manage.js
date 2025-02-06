import React, { useContext, useState } from 'react'
import { Contextuse } from '../Providers'

export default function () {
  let { users } = useContext(Contextuse)



  let [dataview, setdataView] = useState(false)
  let [view, setView] = useState({

    id: '',
    fullname: "",
    contact: "",
    city: "",
    email: "",
    gender: "",

  })




  let Views = (i) => {
    if (users[i]) {
      let one = users[i]
      setView(one)
      console.log(view)
      setdataView(true)



    }
    else {
      console.error('Product not found at index:', i);
    }

  }

  return (
    <div>
      <header>
        <nav className="flex font-bold text-black p-5 text-2xl bg-cyan-400">
          <p className="ml-4 sm:ml-20">eVoting</p>
          <p className="ml-auto hidden sm:block">User Management</p>
        </nav>
      </header>

      <table className="table-auto w-full text-left border-separate border-spacing-0">
        <caption className="text-lg font-semibold mb-4">List of users</caption>
        <thead className="bg-cyan-500 text-white">
          <tr>
            <th className="px-4 py-2 border-b">S.No</th>
            <th className="px-4 py-2 border-b">FullName</th>
            <th className="px-4 py-2 border-b">Contact</th>
            <th className="px-4 py-2 border-b hidden md:table-cell">Gender</th>
            <th className="px-4 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map((user, index) => (
            <tr key={index} className="border-b hover:bg-cyan-100">
              <td className="px-4 py-2">{user.userId}</td>
              <td className="px-4 py-2">{user.fullname}</td>
              <td className="px-4 py-2">{user.contact}</td>
              <td className="px-4 py-2 hidden md:table-cell">{user.gender}</td>
              <td className="px-4 py-2">
                <i className="bi bi-eye cursor-pointer" onClick={() => Views(index)}></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Read only popup */}
      {
        dataview && (
          
            <div className="user_popup fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-cyan-200 rounded-lg w-full max-w-lg p-6 relative">
                <h3 className="text-center text-xl font-semibold mb-4">User Details</h3>
                <div className="absolute top-2 right-2 text-3xl font-bold cursor-pointer" onClick={() => setdataView(false)}>
                  &times;
                </div>

                <div>
                  <div className="mb-4">
                    <label className="font-semibold">Name:</label>
                    <p className="pl-3 inline-block">{view.fullname}</p>
                  </div>

                  <div className="mb-4">
                    <label className="font-semibold">Contact:</label>
                    <p className="pl-3 inline-block">{view.contact}</p>
                  </div>

                  <div className="mb-4">
                    <label className="font-semibold">City:</label>
                    <p className="pl-3 inline-block">{view.city}</p>
                  </div>

                  <div className="mb-4">
                    <label className="font-semibold">Email:</label>
                    <p className="pl-3 inline-block">{view.email}</p>
                  </div>

                  <div className="mb-4">
                    <label className="font-semibold">Gender:</label>
                    <p className="pl-3 inline-block">{view.gender}</p>
                  </div>

                  <div className="mb-4">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full sm:w-auto" onClick={() => setdataView(false)}>
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          
            )
      }
          </div>
          
  )
}
