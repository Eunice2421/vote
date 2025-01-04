import { createContext, useState } from "react"
import React from 'react'



export const Contextuse = createContext()

export default function Providers(props) {

    // let [isadmin, setAdmin] = useState(null)

    let admins = [{
        email: 'admin@gmail.com',
        pwd: 'Admin@1234'

    },
    {
        email: 'admin1@gmail.com',
        pwd: 'Admin_1'

    },
    {
        email: 'admin2@gmail.com',
        pwd: 'Admin_2'

    },
    {
        email: 'Admin3@gmail.com',
        pwd: 'Admin_3'

    }]
    let data = { admins }
    return (
        <Contextuse.Provider value={data}>
            {props.children}
        </Contextuse.Provider>
    )
}