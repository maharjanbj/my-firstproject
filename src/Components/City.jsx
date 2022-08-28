import React from 'react'
import './City.css'

const City = (props) => {
  return (
    <p> Hello, I am in London {props.city}. It is {props.features}.</p>
  )
}
export default City