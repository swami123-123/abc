import { useState,useRef } from "react";
import axios from "axios"

const Login=()=>{

    const [msg,setMsg]=useState("");
    const [errorusername, setErrorusername]=useState("");
    const [errorpassword, setErrorpassword]=useState("");


    const usernameref=useRef("");
    const passwordref=useRef("");

   // const navigate=useNavigate();


    const login=(e)=>{
        e.preventDefault();


        setErrorusername("");
        setErrorpassword("");
        setMsg("");

       if(usernameref.current.value !== "" && passwordref.current.value !== "")
       {
            getData();
       }
       else
       {
        if(usernameref.current.value === "")
            {
                setErrorusername("Please enter a valid username");
            }
            
            if(passwordref.current.value === "")
            {
                setErrorpassword("Please enter a valid password");
            }
       }              
    }

    const getData=async()=>{
            
      
        const res=await axios.get(`http://localhost:9008/login`,{
            params: {
                username: usernameref.current.value,
                password: passwordref.current.value,
            },
        });
        const {data}=res;   

        if(data)
            { 
                 setErrorusername("");
                 setErrorpassword("");
                 setMsg('login success')
 
                // navigate('/Dashboard');
             }  
              else{
                 setMsg('please enter valid credentials')
                 }

      
    }
    

    return(<><center>
    <h1>Login</h1>
    <input type="text" ref={usernameref} placeholder="username" /><br/>
    <span style={{color:"red"}}>{errorusername}</span><br/><br/>

    <input type="password" ref={passwordref} placeholder="password" /><br/>
    <span style={{color:"red"}}>{errorpassword}</span><br/><br/>
         <button onClick={login}>Login</button>
        
        <h2>{msg}</h2>

        </center>
    </>)
}
export default Login;
