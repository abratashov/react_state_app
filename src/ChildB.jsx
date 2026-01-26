import React from 'react'
import ChildB1 from './ChildB1.jsx'
import ChildB2 from './ChildB2.jsx'

export default function ChildB({ text }) {
  return (
    <div>
      <h2>{text}</h2>
      <ChildB1 text={text} />
      <ChildB2 text={text} />
    </div>
  )
}
