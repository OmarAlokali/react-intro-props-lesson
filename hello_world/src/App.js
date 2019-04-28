import React from 'react';
import './App.css';
import Show from './Show';

function App(props) {
  console.log(props)

  return (
    <div className="App">
      <h1>Hello Misk!</h1>
      <p>Hello, my name is {props.marc.firstName} and my last name is {props.marc.lastName}</p>
      
        {props.marc.favoriteShows.map((show, index) => {
            return <Show show={show} key={index}/>
          })
        }

    </div>
  );
}

export default App;
