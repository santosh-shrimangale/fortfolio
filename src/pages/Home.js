import React, { useEffect, useState } from 'react';
import "./Home.css";

const images = [
  './images/bg1.jpg',
  './images/bg1.jpg'
]; // Replace these with your image URLs

const texts = ["Hi! <br> I'm Santosh",
  'I am a devoloper',
  'Text 3'
]; // Replace these with your desired texts
function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Change the text and image every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className='container-fluid'>
      <div className="row"></div>
      <img className='bgImg' src={images[currentIndex]} alt="img" />
      <h1 className='intro'>{texts[currentIndex]}</h1>
      <div>
        {/* <h1 className='intro'>Hi!<br/>I'm Santosh</h1> */}
      </div>

    </div>
  )
}

export default Home;