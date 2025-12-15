import { useState } from 'react'

import Navbar2 from './components/Navbar2'
import WorkSpace from './components/WorkSpace'
import CodeState from './CodeStore/CodeState'
import Navbar1 from './components/Navbar1'

function App() {
  

  return (
    <>
    <CodeState>
      {/* <Navbar1/> */}
    <Navbar2/>
   
      
      <WorkSpace/>
      </CodeState>
    </>
  )
}

export default App
