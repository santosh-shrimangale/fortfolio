import React from 'react';
import {Route,Routes } from 'react-router-dom';
import Home from './../../pages/Home';
import About from './../../pages/About';
import Blog from './../../pages/Blog';
import Education from '../../pages/Education';
import Experience from './../../pages/Experience';

import Skill from '../../pages/Skill';
import Work from '../../pages/Work';
import Contact from '../../pages/Contact';
import TimeLine from '../../pages/TimeLine';


function RouteComp() {
  return (
    <div className='portFolio-main'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='blog' element={<Blog/>}/>
          <Route path='education' element={<Education/>}/>
          <Route path='experience' element={<Experience/>}/>
          <Route path='TimeLine' element={<TimeLine/>}/>
          <Route path='skill' element={<Skill/>}/>
          <Route path='work' element={<Work/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Routes>
    </div>
  )
}

export default RouteComp;
