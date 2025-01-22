import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Contextuse } from '../Providers'
import home from '../assets/vote_home_page.jpg'

export default function Login() {
    const [log, setLog] = useState(false)
    const [signup, setSignup] = useState(false)
    const [valid, setValid] = useState({ email: "", password: "" })
    const [register, setRegsiter] = useState({ fullName: "", email: "", contact: "", gender: "", city: "", password: "" })
    const [check, setCheck] = useState(false)

    let { users, votingSessions } = useContext(Contextuse)
    let use = useNavigate()

    let Validation = (e, keys) => {
        let values = e.target.value
        setRegsiter(prev => ({
            ...prev, [keys]: values
        }))
    }

    function handlesubmit(e) {
        e.preventDefault()
        setSignup(false)
        if (valid.email === "" && valid.password === "") {
            setCheck(true)
        } else {
            let set = users.find((element) => element.email === valid.email && element.password === valid.password)
            if (set) {
                setLog(false)
                let status = votingSessions.find((element) => element.status === 'live')
                if (status) {
                    use('/home')
                } else {
                    use('/complete')
                }
            } else {
                setCheck(true)
            }
        }
    }

    function handlesignup(e) {
        e.preventDefault()
        if (register.fullName === "" || register.email === "" || register.contact === "" || register.gender === "" || register.city === "" || register.password === "") {
            setCheck(true)
        } else {
            setCheck(false)
            // Handle user registration logic here
        }
    }

    return (
        <div className='first'>
            <nav className='flex justify-between items-center p-5 bg_first text-black'>
                <h1 className='text-2xl font-bold'>eVoting</h1>
                <div className='flex gap-4'>
                    <button className='bg-blue-600 text-white font-semibold px-6 py-2 rounded-xl' onClick={() => { setLog(true); setSignup(false) }}>Login</button>
                    <button className=' bg-blue-600 text-white font-semibold px-6 py-2 rounded-xl' onClick={() => { setSignup(true); setLog(false) }}>Sign Up</button>
                    <button className='bg-blue-600 text-white font-semibold px-6 py-2 rounded-xl'>Logout</button>
                </div>
            </nav>

            {log && (
                <div className='signin-container'>
                    <div className='sign bg-sky-300 rounded-lg'>
                        <div className='flex justify-center'>
                            <p className='text-2xl font-bold'>Login</p>
                        </div>

                        <input type='email' placeholder='Enter your Email' className='log h-12 w-full max-w-md rounded-lg mt-8 mx-auto p-4' value={valid.email} onChange={(e) => setValid({ ...valid, email: e.target.value })} />
                        <input type='password' placeholder='Enter your Password' className='log h-12 w-full max-w-md rounded-lg mt-6 mx-auto p-4' value={valid.password} onChange={(e) => setValid({ ...valid, password: e.target.value })} />
                        {check && <p className='text-red-600 text-center'>Invalid Credentials</p>}
                        <div className='flex justify-around  btns'>
                            <div>
                                <button className=' w-full max-w-md h-12 bg-black text-white pr-2 pl-2 rounded-lg mt-6 mx-auto ' onClick={(e) => handlesubmit(e)} >Sign In </button>
                            </div>
                            <div>
                                <button className='w-full max-w-md h-12 bg-black text-white rounded-lg mt-6 pl-2 pr-2 mx-auto ' onClick={() => setLog(false)} > Close</button>
                            </div>

                        </div>

                    </div>
                </div>
            )}

            {signup && (
                <div className='signup-container'>
                    <div className='signup bg-sky-300 p-8 rounded-lg'>
                        <div className='flex justify-center'>
                            <p className='text-2xl font-bold'>Sign Up</p>
                        </div>

                        <input type='text' placeholder='Full Name' className='log h-12 w-full max-w-md rounded-lg mt-8 mx-auto p-4' value={register.fullName} onChange={(e) => Validation(e, "fullName")} />
                        <input type='email' placeholder='Email' className='log h-12 w-full max-w-md rounded-lg mt-6 mx-auto p-4' value={register.email} onChange={(e) => Validation(e, "email")} />
                        <input type='text' placeholder='Contact Number' className='log h-12 w-full max-w-md rounded-lg mt-6 mx-auto p-4' value={register.contact} onChange={(e) => Validation(e, "contact")} />
                        <select className='log h-12 w-full max-w-md rounded-lg mt-6 mx-auto p-4 pt-2' value={register.gender} onChange={(e) => setRegsiter(prev => ({ ...prev, gender: e.target.value }))}>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        <input type='text' placeholder='City' className='log h-12 w-full max-w-md rounded-lg mt-6 mx-auto p-4' value={register.city} onChange={(e) => Validation(e, "city")} />
                        <input type='password' placeholder='Password' className='log h-12 w-full max-w-md rounded-lg mt-6 mx-auto p-4' value={register.password} onChange={(e) => Validation(e, "password")} />
                        {check && <p className='text-red-600 text-center'>Invalid Information</p>}

                        <div className="flex flex-col sm:flex-row justify-end gap-2 mt-3">
                            <div className="w-full sm:w-auto">
                                <button className="w-full h-12 bg-black text-white px-4 py-2 rounded-lg mt-2" onClick={(e) => handlesignup(e)} >Sign Up </button>
                            </div>
                            <div className="w-full sm:w-auto">
                                <button className="w-full h-12 bg-black text-white px-4 py-2 rounded-lg mt-2"  onClick={() => setSignup(false)} > Close </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
} 
