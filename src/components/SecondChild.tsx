import React from 'react'
import ThirdChild from './ThirdChild'

const SecondChild = ({age}: MyComponentProps) => {
  return (
    <ThirdChild age={age}/>
  )
}

export default SecondChild