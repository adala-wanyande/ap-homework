import React, { useState } from 'react'
import FirstChild from './FirstChild'

const Parent = () => {
    const [age, setAge] = useState<age>(21)
  return (
    <>
        <FirstChild age={age}/>
    </>
  )
}

export default Parent