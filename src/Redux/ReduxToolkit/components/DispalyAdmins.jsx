import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { MdDeleteForever } from 'react-icons/md'
import { removeAdmin } from '../store/slices/AdminSlice'

const DispalyAdmins = () => {
    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state.admins
    });

    const deleteAdmin = (id) => {
        dispatch(removeAdmin(id))
    }
    return (
        <Wrapper>
            {
                data.map((admin, id) => {
                    return (
                        <li key={id}>
                            {admin}
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
export default DispalyAdmins