import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from "styled-components"
import { MdDeleteForever } from "react-icons/md"
import { removeAdmin } from '../store/slices/AdminSlice'

const DisplayAdmins = () => {
    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state.admins;
    });
    console.log(data);

    const deleteAdmin = (id) => {
        dispatch(removeAdmin(id))
    }
    return (
        <Wrapper>
            {
                data.map((admin, id) => {
                    return (
                        <li key={id}>{admin}
                            <button className='btn-delete' onClick={() => deleteAdmin(id)}>
                                <MdDeleteForever className='delete-icon' />
                            </button>
                        </li>
                    )
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.section`
li{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;

    &:first-child{
        border-top: 1px solid #eee;
    }
}
`

export default DisplayAdmins