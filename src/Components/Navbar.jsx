import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';
const Navbar = () => {
 
  const {user , logOut}= use(AuthContext);
 const handleLogOut=()=> {
  console.log("USer Trying to logout")
  logOut().then(()=>{alert("You logged out Successfully")})
  .catch((error)=> {
    console.log(error)
  })
 }
  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login_btn flex gap-6">
        <img className='w-12 rounded-full' src={`${user ? user.photoURL : userIcon }`} alt="" />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-10">Logout</button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;