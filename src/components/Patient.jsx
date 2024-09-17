import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function Patient() {
    const [details,setDetails]=useState({
        name:"",
        age:"",
        gender:"",
        salary:"",
        specialization:"",

    })
    function handleSubmit(e){
        e.preventDefault()
        console.log(details)
        axios.post("https://doc-back.onrender.com/doctors",{
            name:details.name,
            age:details.age,
            gender:details.gender,
            salary:details.salary,
            specialization:details.specialization
        })
        .then((res)=>{
            console.log(res)
        })
    }
    function handleInputChange(e){
        const {name,value}=e.target
        setDetails((prev)=>({
            ...prev,
            [name]:value
        }))
    }
  return (
    <div className='patient-container'>
      <h1>Patient Details</h1>
      <form className='form-body' onSubmit={handleSubmit}>
        <p><input type="text" name="name" placeholder='Enter your name' onChange={handleInputChange}/></p>
        <p><input type="number" name="age" placeholder='Enter age' onChange={handleInputChange}/></p>
        <p><input type="radio" name="gender" value="Male" onChange={handleInputChange}/>Male
        <input type="radio" name="gender" value="Female" onChange={handleInputChange}/>Female
        </p>
        {/* <p><input type="text" name="Gender" onChange={handleInputChange}/>
        </p> */}
        <p><input type="text" name="salary" placeholder='Enter salary' onChange={handleInputChange}/></p>
        <p><input type="text" name="specialization" placeholder='Enter specialization' onChange={handleInputChange}/></p>
        <button>Submit</button>
      </form>
    </div>
  )
}
