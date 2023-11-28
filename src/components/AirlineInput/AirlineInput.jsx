import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
function AirlineInput() {

    const dispatch = useDispatch();
    let [planeCount, setPlaneCount] = useState('')
    let [planeInput, setPlaneInput] = useState('')

    const addAirline = (e) => {
        e.preventDefault()

        dispatch({
            type: 'ADD_AIRPLANE',
            payload: {
                planeCount: planeCount,
                planeInput: planeInput
            }
        })
       
        setPlaneInput('')
        setPlaneCount('')
      }

    return(
        <form onSubmit={addAirline}>
        <input placeholder='Airline Name'
        value={planeInput}
        onChange={(e) => setPlaneInput(e.target.value)}/>
        <input placeholder='Num of planes'
        value={planeCount}
        type="number"
        onChange={(e) => setPlaneCount(e.target.value)}/>
        <button>Add Airline</button>
        </form>
    )

}


export default AirlineInput;