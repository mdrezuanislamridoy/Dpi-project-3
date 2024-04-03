

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"

//Authenticaion page
import Auth from "./Pages/Authentication/Auth"
import Login from "./Pages/Authentication/Login"
import SignUp from "./Pages/Authentication/Signup"


//Home page 
import Inbox from "./Pages/Primary/Inbox"
import Others from "./Pages/Primary/Others"
import Profile from "./Pages/Primary/Profile"
import RootLayout from "./Pages/Primary/Root-layout"

//chatview 
import ChatView from "./Pages/Secondary/ChatView"
//Other people profile page 
import OthersProfile from "./Pages/Secondary/OthersProfile"

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path='/auth' element={<Auth />}>
                    <Route path="/auth/login" element={<Login />}> </Route>
                    <Route path="/auth/signup" element={<SignUp />}> </Route>
                </Route >
                <Route path="/" element={<RootLayout />}>
                    <Route path='/' element={<Profile />}> </Route>
                    <Route path="/inbox" element={<Inbox />}> </Route>
                    <Route path="/others" element={<Others />}></Route>
                </Route>
                <Route path="/inbox/:chatID" element={<ChatView />}> </Route>
                <Route path="/others/:uid" element={<OthersProfile />}> </Route>
            </Route >
        )
    )
    return (
        <RouterProvider router={router} />
    )
}

export default App
