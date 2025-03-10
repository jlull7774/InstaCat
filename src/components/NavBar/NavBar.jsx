import "./NavBar.css"
import React from "react"
import { Link } from "react-router-dom"
import * as userService from "../../utilities/users-service"
import { PropaneSharp } from "@mui/icons-material"

const NavBar = ({ user, setUser }) => {
	function handleLogOut() {
		// Delegate to the users-service
		userService.logOut()
		// Update state will also cause a re-render
		setUser(null)
	}

  return (
    <div className='navbar-container'>
      <div className='instacat'>
        <h1>InstaCat</h1>
      </div>
      <div className='icons'>
      <Link to='/api/posts'><img src="/images/homeicon.png" className='icon' alt=""/></Link>
      <Link to={`/api/users/profiles/${user._id}/post`}><img src="/images/newposticon.png" className="icon" alt=""/></Link>
      <Link to={`/api/users/profiles/${user._id}/setting`}><img src="/images/settings.png" className="icon" alt=""/></Link>
      <Link to={`/api/users/profiles/${user._id}`}><img src="/images/usericon.png" className="icon db" alt=""/>{user.name}</Link>
      <Link to="" className="icon" onClick={handleLogOut}>Log Out</Link>
      </div>
    </div>
  );
}

export default NavBar
