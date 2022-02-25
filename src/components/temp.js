import React, { useEffect, useState } from 'react';
import "./css/style.css";
const Temp = () =>{

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Haryana");
    useEffect(()=>{
        const fetchAPI = async()=>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=6e73f28e06ee886d6f5d3b21305358f9`
            const response = await fetch(url);
            const resJSON = await response.json();
            console.log(resJSON);
            setCity(resJSON.main)
            
        }
        fetchAPI();
    },[search] )

    return(
    <>
        <div className="box">
            <div className="inputData">
                <input type="search" className="inputField" placeholder='Location' value = {search}
                onChange={(event) =>{
                    setSearch(event.target.value)
                }}/>
            </div>
            {!city ? (
                <div>
                    <p className='errorMsg'>No Data Found</p>
                    <div className='wave -one'></div>
                    <div className='wave -two'></div>
                    <div className='wave -three'></div>
                </div>
                
            ) : (
                <div>
                    <div className='info'>
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
                </div>
            )}
            
        </div>
    </>
    )
}

export default Temp;