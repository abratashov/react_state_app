import React from 'react'
import ChildA from './ChildA.jsx'
import ChildB from './ChildB.jsx'
import StateContext from './StateContext.jsx'

export default function App() {
  const text = 'Hello World';
  return (
    <StateContext.Provider value={text}>
      <div>
        <h1>{text}</h1>
        <ChildA />
        <ChildB />
      </div>
    </StateContext.Provider>
  );
}
