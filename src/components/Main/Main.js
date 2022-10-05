import React from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage';
import AboutPage from '../../pages/AboutPage/AboutPage';
import DrinksPage from '../../pages/DrinksPage/DrinksPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegistrPage from '../../pages/RegistrPage/RegistrPage'
import DessertPage from '../../pages/DessertPage/DessertPage'


export default function Main() {
  return <div>
      <Routes>
            <Route exact path='/' element={<HomePage/>}/>
            <Route exact path='/drinks' element={<DrinksPage/>}/>
            <Route exact path='/dessert' element={<DessertPage/>}/>
            <Route exact path='/about' element={<AboutPage/>}/>
            <Route exact path='/login' element={<LoginPage/>}/>
            <Route exact path='/registr' element={<RegistrPage/>}/>
        </Routes>
  </div>;
}
