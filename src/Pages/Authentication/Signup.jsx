import { useState } from "react"
import { Link } from "react-router-dom"
import { Authenticaion } from "../../Common/Authfunction"



const SignUp = () => {
    const [fname ,setFname]= useState('')
    const [lname ,setLname]= useState('')
    const [email ,setEmail]= useState('')
    const [password ,setPassword]= useState('')
    const handleSignup = (e)=>{
        e.preventDefault()
        const credential = {
            fname: fname,
            lname: lname,
            email: email, 
            password : password
        }
        Authenticaion('signup',credential).then((user) => {
          console.log(user.uid);
        })
    }
    return (
        <form action="">
            <label htmlFor="">First name</label>
            <input type="text" onChange={(e)=>{setFname(e.target.value)}} />
            <label htmlFor="">Last name</label>
            <input type="text"  onChange={(e)=>{setLname(e.target.value)}}/>
            <label htmlFor="">Email Address</label>
            <input type="email"  onChange={(e)=>{setEmail(e.target.value)}}/>
            <label htmlFor="">Password</label>
            <input type="password"  onChange={(e)=>{setPassword(e.target.value)}}/>
            <button onClick={(e)=>handleSignup(e)}> Signup </button>
            <div>
                Already have account? <Link to="/auth/login">Log in</Link>
            </div>
        </form>
    )
}

export default SignUp