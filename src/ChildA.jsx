import React, { useContext } from 'react'
import ChildA1 from './ChildA1.jsx'
import ChildA2 from './ChildA2.jsx'
import StateContext from './StateContext.jsx'

export default function ChildA() {
  const { text, name } = useContext(StateContext);

  return (
    <div>
      <h2>{text} - {name}</h2>
      <ChildA1 />
      <ChildA2 />
    </div>
  )
}
