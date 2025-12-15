import CodeContext from "./CodeContext";
import React, { useState,useEffect } from 'react'
import { Languages } from "../components/Constant";

const CodeState = (props) => {
   
   const [input,setInput]=useState('');
   const [output,setOutput]=useState('');
   const [loading,setLoading]=useState(false);
  
  const [language,setLanguage]=useState(Languages[0]);
  const [code,setCode]=useState(language.boilerplate);
   useEffect(()=>{
    setCode(language.boilerplate)
  },[language])
  const ExecuteProgram=async()=>{
    setLoading(true);
    const response=await fetch("https://emkc.org/api/v2/piston/execute",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({
        language:language.value,
        version:"*", //latest version
        files:[
           {name:`main.${language.value}`,
            content:code,
          },
        ],
        stdin:input,
         //optional user input
      }),
    });
    const data=await response.json();
    setOutput(data.run.output || data.run.stderr);
    setLoading(false);
    console.log(data);
    console.log("Output:",output);

  }
  return (
    <div>
      <CodeContext.Provider value={{language,setLanguage,code,setCode,ExecuteProgram,output,setInput,loading}}>
      {props.children}
      </CodeContext.Provider>
    </div>
  )
}

export default CodeState
