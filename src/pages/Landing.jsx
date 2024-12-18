
import React, { useEffect, useRef } from 'react'
import {  Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Landing = ({setWeatherData}) => {
    const inputRef=useRef('')

    // console.log(inputRef);
    
    useEffect(()=>{
        console.log(getWeather('kakkanad'));
        
    },[])
    
    const getWeather=async (place)=>{
        try {
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`
            const res = await fetch(url)
            const data=await res.json()
            console.log(data);
            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                cloud: data.clouds.all,
                description: data.weather[0].description

            })
        } catch (error) {
            console.log(error);
            
        }
    }
    console.log(inputRef);
    

  return (
    <>
        <div style={{paddingTop:'100px'}} className='container-fluid w-100'>
            <div style={{backgroundColor:'skyblue'}} className='mt-2 p-4 border rounded'>
                <h1 style={{fontFamily:"serif"}} className='text-center text-light fs-1'>Welcome to WeatherForcast</h1>
                <p style={{fontFamily:" serif"}} className='text-center text-light fs-4'>The Weather Update App provides real-time weather forecasts, live updates, and severe weather alerts, helping you stay prepared wherever you are. With accurate data and customizable notifications, it ensures you're always informed about the conditions around you.</p>
                <div style={{width:'100%',height:'350px'}} className='d-flex align-items-center'>
                    {/* <Form> */}
                        <Form.Control ref={inputRef}  className='form-control me-1' type="text" placeholder="Enter the place to know the weather out there" autoComplete='off' />
                        <Link to={'/weatherupdation'} className='btn btn-success' type='submit' onClick={()=>getWeather(inputRef.current.value)}><i className="fa-solid fa-arrow-right"></i></Link>
                    {/* </Form> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default Landing
