import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

/** TODO: import REDUX **/
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

/** TODO: Add REDUCERS */
const airlines = (state =[], action) => {
    if(action.type === 'ADD_AIRPLANE') {
        const newplane = action.payload
        console.log(newplane)
        return [...state, newplane]
    }
    return state;
}


/** TODO: Create store */
const planes = createStore(
    combineReducers({
      airlines,
    })
  )


// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={planes}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
    </Provider>
);