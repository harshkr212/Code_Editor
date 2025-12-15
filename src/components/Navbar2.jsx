import React, { useContext, useState } from 'react'
import {Languages} from './Constant.js'
import CodeContext from '../CodeStore/CodeContext.jsx';
const Navbar2 = () => {
    
    const [theme,setTheme]=useState("");
    const context=useContext(CodeContext);
    const{setLanguage,ExecuteProgram,loading,setCode}=context;

    return (
        <div className='flex h-12 bg-slate-800 justify-between items-center px-3' >
            <div className=''>
                <select
                className='p-2 rounded-md bg-slate-700 text-white text-lg font-medium'
                onChange={(e)=>{setLanguage(Languages.find((lang)=>lang.value===e.target.value))
                        
                }
                                
            }
                >
                    {Languages.map((lang,key)=>(
                        <option key={key} value={lang.value}>{lang.label}</option>
                    ))}
                </select>
            </div>
            <div className='flex items-center lg:w-1/4'>
                <div className='ml-2'>
                    <button className='bg-green-600 p-2 rounded-lg font-bold text-white hover:bg-green-800 '
                    onClick={()=>{ExecuteProgram()}}>{loading?'Loading...':'Run Code'}</button></div>
                <div className='ml-auto pl-2'>
                    <select  className='p-2 rounded-md bg-slate-700 text-white text-lg'>
                        <option>Light</option>
                        <option>Dark</option>
                        <option>Blue</option>
                        <option>Light</option>

                    </select>
                </div>
            </div>

        </div>
    )
}

export default Navbar2
