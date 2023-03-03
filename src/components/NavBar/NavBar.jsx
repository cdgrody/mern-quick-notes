import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service' 

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <nav>
            &nbsp;&nbsp; Welcome, {user.name.charAt(0).toUpperCase() + user.name.slice(1,user.name.length)}<br></br>
            <Link to="/">Notes List</Link>
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}