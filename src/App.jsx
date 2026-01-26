import React from 'react'
import ChildA from './ChildA.jsx'
import ChildB from './ChildB.jsx'
import StateContext from './StateContext.jsx'

export default function App() {
  const text = 'Hello World';
  const name = 'Mike';
  const value = { text, name };

  return (
    <StateContext.Provider value={value}>
      <div>
        <h1>{text} - {name}</h1>
        <ChildA />
        <ChildB />
      </div>
    </StateContext.Provider>
  )
}
