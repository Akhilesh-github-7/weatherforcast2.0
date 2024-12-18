
import React, { useState } from 'react'

const WeatherUpdation = ({weatherData}) => {
    console.log(weatherData);
    
    
  return (
    <>
        <div style={{paddingTop:'100px',backgroundImage:'linear-gradient(to bottom,rgba(255, 255, 255, 0.97),rgba(255, 255, 255, 0.87))',height:'100vh'}} className='row'>
            <div className="col-2"></div>
            <div style={{height:'400px',backgroundColor:'rgb(111, 205, 253)',width:'500px',textAlign:'justify'}}  className='mt-1 col rounded d-flex flex-column align-items-center p-5'>
                <h1 className='mb-4 text-danger' style={{fontFamily:'"Prata", serif'}}><i className="fa-solid fa-location-dot me-3 "></i> {weatherData?.location} </h1>
                <h1 className='fs-1 text-light' >{weatherData?.temperature} <sup>o</sup>C</h1>
                <h3 className='mb-3 text-light'>{weatherData?.description}</h3>
                <h3 className='text-light'><i class="fa-solid fa-cloud "></i> Clouds: {weatherData?.cloud} %</h3>
                <h3 className='text-light'><i class="fa-solid fa-water"></i> Humidity: {weatherData?.humidity} %</h3>
                <h3 className='text-light'><i class="fa-solid fa-wind"></i> Wind Speed: {weatherData?.windSpeed} Km/h</h3>
                
            </div>
            <div className="col-2"></div>
        </div>
    </>
  )
}

export default WeatherUpdation 