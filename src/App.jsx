import React from 'react'
import ChildA from './ChildA.jsx'
import ChildB from './ChildB.jsx'

export default function App() {
  const text = 'Hello World'
  return (
    <div>
      <h1>{text}</h1>
      <ChildA text={text} />
      <ChildB text={text} />
    </div>
  )
}
