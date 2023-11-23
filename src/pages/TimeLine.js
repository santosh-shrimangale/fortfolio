import React from 'react';
import "./TimeLine.css";

function TimeLine() {
  return (
    <div className='timeline_Main'>
    <p className='TimePara'>highlights</p>
    <h1 className="timeHead">TimeLine</h1>
    <div>
      <div className='timeLine_box1'>
        <h3>Internship at Aavid Software</h3>
        <p className="">I recently have joined the Juniper Networs as a Software Developer-Intern in the DevOps team. My major part of the work has been into the field of creating sustainable and flexible CI/CD (Continuous Integration & Continuous Development) pipelines which enables developers at Juniper to do rapid development. I am also exploring the role of container technology like Docker and container-orchrastation technologies like K8s, Swarm to create industry standard production environments.</p>
      </div>
    </div>
    </div>
  )
}

export default TimeLine;