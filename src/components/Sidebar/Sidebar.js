import React from 'react';
import "./Sidebar.css";
import { Link } from 'react-router-dom';
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='profileImg'>
        <img src="./images/profile1.jpeg" alt="" className="profile" />
      </div>
      <h1 className="name">Santosh Shrimangale</h1>
      <p className="designation">Front End Developer | Freelancer</p>
     
      <ul className='pages'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="service">Service</Link></li>
        <li><Link to="skill">Skill</Link></li>
        <li><Link to="education">Education</Link></li>
        <li><Link to="experience">Experience</Link></li>
        <li><Link to="work">Work</Link></li>
        <li><Link to="blog">Blog</Link></li>
        <li><Link to="contact">Contact</Link></li>
      </ul>
    </div>

  )
}

export default Sidebar