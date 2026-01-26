import React, { useContext } from 'react'
import StateContext from './StateContext.jsx'

export default function ChildA1() {
  const text = useContext(StateContext)
  return <h3>{text}</h3>
}
