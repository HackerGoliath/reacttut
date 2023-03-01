import { useEffect, useState } from 'react'
import "./App.css"
import axios from './Axios';

const App = () => {
    const [myData, setMyData] = useState([])
    const [isError, setIsError] = useState("")

    /* Using Promises */
    // useEffect(() => {
    //     axios.get("https://jsonplaceholder.typicode.com/posts")
    //         .then((res) => setMyData(res.data))
    //         .catch((e) => setIsError(e.message))
    // }, [])

    // using Async/Await
    // const getApiData = async (url) => {
    //     try {
    //         const res = await axios.get(url)
    //         setMyData(res.data)
    //     } catch (error) {
    //         setIsError(error.message)
    //     }

    // }
    // useEffect(() => {
    //     getApiData(`${API}/posts`);
    // }, [])

    // Best Method
    const getApiData = async () => {
        try {
            const res = await axios.get("/posts")
            setMyData(res.data)
        } catch (error) {
            setIsError(error.message)
        }

    }
    useEffect(() => {
        getApiData();
    }, [])

    return (
        <>
            <h1>Axios Tuorial</h1>
            {isError !== "" && <h2>{isError}</h2>}
            <div className="grid">
                {myData.slice(0, 15).map((post, ind) => {
                    const { id, title, body } = post
                    return <div key={ind} className='card'>
                        <h2>{id} : {title.slice(0, 15).toUpperCase()}</h2>
                        <p>{body.slice(0, 100)}</p>
                    </div>
                })}
            </div>
        </>
    )
}

export default App