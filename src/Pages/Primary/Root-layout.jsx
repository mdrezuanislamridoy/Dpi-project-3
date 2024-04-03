import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"

const RootLayout = () => {
    return (
        <div>
            <header>
                <nav>
                    <NavLink to='/'> Profile </NavLink>
                    <NavLink to='/others'> Other People </NavLink>
                    <NavLink to='/inbox'> Inbox </NavLink>
                </nav>
            </header>
            <Outlet />
        </div>
    )
}

export default RootLayout