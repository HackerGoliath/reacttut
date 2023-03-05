import React from 'react'
import { FcApproval } from "react-icons/fc";
import { RxGithubLogo } from "react-icons/rx";

const GithubUsers = ({ users }) => {
    return (
        <>
            <h2 className='h1Style'>List of Github Users</h2>
            <div className="container-fluid mt-5">
                <div className="row text-center">

                    {
                        users.map((currElem) => {
                            const { id, login, avatar_url, type } = currElem
                            return (
                                <div key={id} className="col-10 col-md-4 mt-5">
                                    <div className="card p-2">
                                        <div className="d-flex align-items-center">
                                            <div className="image">
                                                <img src={avatar_url} alt="" className='rounded' width="155" />
                                            </div>
                                            <div className="w-100 ml-3">
                                                <h4 className='mb-0 mt-0 textLeft'><RxGithubLogo /> {login} <FcApproval /></h4>
                                                <span className='textLeft'>{type}</span>
                                                <div className='p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats'>
                                                    <div className="d-flex flex-column">
                                                        <span className='articles'>Articles</span>
                                                        <span className='number1'>38</span>
                                                    </div>
                                                    <div className="d-flex flex-column">
                                                        <span className='followers'>Followers</span>
                                                        <span className='number2'>980</span>
                                                    </div>
                                                    <div className="d-flex flex-column">
                                                        <span className='articles'>Rating</span>
                                                        <span className='number3'>8.9</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default GithubUsers