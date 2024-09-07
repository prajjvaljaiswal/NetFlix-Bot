import React, { useState } from 'react'
import Header from './Header'

export const Login = () => {

    const [isLogin,setIsLogin] = useState(false);  

    function toggleSignInForm(){
        setIsLogin(!isLogin);
    }

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg'
            alt='Bg' />
        </div>
        <form className='absolute bg-black my-36 w-3/12 p-12 mx-auto right-0 left-0 text-white
        bg-opacity-80 rounded-lg'>

            <h1 className='text-3xl font-bold py-4'>{isLogin?'Sign-in':"Sign-up"}</h1>
            <input type='text' placeholder='email' className='p-2 my-4 w-full bg-black bg-opacity-50'/>
            {
                (!isLogin && <input type='text' placeholder='username' className='p-2 my-4 w-full bg-black bg-opacity-50'/>)
            }
            <input type='password' placeholder='password' className='p-2 my-4 w-full bg-black bg-opacity-50'/>
            <h1 className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                {isLogin?"New to Netflix? Sign up now":"Alredy Signed up? Sign in now"}
            </h1>
            <button className='p-4 my-6 w-full bg-red-600 rounded-lg'>
                {isLogin?'Sign-in':"Sign-up"}
            </button>

        </form>
    </div>
  )
}
