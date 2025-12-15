import { useState } from 'react'

import Navbar2 from './components/Navbar2'
import WorkSpace from './components/WorkSpace'
import CodeState from './CodeStore/CodeState'


function App() {
  

  return (
    <>
    <CodeState>
     
    <Navbar2/>
   
      
      <WorkSpace/>
      </CodeState>
    </>
  )
}

export default App
