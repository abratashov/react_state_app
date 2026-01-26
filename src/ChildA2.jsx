import React, { useContext } from 'react'
import StateContext from './StateContext.jsx'

export default function ChildA2() {
  const { text, name } = useContext(StateContext);

  return <h3>{text} - {name}</h3>
}
