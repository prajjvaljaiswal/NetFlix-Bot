import React from 'react'
import { auth } from '../utils/Firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import * from "../assets/images/";

function Header() {
  const user = useSelector((store)=>store.user)
  const navigate = useNavigate()
  const handelSignOut = ()=>{
    signOut(auth)
    .then(() => {
      
      // Sign-out successful.
      navigate('/')

    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from from-black z-10 w-full flex justify-between'>
        <img className='w-64 ml-20' 
        src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' 
        alt='logo'/>
        { user &&
          <button onClick={handelSignOut} className='font-bold '>sign-out</button>
        }
    </div>
  )
}

export default Header;