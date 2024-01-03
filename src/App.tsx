import React from 'react'
import './App.css'

import TopAppBar from './components/TopAppBar'

function App() {
  const width = window.innerWidth;

  return (
    <div style={{width: width}}>
      <TopAppBar />
      <div>
        Body
      </div>
    </div>
  )
}

export default App
