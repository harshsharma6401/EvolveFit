import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import Header from './components/Header';
import Workout from './components/Pages/Workout';
import Nutrition from './components/Pages/Nutrition';

function App() {

  return (

    <BrowserRouter>

      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} exact />
          <Route path='/workout/:userId' element={<Workout />} exact />
          <Route path='/nutrition/:userId' element={<Nutrition />} exact />

        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App
