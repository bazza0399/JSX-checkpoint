import React from 'react';
import './App.css';
import './style.css'
import img1 from './img/frusciante.jpg'
import img2 from './img/john frusciante.jpg'
import vid from './img/gta tn.mp4'
function App() {
  let br = "\n";
  
  return (
    <div className="cont"> 
      <h1 className="title red">Your name here</h1>
      {br}
      <img src ={img1} alt="img1"/>
      {br}
      <img src ={img2} alt="img2"/>
      <video style={{width:'320',height:'250'}}>
        <source src ={vid} type="video/mp4"></source>
      </video>
    </div>
  );
}

export default App;
