
import React, { useContext } from 'react'
import '../App.css'
import { useState } from 'react'

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
        console.log(valid)
        e.preventDefault()
        setSignup(false)
        if (valid.email === "" && valid.password === "") {
            setCheck(true)
        }
        else {
            let set = users.find((element) => element.email === valid.email && element.password === valid.password)
            console.log(set)
            if (set) {
                setLog(false)

                let status = votingSessions.find((element) => element.status === 'live')
                if (status) {
                    console.log("live")
                    use('/home')
                }
                else {
                    use('/complete')
                }
            }
            else {
                setCheck(true)
            }


        }
    }
    let form = new FormData()
    let id;
    function handlesignup(e) {
        e.preventDefault()
        if (register.fullName === "" && register.email === "" && register.contact === "" && register.gender === "" && register.city === "" && register.password === "") {
            setCheck(true)
        } else {

            if (users.length === 0) {
                id = 1
            }
            else {
                const lastProduct = users.slice(-1)
                console.log('last product:', lastProduct)
                id = lastProduct[0].id + 1
            }


            form.append('userId', id)
            form.append('fullname', register.fullName)
            form.append('contact', register.contact)
            form.append(' city', register.city)
            form.append('email', register.email)
            form.append('password', register.password)
            form.append('gender', register.gender)

            console.log(register)


        }
    }
    return (
        <div className='first'>
            <nav className='flex font-semibold text-black  text-xl p-3 head '>
                <h1 className='text-2xl font-bold ml-5'> eVoting</h1>
                <div className='nav  flex gap-32'>
                    <button className=' text-black pl-6 pr-6 pt-2 pb-2 rounded-xl text-center bg-orange-400' onClick={(e) => { setLog(true); setSignup(false) }}>Login</button>
                    <button className='bg-gray-200 text-black pl-6 pr-6 rounded-xl text-center' onClick={(e) => { setSignup(true); setLog(false) }}>Sign Up</button>
                    <button className='bg-gray-200 text-black pl-6 pr-6 rounded-xl text-center'>Log out</button></div>
            </nav>


            {log && (<div className='signin-container'>
                <div className=' text-black rounded-lg sign'>
                    <div className='flex pt-5'>
                        <h1 className='text-2xl font-bold ml-5'> eVoting</h1>
                        <p className='text-2xl font-bold ml-72'>Login</p>
                    </div>

                    <input type='email' placeholder='Enter the Email' className=' log h-12 w-80 rounded-lg ml-24 mt-16' value={valid.email} onChange={(e) => setValid({ ...valid, email: e.target.value })} /><br /><br />
                    <br /><br />
                    <input type='password' placeholder='Enter the Password' className=' log h-12 w-80 rounded-lg ml-24' value={valid.password} onChange={(e) => setValid({ ...valid, password: e.target.value })} /><br /><br />
                    {check && <p className='text-red-600 ml-24'>Invalid Credentials</p>}


                    <button className='w-20 h-10 bg-black text-white rounded-lg ml-24 mt-5' onClick={(e) => handlesubmit(e)}> Sign In</button>
                    <button className='w-20 h-10 bg-black text-white rounded-lg ml-24 mt-5' onClick={() => setLog(false)}>
                        Close
                    </button>
                </div>
            </div>)}


            {signup && (<div className='signup-container '><div className=' text-black mt-0 rounded-lg signup'>
                <div className='flex pt-5'>
                    <h1 className='text-2xl font-bold ml-5'> eVoting</h1>
                    <p className='text-2xl font-bold ml-72'>Sign Up</p>
                </div>

                <div className='reg'>
                    <input type='text' placeholder='Enter your Full Name' className='log h-12 w-96 rounded-lg mt-20  ' value={register.fullName} onChange={(e) => Validation(e, "fullName")} /><br /><br />


                    <input type='email' placeholder='Enter the Email' className='log h-12 w-96 rounded-lg ' value={register.email} onChange={(e) => Validation(e, "email")} /><br /><br />

                    <input type='text' placeholder='Enter your Contact Number' className='log h-12 w-96 rounded-lg ' value={register.contact}
                        onChange={(e) => Validation(e, "contact")} /><br /><br />
                    <select
                        className='log h-12 w-96 rounded-lg ' value={register.gender} onChange={(e) => setRegsiter(prev => ({ ...prev, gender: e.target.value }))}>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select><br /><br />
                    <input type='text' placeholder='Enter your City' className='log h-12 w-96 rounded-lg ' value={register.city} onChange={(e) => Validation(e, "city")} /><br /><br />
                    <input type='password' placeholder='Enter the Password' className='  h-12 w-96 rounded-lg ' value={register.password} onChange={(e) => Validation(e, "password")} /><br /><br />
                    {check && <p className='text-red-600 ml-24'>Invalid Credentials</p>}


                    <button className='w-20 h-10 bg-black text-white rounded-lg  mt-5' onClick={(e) => handlesignup(e)} > Sign Up</button>
                    <button className='w-20 h-10 bg-black text-white rounded-lg  mt-5 ml-9' onClick={() => setSignup(false)}>
                        Close
                    </button>
                </div>
            </div>
            </div>)}
        </div>
    )
}


