// Links: https://api.github.com/users
// https://jsonplaceholder.typicode.com/albums/1/photos

import React, { useEffect, useState } from 'react'
import Loading from './github/Loading'
import GithubUsers from './github/GithubUsers'

const UseEffectApi = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const getUsers = async () => {
        try {
            const response = await fetch("https://api.github.com/users")
            setLoading(false)
            const data = await response.json()
            setUsers(data)
            console.log(data);
        } catch (error) {
            setLoading(false)
            console.log("My error is :", error);
        }

    }

    useEffect(() => {
        getUsers()
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <GithubUsers users={users} />
        </>
    )
}

export default UseEffectApi