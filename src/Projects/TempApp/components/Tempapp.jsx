import React, { useState, useEffect } from 'react'
import "./css/style.css"

const Tempapp = () => {
    const API_KEY = "Api key here";
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("mumbai");


    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${API_KEY}`
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            setCity(data.main);
        };
        fetchApi();
    }, [search])

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" className='inputField' onChange={(event) => { setSearch(event.target.value) }} />
                </div>

                {!city ? (
                    <p className='errorMsg'>No Data Found</p>) :
                    (<div>
                        <div className="info">
                            <h2 className='location'>
                                <i className="fa-solid fa-street-view"></i>{search}
                            </h2>
                            <h1 className='temp'>
                                {city.temp}°Cel
                            </h1>
                            <h3 className='tempmin_max'> Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel</h3>
                        </div>

                        <div className='wave -one'></div>
                        <div className='wave -two'></div>
                        <div className='wave -three'></div>
                    </div>)}
            </div>
        </>
    )
}

export default Tempapp