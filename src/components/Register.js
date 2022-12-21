import React from 'react'
import {Link , useNavigate} from 'react-router-dom'

export default function Login() {
  return (
    <div>
        <div class="h-screen flex">
        <div class="flex w-1/2 bg-gradient-to-tr from-red-800 to-orange-300 i justify-around items-center">
            <div className='flex flex-col justify-center items-center'>
            <h1 className="text-white font-bold text-4xl font-sans">Do you already have an account?</h1> 
            <div className='flex'>
                <Link to="/signin"><button type="submit" className="block w-28 bg-white text-black-800 mt-4 py-2 rounded-2xl font-bold m-2">Sign In</button></Link>  
                <Link to="/"><button type="submit" className="block w-28 bg-white text-black-800 mt-4 py-2 rounded-2xl font-bold m-2">Go Home</button></Link>              </div>
            </div>
        </div>
        <div className="flex w-1/2 justify-center items-center bg-white">
            <form className="bg-white">
            <h1 className="text-gray-800 font-bold text-3xl mb-1">Welcome !</h1>
            <p className="text-sm font-normal text-gray-600 mb-7">Create an account</p>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                </svg>
                <input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Name" />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="grey">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <input className="pl-2 outline-none border-none" type="email" name="" id="" placeholder="Email Address" />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="grey">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
                <input className="pl-2 outline-none border-none" type="password" name="" id="" placeholder="Password" />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-camera-fill" viewBox="0 0 16 16">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
            </svg>
                <input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Photo" />
            </div>
            <button type="submit" className="block w-full bg-orange-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Sign Up</button>          
            </form>
        </div>
        </div> 
    </div>
  )
}
