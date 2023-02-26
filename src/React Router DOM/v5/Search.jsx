import React, { useState } from 'react'
import Sresult from './Sresult';

const Search = () => {
    const [img, setImg] = useState("");
    const handleChange = (event) => {
        const data = event.target.value;
        setImg(data);
        console.log(data);
    }
    return (
        <div className='searchbar'>
            <input type="text" onChange={handleChange} value={img} placeholder='Search Anything Here' />
            {img === "" ? null : <Sresult value={img} />}
        </div>
    )
}

export default Search