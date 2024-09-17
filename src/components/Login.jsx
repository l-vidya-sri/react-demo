import React,{useState} from 'react'
import './Stylings/page.css'
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [formData, setFormData] = useState({
        name: "",
        password: ""
    })
    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault() 
        console.log(formData)
        axios.post('https://jobportal.codegnan.com/api/v1/studentlogin',{username:formData.name,password:formData.password})
        .then((res)=>{
            if(res.status===200){
                alert("Login Successful")
                localStorage.setItem("student_id",res.data.student_id)
                navigate("/")
                return;
            }
        })
        .catch((error)=>{
            console.log("status code",error.status)
            alert("Invalid credentials")
        })
    }
    function handleData(e){
        // console.log(e)
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value    
        }))
    }
    return (
        <div className='container'>
            <p>Login</p>
            <form onSubmit={handleSubmit}>
                <p><input type="text" name="name" placeholder='Enter the name' //onChange={handleName}   //onchange trigger when the change happen in input field
                    onChange={handleData}
                /></p>
                <p><input type="text" name="password" placeholder='Enter password'
                    onChange={handleData} />
                </p>
                <button>Submit</button>
            </form>
        </div>
    )
}
