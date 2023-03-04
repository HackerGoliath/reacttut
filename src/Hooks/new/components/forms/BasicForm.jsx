import { useState } from 'react'
import "./Form.css"

const BasicForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [allEntry, setAllEntry] = useState([])

    const submitForm = (e) => {
        e.preventDefault()
        const newEntry = { email: email, password: password }
        setAllEntry([...allEntry, newEntry])
        setEmail("")
        setPassword("")
    }
    return (
        <>
            <div className="container">
                <div className="brand-logo"></div>
                <div className="brand-title">TWITTER</div>
                <div className="inputs">
                    <form action="" onSubmit={submitForm}>
                        <label htmlFor='email'>EMAIL</label>
                        <input type="email" name="email" id="email" placeholder="example@test.com" autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor='password'>PASSWORD</label>
                        <input type="password" name="password" id='password' placeholder="Min 6 charaters long" autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit">LOGIN</button>
                    </form>
                    <div>
                        {
                            allEntry.map((currElem, ind) => {
                                return (
                                    <p key={ind} className='bg-info my-2 p-3 rounded shadow-lg'>Email: {currElem.email} and password: {currElem.password}</p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default BasicForm