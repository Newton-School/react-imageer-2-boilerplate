import React from 'react'
import '../styles/App.css';
import star from '../star.png'
const App = () => {

  return (
    <div id="main">
      <input id="growby-input" type={'number'} />
      <img src={star} height={'300px'} width={'300px'} />
    </div>
  )
}


export default App;
