import { createContext, useState } from "react"
import React from 'react'



export const Contextuse = createContext()

export default function Providers(props) {

    // let [isadmin, setAdmin] = useState(null)

    const currentLoggedIn = {
        userId: 1,
        fullname: "Admin User",
        contact: "9999999999",
        city: "Admin City",
        email: "admin@test.com",
        gender: "Other",
        role: "admin", // Specifies the admin role
        hasVoted: [], // Admin does not participate in voting
    }


    const votingStatus = false

    const isAuth = true

    const users = [
        {
            userId: 1,
            fullname: "Admin User",
            contact: "9999999999",
            city: "Admin City",
            email: "admin1@gmail.com",
            password: "test",
            gender: "Other",
            // Specifies the admin role
            hasVoted: [], // Admin does not participate in voting
        },
        {
            userId: 2,
            fullname: "Alice Johnson",
            contact: "1234567890",
            city: "New York",
            email: "alice@test.com",
            password: "test",
            gender: "Female",
            // Normal user
            hasVoted: ["v1"], // List of voting IDs this user has participated in
        },
        {
            userId: 3,
            fullname: "Bob Williams",
            contact: "9876543210",
            city: "Los Angeles",
            email: "bob@test.com",
            password: "test",
            gender: "Male",
            // Normal user
            hasVoted: [], // User hasn't voted yet
        },
    ]



    const votingSessions = [
        {
            votingId: "v1",
            title: "School President Election 2024",
            startTime: "2024-12-01T10:00:00Z",
            endTime: "2024-12-02T10:00:00Z",
            status: "live", // Options: "live", "completed"
            totalVotes: 1, // Total votes across all candidates
            candidates: [
                {
                    candidateId: 1,
                    name: "John Doe",
                    teamName: "Team Alpha",
                    description: "Focused on innovation and community service.",
                    image: "",
                    votes: 1, // Number of votes received
                },
                {
                    candidateId: 2,
                    name: "Jane Smith",
                    teamName: "Team Beta",
                    description: "Promoting education and health initiatives.",
                    image: "",
                    votes: 0,
                },
            ],
            winner: null, // To be filled after voting ends
        },
        {
            votingId: "v2",
            title: "Company Leadership Election 2024",
            startTime: "2024-12-10T08:00:00Z",
            endTime: "2024-12-11T08:00:00Z",
            status: "upcoming", // Options: "live", "completed", "upcoming"
            totalVotes: 0, // Total votes across all candidates
            candidates: [
                {
                    candidateId: 1,
                    name: "Charlie Brown",
                    description: "Focused on employee well-being and growth.",
                    image: "",
                    votes: 0,
                },
                {
                    candidateId: 2,
                    name: "Daisy Miller",
                    description: "Advocating for technological advancement.",
                    image: "",
                    votes: 0,
                },
            ],
            winner: null, // To be filled after voting ends
        },
    ];
    let data = { users, votingSessions, currentLoggedIn, isAuth, votingStatus }
    return (
        <Contextuse.Provider value={data}>
            {props.children}
        </Contextuse.Provider>
    )
}