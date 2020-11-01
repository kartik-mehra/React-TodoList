import React, { useState } from "react";
import './input.css'
const Input = ({state,setstate}) => {
  
    const [txt, setTxt] = useState('')
    return (

        <div style={{backgroundColor:'transparent',width:'100vw' , maxWidth:'30em',display:'flex',
        alignItems:'center',
    justifyContent:'center',
    }}> 
            <input style = {{width:'60vw'}}type="text" value={txt} onChange={(e)=>{setTxt(e.target.value)}}></input>
            <button style = {{width:'20vw'}} className="button1" onClick={()=>{
                if(txt=="") return;
                setstate([{
                    id:(!state.length)?0:(state[state.length-1].id+1),
                    title:txt,
                    completed:false,
                    userId:(!state.length)?0:(state[state.length-1].id+1),
                },...state])

                // setstate([...state,{
                //     id:(!state.length)?0:(state[state.length-1].id+1),
                //     title:txt,
                //     completed:false
                // }])
            }}>Submit</button>
        </div>

    )
} 
export default Input;