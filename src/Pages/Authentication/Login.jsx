import { Link } from "react-router-dom"



const Login = () => {
  return (
    <form action="">
        <label htmlFor="">Enter email</label>
        <input type="text" />
        <label htmlFor="">Enter password</label>
        <input type="password" />
        <button> Log in </button>
        <div>
            <p>New here? <Link to="/auth/signup">Sign up </Link></p>
        </div>
    </form>
  )
}
export default Login