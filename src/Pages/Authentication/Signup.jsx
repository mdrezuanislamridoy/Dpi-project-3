import { Link } from "react-router-dom"



const SignUp = () => {
    return (
        <form action="">
            <label htmlFor="">First name</label>
            <input type="text" />
            <label htmlFor="">Last name</label>
            <input type="text" />
            <label htmlFor="">Email Address</label>
            <input type="email" />
            <label htmlFor="">Password</label>
            <input type="password" />
            <button> Signup </button>
            <div>
                Already have account? <Link to="/auth/login">Log in</Link>
            </div>
        </form>
    )
}

export default SignUp