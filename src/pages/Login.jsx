import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import login from '../assets/login.png'

const Login = () => {

    const {token, setToken, navigate} = useContext(ShopContext)
    const [currState, setCurrState] = useState('Login')

  return (
    <div className='absolute top-0 left-0 h-full w-full z-50 bg-white'>
        <div className='flex h-full w-full'>
            <div className='w-1/2 hidden sm:block'>
                <img src={login} alt="login image" className='object-cover h-full w-full' />
            </div>
            

            <div className='flex w-full sm:w-1/2 items-center justify-center'>
                <form className='flex flex-col items-center w-[90%] sm:max-w-md m-auto gap-y-5 text-gray-800'>
                    <div className='w-full mb-4'>
                        <h3 className='bold-36'>{currState}</h3>
                    </div>
                    {currState === "Sing Up" && (
                        <div className='w-full'>
                            <label htmlFor="name" className='medium-15'>Name</label>
                            <input type="text" placeholder='Name' className='ring-1 w-full px-3 py-1.5 ring-slate-900/10 rounded bg-primary mt-1' required/>
                        </div>
                    )}
                    <div className='w-full'>
                        <label htmlFor="email" className='medium-15'>Email</label>
                        <input type="text" placeholder='Email' className='ring-1 w-full px-3 py-1.5 ring-slate-900/10 rounded bg-primary mt-1' required/>
                    </div>
                    <div className='w-full'>
                        <label htmlFor="password" className='medium-15'>Password</label>
                        <input type="text" placeholder='Password' className='ring-1 w-full px-3 py-1.5 ring-slate-900/10 rounded bg-primary mt-1' required/>
                    </div>
                    <button className='btn-dark w-full mt-5 !py-[9px] !rounded-lg' type='submit'>{currState === "Sign Up" ? 'Sign Up' : "Login"}</button>
                    <div className='w-full flex flex-col gap-y-3'>
                        <div className='underline medium-15'>Forgot your password?</div>
                        {currState === "Login" ? (
                            <div className='underline medium-15'>
                                Don't have an account?
                                <span className='cursor-pointer' onClick={() => setCurrState('Sign Up')}> Create account</span>
                            </div>
                        ) : (
                            <div className='underline medium-15'>
                                Already have an account?
                                <span className='cursor-pointer' onClick={() => setCurrState('Login')}> Login</span>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login