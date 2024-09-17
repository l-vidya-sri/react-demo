import React,{useState} from 'react'
import './Stylings/Page.css'
import Fruits from './Fruits'

export default function Register() {
  const [fruits,setFruits]=useState([
    {fruitName:"watermelon",fruitPrice:50,Description:"Good for health"},
    {fruitName:"watermelon",fruitPrice:60,Description:"Good for health"},
    {fruitName:"watermelon",fruitPrice:70,Description:"Good for health"},
    {fruitName:"watermelon",fruitPrice:80,Description:"Good for health"}
  ]
  )
  return (
    <div>
      <p>This is Register page</p>
      <Fruits fruitsDetails={fruits}/>
    </div>
  )
}
