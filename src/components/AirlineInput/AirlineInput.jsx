import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
function AirlineInput() {

    const dispatch = useDispatch();
    let [planeInput, setPlaneInput] = useState('')

    const addAirline = (e) => {
        e.preventDefault()
    
        dispatch({
          type: 'ADD_AIRPLANE',
          payload: planeInput
        })
      }

    return(
        <form onSubmit={addAirline}>
        <input placeholder='Airline Name'
        value={planeInput}
        onChange={(e) => setPlaneInput(e.target.value)}/>
        <button>Add Airline</button>
        </form>
    )

}


export default AirlineInput;