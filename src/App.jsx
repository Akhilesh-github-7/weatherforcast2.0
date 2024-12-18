import './App.css'
import './bootstrap.min.css'
import { Link, Route, Routes } from 'react-router-dom'
import WeatherUpdation from './pages/WeatherUpdation'
import Landing from './pages/Landing'
import { Container, Navbar } from 'react-bootstrap'
import { useState } from 'react'

function App() {

      const [weatherData,setWeatherData]= useState(false)
  

  return (
    <>
      {/* navbar */}
      <Navbar className="bg-info position-fixed w-100 p-3">
        <Container>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Navbar.Brand href="#" className='text-light fs-4 fw-bold'>
              <i className="fa-solid fa-cloud me-3"></i>
              WeatherForcast
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Landing setWeatherData={setWeatherData} />}/>
        <Route path='/weatherupdation' element={<WeatherUpdation weatherData={weatherData} />}/>

      </Routes>


    </>
  )
}

export default App