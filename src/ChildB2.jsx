import React, { useContext } from 'react'
import StateContext from './StateContext.jsx'

export default function ChildB2() {
  const text = useContext(StateContext)
  return <h3>{text}</h3>
}
