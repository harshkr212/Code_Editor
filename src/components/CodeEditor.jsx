import React, { useContext, useState } from 'react'
import Editor from "@monaco-editor/react";
import CodeContext from '../CodeStore/CodeContext';


const CodeEditor = () => {
 
  const context=useContext(CodeContext);
  const {language,code,setCode}=context;

 
  
  return (
     <div className='h-2/3 lg:h-full lg:flex-1'>
 
        <Editor
      height="100%"
     
      defaultLanguage={language.value}
      defaultValue="Write Code Here"
      theme="vs-dark"
      onChange={(value)=>{setCode(value)}}
      value={code || language.boilerplate}
      key={language.value}
    />
    </div>
  )
}

export default CodeEditor
