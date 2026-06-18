import React, {useContext} from 'react'
import UserContext from '../../context/userContext/userContext'

function Profile(){
    
    const {user} = useContext(UserContext)  // get the data from user context's variable user

    if(!user)
    return <div className='flex items-center justify-center py-10'><div className='bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md text-center text-2xl text-gray-600'>Please Login First</div></div>    

    return <div className='flex items-center justify-center py-10'><div className='bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md text-center text-3xl font-bold text-green-600'>Welcome {user.username} 👋</div></div>
}
export default Profile