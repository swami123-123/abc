import { useState,useRef } from "react";
import axios from "axios"

const Register=()=>{

    const [msg,setMsg]=useState("");

    const firstNameref=useRef("");
    const lastNameref=useRef("");
    const streetref=useRef("");
    const addressref=useRef("");
    const cityref=useRef("");
    const stateref=useRef("");
    const emailref=useRef("");
    const phoneref=useRef("");
    const usernameref=useRef("");
    const passwordref=useRef("");

   // const navigate=useNavigate();


    const Register=(e)=>{
        e.preventDefault();

       getData();
       
       }              
    

    const getData=async()=>{
            
      
        const res=await axios.post(`http://localhost:9008/reg`,{
        
            "firstName":firstNameref.current.value,
            "lastName":lastNameref.current.value,
            "street":streetref.current.value,
            "address":addressref.current.value,
            "city":cityref.current.value,
            "state":stateref.current.value,
            "email":emailref.current.value,
            "phone":phoneref.current.value,
            "username":usernameref.current.value,
            "password":passwordref.current.value,

            
        });
        const {data}=res;   

        if(data)
            { 
                
                 setMsg('Register success')
 
                // navigate('/Dashboard');
             }  
              else{
                 setMsg('please enter valid credentials')
                 }

      
    }
    

    return(<>
    <center>
    <h1>Register</h1>
    <input type="text" ref={firstNameref} placeholder="firstName" /><br/><br/>
    <input type="text" ref={lastNameref} placeholder="lastName" /><br/><br/>
        <input type="text" ref={streetref} placeholder="street" /><br/><br/>
      <input type="text" ref={addressref} placeholder="address" /><br/><br/>
      <input type="text" ref={cityref} placeholder="city" /><br/><br/>
    <input type="text" ref={stateref} placeholder="state" /><br/><br/>
      <input type="text" ref={emailref} placeholder="email" /><br/><br/>
     <input type="text" ref={phoneref} placeholder="phone" /><br/><br/>
    <input type="text" ref={usernameref} placeholder="username" /><br/><br/>
        <input type="password b" ref={passwordref} placeholder="password" /><br/><br/>
   
         <button onClick={Register}>Register</button>
        
        <h2>{msg}</h2>

        </center>
    </>)
}
export default Register;
