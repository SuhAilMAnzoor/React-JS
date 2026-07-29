import React from 'react'
import { useDispatch } from 'react-redux'
import authServices from '../../appwrite/authServices'
import { logout } from '../../features/authSlice'

function LogoutBtn(){
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authServices.logout().then(() => {
            dispatch(logout())
        })
    }
    return (
        <button className='inline-block px-6 py-6 duration-200 
        hover:bg-blue-100 rounded-full'>Logout</button>
    )
}

export default LogoutBtn