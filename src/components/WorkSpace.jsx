import React from 'react'
import CodeEditor from './CodeEditor'
import Output from './Output'
const WorkSpace = () => {
  return (
    <div className='flex flex-col lg:flex-row h-screen'>
        <CodeEditor/>
        <Output/>
      
    </div>
  )
}

export default WorkSpace
