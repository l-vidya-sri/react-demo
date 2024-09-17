import React,{useEffect,useState} from 'react'
import './Stylings/page.css'
import axios from 'axios'
export default function Home() {
  const [doctor,setDoctor]=useState([])
  useEffect(()=>{
    axios.get("https://doc-back.onrender.com/doctors")
    .then((res)=>{
      console.log(res.data)
      setDoctor(res.data)
    })
  },[])
  return (
    <div class="home-container">
    <h1>Doctor Details</h1>
    <div className='doctorDetails'>
      {
        doctor.map((i)=>{
          return (
            <div className='doctorDetails-child'>
              <p>Name:{i.name}</p>
              <p>Gender:{i.gender}</p>
              <p>Age:{i.age}</p>
              <p>specialization:{i.specialization}</p>
            </div>
          )
          
        })
      }
    </div>
    </div>
  )
}
