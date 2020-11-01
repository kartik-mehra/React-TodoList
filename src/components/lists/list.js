import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './list.css'
const List = ({ state, setstate }) => {

    
    const refere = [];
    
    const dataList = (state.length) ? (
        state.map((e,i) => {
            
            const strikeThr = e.completed?"strikeThrou":"";
            return (
            <div style={{display: 'flex',width:'88vw', maxWidth:'30em',justifyContent:'center',alignItems:'center'}} key={i}>
                <p className={strikeThr} style={{ width: "70%", display: 'inline-block', flex: 1,textAlign:'start' }} ref={(ref) => refere[i] = ref}>
                    {
                        e.title
                    }
            </p>

                <button className="button4" style={{ marginLeft: '1em', backgroundColor: 'red', textAlign: 'center' }}
                onClick={()=>{
                    let newState = [...state]
                    newState.splice(i,1);
                    setstate(newState)
                }}
                >
                    <FontAwesomeIcon icon={faTrashAlt} style={{ color: 'white', alignSelf: 'center' }} />
                </button>

                <button className="button4" style={{ marginLeft: '1em', backgroundColor: 'green', textAlign: 'center' }}
                
                onClick = {()=>{
                    let newState = [...state]
                    if(newState[i].completed) return;
                    newState[i].completed=true;
                    setstate(newState)
                }}
                >
                    <FontAwesomeIcon icon={faCheck} style={{ color: 'white', alignSelf: 'center' }} />
                </button>
            </div>
            )
        })
    ) : null;



    return (

        <div style={{
            backgroundColor: 'transparent', width: '100vw',maxHeight:'85vh',
            marginBottom: '2em',
            overflow: "auto",
            justifyContent:'flex-start',
            display:'flex',
            alignItems:'center',
            flexDirection:'column',
            maxWidth:'32em'
          
        
        
        }}>
     {/* <div style={{   height:"120px",width:'120px',border:"1px solid #ccc",font:"16px/26px Georgia, Garamond, Serif",overflow:"auto"}}> */}
            
            {
                dataList
            }
            

            {/* <div style={{ flex: 1, display: 'flex' }}>
                <text style={{ width: "70%", marginTop: '0.4em', display: 'inline-block', flex: 1 }}>
                    sdadsa
            </text>

                <button className="button4" style={{ marginLeft: '1em', backgroundColor: 'red', textAlign: 'center' }}>
                    <FontAwesomeIcon icon={faTrashAlt} style={{ color: 'white', alignSelf: 'center' }} />
                </button>

                <button className="button4" style={{ marginLeft: '1em', backgroundColor: 'green', textAlign: 'center' }}>
                    <FontAwesomeIcon icon={faCheck} style={{ color: 'white', alignSelf: 'center' }} />
                </button>
            </div> */}

        </div>

    )
}
export default List;