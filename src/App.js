import React, {useRef, useEffect} from 'react';
import './App.css';
import FaceApp from './Faceapp';
import { Link } from 'react-router-dom';

function App() {

  return (
      <div className="App">
        <h1>AI FACE Landmark Detection</h1>
        <FaceApp />
      </div>
  );
}

export default App;
