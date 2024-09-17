import React from 'react'
import { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function Input() {
    // const [name,setName]=useState("")
    // const [password,setPassword]=useState("")
    function handleSubmit(e) {
        e.preventDefault()  // it pervents to reload the page
        //alert("form handleSubmit "+name+password)
        console.log(formData)
    }
    // function handleName(e){
    //     console.log(e.target.value)   
    //     setName(e.target.value)    //it is used to store the data in variable function
    // }
    const [formData, setFormData] = useState({
        name: "",
        password: ""
    })

    function handleData(e) {
        console.log(e)
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value      //here the name is name attribute and value is user input
        }))
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        My Website
                    </Typography>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Contact</Button>
                </Toolbar>
            </AppBar>

            <form onSubmit={handleSubmit}>
                <p><input type="text" name="name" placeholder='Enter the name' //onChange={handleName}   //onchange trigger when the change happen in input field
                    onChange={handleData}
                /></p>
                <p><input type="password" name="password"
                    onChange={handleData}
                // onChange={(e)=>{setPassword(e.target.value)
                //     console.log(e.target.value)
                // }}         //it is directly using the function
                /></p>
                <Button variant="contained" color="primary">Submit</Button>
            </form>
        </div>
    )
}
