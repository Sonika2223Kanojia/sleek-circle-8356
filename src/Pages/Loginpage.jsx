import React, { useContext, useState } from 'react'
import styles from "../Components/CSS/Home.module.css"
import { useNavigate,useLocation, Navigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import { Input,Text } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { LOGIN_SUCCESS } from '../Redux/actionTypes'
import { login } from '../Redux/action'
import Footer from '../Components/Footer'
export default function Loginpage() {
    const dispatch=useDispatch()
    const user=useSelector((store)=>{
        return store.reducer.Register
      })
    const isAuth=useSelector((store)=>{
        return store.reducer.isAuth
      })

const navigate=useNavigate()
const location=useLocation()
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const toast = useToast()
    const HandleFormRequest=(e)=>{
        e.preventDefault()
   if(user.email==email && user.password==password){
    
    dispatch(login(user))
        toast({
            title: 'Login SuccesFull',
            // description: "We've created your account for you.",
            status: 'success',
            position: 'top',
            duration: 3000,
            isClosable: true,
          })
        navigate(location.state,{replace:true})
    
   
   }else{
    toast({
        title: `User Not Found`,
        position: 'top',
        isClosable: true,
        duration: 4000,
      })
   }
    }
    

    return (
        <div style={{backgroundColor:"#c2fbd7"}} >
           
            {isAuth && <Navigate to="/home" />}
            <h1 style={{fontWeight:"bold",paddingTop:"20px"}}>Login Page</h1>
            <form   onSubmit={HandleFormRequest}>
            
                <Input w={200} mb={3}  bg={"white"} 
                style={{marginTop:"20px",marginBottom:"10px"}}
                    type = "email"
                    
                    data-testid = "email"
                    placeholder = "abc@gmail.com"
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
                <br />
                <Input w={200} mb={3} bg={"white"} 
                style={{marginBottom:"10px"}}
                    type = "password"
                    
                    placeholder = "12345"
                    onChange={(e)=>{setPassword(e.target.value)}}
                />
                <br />
                <Input bg={"white"}  w={100} mb={40} className={styles.button} type = "submit" />


            </form>  
              <Footer />            
        </div>
    )
}
