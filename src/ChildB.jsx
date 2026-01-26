import React, { useContext } from 'react'
import ChildB1 from './ChildB1.jsx'
import ChildB2 from './ChildB2.jsx'
import StateContext from './StateContext.jsx'

export default function ChildB() {
  const { text, name } = useContext(StateContext);

  return (
    <div>
      <h2>{text} - {name}</h2>
      <ChildB1 />
      <ChildB2 />
    </div>
  )
}
