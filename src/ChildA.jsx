import React from 'react'
import ChildA1 from './ChildA1.jsx'
import ChildA2 from './ChildA2.jsx'

export default function ChildA({ text }) {
  return (
    <div>
      <h2>{text}</h2>
      <ChildA1 text={text} />
      <ChildA2 text={text} />
    </div>
  )
}
