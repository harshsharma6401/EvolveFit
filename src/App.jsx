import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import Nutrition from './components/Pages/nutrition';
import Workout from './components/Pages/workout';
import Header from './components/Header';

function App() {



  return (

    <BrowserRouter>
    
    <div className="App">
      <Header/> 
      <Routes>
        <Route path = '/' element = {<HomePage/>}  exact/>
        <Route path = '/workout/:userId' element = {<Workout/>} exact/> 
        <Route path = '/nutrition/:userId' element = {<Nutrition/>} exact/> 
       
      </Routes>

    </div>
    </BrowserRouter>
  )
}

export default App
