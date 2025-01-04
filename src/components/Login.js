
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
    const [check, setCheck] = useState(false)

    let { admins } = useContext(Contextuse)

    let use = useNavigate()

    let emailReg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    let passwordReg = /^(?=.*[0-9A-Za-z])(?=.*[0-9])(?=.*[_]).{5,}$/








    let Validation = (e, keys, regexp) => {

        let values = e.target.value
        setValid(prev => ({
            ...prev, [keys]: values
        }))


        if (regexp.test(values)) {
            setCheck(false)

        }
        else {
            setCheck(true)
        }
    }
    function handlesubmit(e) {
        e.preventDefault()
        if (valid.email === "" && valid.password === "") {
            setCheck(true)
        }
        else {
            let set = admins.find((element) => element.email === valid.email && element.pwd === valid.password)
            if (set) {
                setCheck(false)
                setLog(false)
                use('/home')

            }
            else {
                setCheck(true)
            }
        }
    }
    function handlesignup(e) {
        e.preventDefault()
        setSignup(false)
    }

    return (
        <div>
            <nav className='flex font-semibold text-black  text-xl p-3 head '>
                <h1 className='text-2xl font-bold ml-5'> eVoting</h1>
                <div className='nav  flex gap-32'>
                    <button className=' text-black pl-6 pr-6 pt-2 pb-2 rounded-xl text-center bg-orange-400' onClick={(e) => setLog(true)}>Login</button>
                    <button className='bg-gray-200 text-black pl-6 pr-6 rounded-xl text-center' onClick={(e) => setSignup(true)}>Sign Up</button>
                    <button className='bg-gray-200 text-black pl-6 pr-6 rounded-xl text-center'>Log out</button></div>
            </nav>
            <div>
                <img src={home} alt='vote err' className='w-screen h-screen home' />
            </div>

            {log && (<div className=' text-black  ml-96 mt-40 rounded-lg sign'>
                <div className='flex pt-5'>
                    <h1 className='text-2xl font-bold ml-5'> eVoting</h1>
                    <p className='text-2xl font-bold ml-72'>Login</p>
                </div>

                <input type='text' placeholder='Enter the Email' className=' log h-12 w-80 rounded-lg ml-24 mt-16' value={valid.email} onChange={(e) => Validation(e, "email", emailReg)} /><br /><br />
                <br /><br />
                <input type='password' placeholder='Enter the Password' className=' log h-12 w-80 rounded-lg ml-24' value={valid.password} onChange={(e) => Validation(e, "password", passwordReg)} /><br /><br />
                {check && <p className='text-red-600 ml-24'>Invalid Credentials</p>}


                <button className='w-20 h-10 bg-black text-white rounded-lg ml-24 mt-5' onClick={handlesubmit}> Sign In</button>
                <button className='w-20 h-10 bg-black text-white rounded-lg ml-24 mt-5' onClick={() => setLog(false)}>
                    Close
                </button>
            </div>)}


            {signup && (<div className=' text-black  ml-96 mt-40 rounded-lg signup  '>
                <div className='flex pt-5'>
                    <h1 className='text-2xl font-bold ml-5'> eVoting</h1>
                    <p className='text-2xl font-bold ml-72'>Sign Up</p>
                </div>

                <div className='reg'>
                <input type='text'placeholder='Enter your Full Name' className='log h-12 w-96 rounded-lg mt-20  'value={valid.fullName} onChange={(e) => setValid(prev => ({ ...prev, fullName: e.target.value }))}/><br/><br />


                <input type='text' placeholder='Enter the Email' className='log h-12 w-96 rounded-lg ' value={valid.email} onChange={(e) => Validation(e, "email", emailReg)} /><br /><br />

                <input type='text' placeholder='Enter your Contact Number' className='log h-12 w-96 rounded-lg ' value={valid.contact}
                    onChange={(e) => Validation(e, "contact", /^(\+?[0-9]{1,4})?(\d{10})$/)} /><br /><br />
                <select
                    className='log h-12 w-96 rounded-lg ' value={valid.gender} onChange={(e) => setValid(prev => ({ ...prev, gender: e.target.value }))}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select><br /><br />
                <input type='text' placeholder='Enter your City' className='log h-12 w-96 rounded-lg ' value={valid.city} onChange={(e) => setValid(prev => ({ ...prev, city: e.target.value }))} /><br /><br />
                <input type='password' placeholder='Enter the Password' className='  h-12 w-96 rounded-lg ' value={valid.password} onChange={(e) => Validation(e, "password", passwordReg)} /><br /><br />
                {check && <p className='text-red-600 ml-24'>Invalid Credentials</p>}


                    <button className='w-20 h-10 bg-black text-white rounded-lg  mt-5' onChange={handlesubmit} onClick={() => use("/home")}> Sign In</button>
                <button className='w-20 h-10 bg-black text-white rounded-lg  mt-5 ml-9' onClick={() => setSignup(false)}>
                    Close
                    </button>
                    </div>
            </div>)}
        </div>
    )
}


