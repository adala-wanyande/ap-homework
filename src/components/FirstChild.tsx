import React from 'react'
import SecondChild from './SecondChild'

const FirstChild = ({age}: MyComponentProps) => {
  return (
    <SecondChild age={age}/>
  )
}

export default FirstChild