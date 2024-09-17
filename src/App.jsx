import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
//import List from './List.jsx'
//import Input from './Input.jsx'
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navigation from './components/Navigation.jsx'
import Patient from './components/Patient.jsx'


function App(){
  return(
    <div>
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/patient" element={<Patient/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

// function App() {
//   return (
//     <div>
    
    
//     <p>This is app data</p>
//       {/* <div>
        
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
//     </div>
//   )
// }

export default App
