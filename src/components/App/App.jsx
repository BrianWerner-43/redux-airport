import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';



function App() {
  let [planeInput, setPlaneInput] = useState('')
  const ourAirlines = useSelector((store) => store.airlines)


  const dispatch = useDispatch();

  const addAirline = (e) => {
    e.preventDefault()

    dispatch({
      type: 'ADD_AIRPLANE',
      payload: planeInput
    })
  }



  return (
    <div>
      <h1>Redux Airport</h1>
      <form onSubmit={addAirline}>
      <input placeholder='Airline Name'
      value={planeInput}
      onChange={(e) => setPlaneInput(e.target.value)}/>
      <button>Add Airline</button>
      </form>
      <table>{ourAirlines.map((index) => {
        return <tr>{index}</tr>
      })}</table>

    </div>
  );
}

export default App;
