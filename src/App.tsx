import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import QuizHome from './components/JSQuizAssessment/QuizHome/QuizHome';
import TimerCarousel from './components/Carousels/TimerCarousel';
import GoogleKeep from './components/google-keep/Home';
import Invitation from './components/Invitation/Home/Invitation';
import Login from './components/FirebaseLogin/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Invitation />} />
        <Route path='/firebase' element={<Login />} />
        <Route path='/googlekeep' element={<GoogleKeep />} />
        <Route path='/quiz' element={<QuizHome />} />
        <Route path='/timercarousel' element={<TimerCarousel />} />
      </Routes>
    </BrowserRouter>
  )
}

