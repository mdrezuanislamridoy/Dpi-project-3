import { Link } from "react-router-dom"

const Inbox = () => {
    return (
        <div>
            <h1> Messaging page </h1>
            <Link to='/inbox/1'> Thread 1 </Link>
            <Link to='/inbox/2'> Thread 2 </Link>
            <Link to='/inbox/3'> Thread 3</Link>
        </div>
    )
}

export default Inbox