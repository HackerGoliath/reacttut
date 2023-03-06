import React from 'react'
import "./App.css";
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/index';

const App = () => {
    const myState = useSelector((state) => state.changeNum)
    const dispatch = useDispatch();
    return (
        <div className='container'>
            <h1>Increment/Decrement Counter </h1>
            <h3 className='text-center'>using React and Redux</h3>
            <div className='mt-5'>
                <button className='btn btn-warning px-5 mx-2' title='Decrement' onClick={() => dispatch(decNumber(3))}><span className='fw-bolder'>➖</span></button>
                <input className='rounded text-center py-2 bg-info text-dark fw-bold fs-5' type="text" name="quantity" value={myState} />
                <button className='btn btn-warning px-5 mx-2' title='Increment' onClick={() => dispatch(incNumber(5))}><span className='fw-bolder'>➕</span></button>
            </div>
        </div>
    )
}

export default App