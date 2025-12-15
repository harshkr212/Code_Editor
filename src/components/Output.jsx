import React, { useContext } from 'react'
import CodeContext from '../CodeStore/CodeContext'
const Output = () => {
  const context=useContext(CodeContext);
  const {output,setInput}=context;
  return (
      <div className='lg:w-1/5 h-1/3 lg:h-full bg-gray-600 text-green-600 overflow-auto p-2'>
        <strong>Input:</strong><br></br>
        <textarea onChange={(e)=>{setInput(e.target.value)}} className='bg-gray-600 outline-none text-lg font-semibold h-1/3 w-full'/><br></br>
      <strong>Output:</strong>
      <pre className='whitespace-pre-wrap break-words'>{output}</pre>
      {/* <pre>{output}</pre> */}
    </div>
  )
}

export default Output
