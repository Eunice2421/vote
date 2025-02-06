import React, { useContext, useEffect, useRef, useState } from 'react'
import { Contextuse } from '../Providers';

export default function Manage() {

    let { votingSessions } = useContext(Contextuse)

    let [create, setCreate] = useState({
        title: '',
        startTime: '',
        endTime: '',
        candidates: []

    })

    let [cancel, setCancel] = useState(false)
    let [dataview, setdataView] = useState(false)
    let [view, setView] = useState({
        votingId: "",
        title: "",
        status: "",
        startTime: "",
        endTime: "",
        totalVotes: "",
        candidates: [],
        winner: ""
    })

    let handleCandidateRemoval = (i) => {
        console.log("Candidates", i)
        setCreate(prev => {
            let temp = { ...prev }
            let tempcandi = temp.candidates.filter((_, index) => index !== i)
            temp.candidates = tempcandi
            return temp
        })
    }

    let nameRef = useRef()
    let teamRef = useRef()
    let imgRef = useRef('')

    let Read = (i) => {
        if (votingSessions[i]) {
            let one = votingSessions[i]
            setView(one)
            console.log(view)
            setdataView(true)

        }
    }


    let Store = (e, keys) => {
        console.log(e.target);  // Log the entire target element
        let value = e.target.value;
        console.log(value);  // Log the value
        setCreate(prev => ({
            ...prev,
            [keys]: value
        }));
    }


    let Add = () => {
        let name = nameRef.current.value
        let team = teamRef.current.value
        let photo = imgRef.current.files[0]

        // setCreate((prev) => ({
        //     candidates: [
        //         ...prev.candidates,
        //         { name: name, teamName: team, image: photo },],

        // }));

        setCreate(prev => {
            let tempCreate = { ...prev }
            tempCreate.candidates.push({ name: name, teamName: team, image: photo })
            return tempCreate
        })

        // console.log("create:",create.candidates)
        console.log("Title", create.title)

    }

    console.log("create value outside func:", create)
    const form = new FormData();
    let Save = (e) => {
        e.preventDefault()
        let id;
        if (votingSessions.length === 0) {
            id = 1
        }
        else {
            let lastPro = votingSessions.slice(-1)
            id = lastPro[0].id + 1
        }
        // console.log("Save data is", create)
        // console.log("TitleName :", create.title)
        form.append("titleName", create.title)
        form.append("starttime", create.startTime)
        form.append("endTime", create.endTime)
        form.append("canditates", create.candidates)

        // const entries = [];
        for (let pair of form.entries()) {
            console.log(pair[0] + ": " + pair[1]);
        }

    }

    return (
        <div>
            <header>
                <nav className="flex font-bold text-black p-5 text-2xl bg-cyan-400">
                    <p className="ml-4 sm:ml-20">eVoting</p>
                    <p className="ml-auto hidden sm:block">Voting Management</p>
                </nav>
            </header>
            <button
                className=" bg-amber-400 text-black font-bold px-4 py-2 rounded m-5 absolute right-4 top-20 create"
                onClick={() => setCancel(true)}
            >
                Create
            </button>

            <table className="table-auto w-full mt-14 relative border-collapse overflow-x-auto table_res">
                <caption className="text-lg font-semibold mb-4 mt-5 head_list">List of Voting</caption>
                <thead className="bg-cyan-500 text-white">
                    <tr>
                        <th className="px-4 py-2 border-b text-left">S.No</th>
                        <th className="px-4 py-2 border-b text-left">Voting Id</th>
                        <th className="px-4 py-2 border-b text-left hidden sm:block md:table-cell">Date</th>
                        <th className="px-4 py-2 border-b text-left">Winner Candidates</th>
                        <th className="px-4 py-2 border-b text-left hidden md:table-cell">Total Vote Count</th>
                        <th className="px-4 py-2 border-b text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        votingSessions && votingSessions.map((voting, index) => (
                            <tr key={index} className="hover:bg-cyan-100">
                                <td className="px-4 py-2">{index + 1}</td>
                                <td className="px-4 py-2 ">{voting.votingId}</td>
                                <td className="px-4 py-2 hidden sm:block md:table-cell">{voting.startTime}</td>
                                <td className="px-4 py-2">{voting.winner}</td>
                                <td className="px-4 py-2  hidden sm:block md:table-cell">{voting.totalVotes}</td>
                                <td className="px-4 py-2">
                                    <i
                                        className="bi bi-eye cursor-pointer text-blue-500 hover:text-blue-700"
                                        onClick={() => Read(index)}
                                    ></i>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            {cancel && (
                <div className='popup-container'>
                    <div className="popup border rounded absolute inset-0 flex justify-center items-center">
                        <div className="w-full max-w-2xl max-h-[80vh] overflow-auto bg-cyan-200 rounded shadow-lg p-6">
                            <h3 className="text-center text-xl font-semibold">Create Voting</h3>
                            <div className="absolute top-4 right-4 cursor-pointer text-3xl font-bold" onClick={() => setCancel(false)}>x</div>

                            <form>
                                <div className="mt-4">
                                    <label className="font-semibold" htmlFor="votingTitle">Voting Title: </label>
                                    <input id="votingTitle" type="text" className="w-full px-4 py-2 border rounded mt-2" value={create.title} onChange={(e) => Store(e, 'title')} />
                                </div>

                                <div className="mt-4">
                                    <label className="font-semibold  hidden md:table-cell" htmlFor="startTime">Start Time: </label>
                                    <input id="startTime" type="datetime-local" className="w-full px-4 py-2 border rounded mt-2" value={create.startTime} onChange={(e) => Store(e, 'startTime')} />
                                </div>

                                <div className="mt-4">
                                    <label className="font-semibold  hidden md:table-cell" htmlFor="endTime">End Time: </label>
                                    <input id="endTime" type="datetime-local" className="w-full px-4 py-2 border rounded mt-2" value={create.endTime} onChange={(e) => Store(e, 'endTime')} />
                                </div>

                                <div className="mt-4">
                                    <label className="font-semibold" htmlFor="candidateName">Candidate Name: </label>
                                    <input id="candidateName" type="text" className="w-full px-4 py-2 border rounded mt-2" ref={nameRef} placeholder="Candidate Name" />
                                    <label className="font-semibold mt-2" htmlFor="teamName">Team Name: </label>
                                    <input id="teamName" type="text" className="w-full px-4 py-2 border rounded mt-2" ref={teamRef} placeholder="Team Name" />
                                    <label className="font-semibold mt-3" htmlFor="imageUpload">Upload Image: </label>
                                    <input id="imageUpload" type="file" className="w-full px-4 py-2 border rounded mt-2" ref={imgRef} />
                                    <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded mt-4" onClick={() => Add()}>
                                        Add
                                    </button>
                                </div>

                                <div className="mt-4">
                                    {
                                        (create.candidates && create.candidates.length > 0) &&
                                        create.candidates.map((candi, index) => (
                                            <div key={`${index}`} >
                                                <p className="border-2 border-solid border-black p-2 rounded mt-2" > {candi.name} </p>
                                                <i className='bi bi-x' onClick={() => handleCandidateRemoval(index)}></i>
                                            </div>))
                                    }
                                </div>

                                <div className="flex justify-between mb-4 mt-4">
                                    <button type="button" className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => setCancel(false)}>
                                        Cancel
                                    </button>
                                    <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded" onClick={(e) => Save(e)}> Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {dataview && (
                <div className="view_popup border rounded absolute inset-0 bg-gray-400 p-6 flex justify-center items-center">
                    <div className="w-full max-w-lg bg-cyan-200 p-6 rounded shadow-lg">
                        <h3 className="text-center text-xl font-semibold mb-6">Voting Details</h3>
                        <div
                            className="absolute top-4 right-4 cursor-pointer text-3xl font-bold"
                            onClick={() => setdataView(false)}> x
                        </div>
                        <div>
                            <div className="mb-4">
                                <label className="font-semibold"> Voting ID : </label>
                                <p className="pl-3 inline-block ml-7">{view.votingId}</p>
                            </div>

                            <div className="mb-4">
                                <label className="font-semibold">Voting Title:</label>
                                <p className="pl-3 inline-block ml-5">{view.title}</p>
                            </div>

                            <div className="mb-4">
                                <label className="font-semibold">Status:</label>
                                <p className="pl-3 inline-block ml-16">{view.status}</p>
                            </div>

                            <div className="mb-4">
                                <label className="font-semibold">Start Time:</label>
                                <p className="pl-3 inline-block ml-9">{view.startTime}</p>
                            </div>

                            <div className="mb-4">
                                <label className="font-semibold">End Time:</label>
                                <p className="pl-3 inline-block ml-10">{view.endTime}</p>
                            </div>
                            <div className="mb-4">
                                <label className="font-semibold">Total no.of Votes:</label>
                                <p className="pl-3 inline-block ml-0">{view.totalVotes}</p>
                            </div>

                            <div className="mb-4">
                                {view.candidates.map((candi, index) => (
                                    <p className="p-2 rounded mt-2 ml-7" key={index}>
                                        <p className="pl-3 inline-block">{`${candi.name} : `}</p>
                                        <p className="pl-3 inline-block">{`${candi.votes}  `}</p>
                                    </p>
                                ))}
                            </div>

                            <div className="mb-4">
                                <label className="font-semibold">Winner Candidate  :</label>
                                <p className="pl-3 inline-block ml-7">{view.winner}</p>
                            </div>

                            <div className="mb-4">
                                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full sm:w-auto" onClick={() => setdataView(false)}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

}

