import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import BottomBox from './layout/BottomBox'
import Footer from './layout/Footer'
import MainBox from './layout/MainBox'
import MiddleBox from './layout/MiddleBox'
import Nav from './layout/Nav'
import ThreeBoxes from './layout/ThreeBoxes'
import TopDiv from './layout/TopDiv'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <TopDiv />
        <Nav />
        <MainBox />
        <MiddleBox />
        <ThreeBoxes />
        <BottomBox />
        <Footer />
      </Router>
    </div>
  )
}

export default App

