import React, { useState } from 'react'

const LoginTask = () => {
const[user,setUser] = useState({
    firstname:"",
    email:"",
    password:"",
});
    const [error,setError] = useState('');
   
   


   
        const validation=()=>{
            let error={};
            const firstNamePat = /^[a-zA-Z]{1,8}$/;

            const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const passwordPattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        
        if(!user.email){
            error.email="Email address is required"
        }
        else if(!emailPattern.test(user.email)){
            error.email='Invalid email address'
        }
        
        if(!user.password){
            error.password="Password is required"
        }
        else if(!passwordPattern.test(user.password)){
            error.password='Invalid Password'
        }
        if(!user.firstname){
            error.firstname = "FirstName is required"
        } else if (!firstNamePat.test(user.firstname)){
            error.firstname = 'should be minm of 8 characters'
        }
        return error;
          }
    

    let name, value;

    const postUserData = (e) =>{
        name = e.target.name;
        value = e.target.value;
        if(name === "email"){
            if(value.trim().length === 0){
                setUser({...user,email:""});
                setError({...error,email:"Email is required"})
            }
            else {
                setUser({...user,email:value});
                setError({...error,email:""})
            }
        }

        if(name === "password"){
            if(value.trim().length===0){
                setUser({...user,password:""});
                setError({...error,password:"password cannot be empty"})
            }
            else {
                setUser({...user,password:value});
                setError({...error,password:""});
            }
        }
        if(name === "firstname"){
            if(value.trim().length===0){
                setUser({...user,firstname:""});
                setError({...error,firstname :"firstname cannot be empty"})
            }
            else {
                setUser({...user,firstname:value});
                setError({...error,firstname:""});
            }
        }
    return error;
    };

    const submit = (e) =>{
        e.preventDefault();
        setError(validation())
    }

    return (
        <>
<div className='container'>
    <div className='row justify-content-center align-items-center'>
        <div className='col-lg-12'>
            <form action = '#' method='post'>
                <div className='form-group'>
                <label htmlFor="firstname">FirstName</label> <br />
            <input
                type='firstname'
                name='firstname'
                value={user?.firstname}
               onChange={(e)=>postUserData(e)}
            />
            <br />
                <label htmlFor="email">Email</label> <br />
            <input
                type='email'
                name='email'
                value={user?.email}
               onChange={(e)=>postUserData(e)}
            />
<br/>
<label htmlFor="password">Password</label> <br />
            <input
                type='password'
                name='password'
                 value={user?.password}
                 onChange={(e)=>postUserData(e)}
            />

            <span style={{color:"red"}}>{error?.password}</span>
                </div>
                <div>
                <button className='btn btn-warning text-white' onClick={submit}>Submit</button>
                </div>
            </form>
        </div>
    </div>
</div>
        
<br />
    


        </>
    )
}

export default LoginTask