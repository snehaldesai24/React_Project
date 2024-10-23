//import { useState } from 'react'
import './App.css'

import Nav from './components/nav/Nav'
import Routing from './components/routing/Routing'
import { useSelector } from 'react-redux'

function App() {

  let isLoggedIn = useSelector((storedata)=>{
    return storedata.LoginReducer.isLoggedIn;
  })

  return (
      <div>
        {
          isLoggedIn ? <Nav /> : null
        }
        <Routing/>

      </div> 
  )
}

export default App;
