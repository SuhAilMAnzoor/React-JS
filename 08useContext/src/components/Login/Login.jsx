import React, {useState, useContext} from 'react'
import UserContext from '../../context/userContext/userContext'

function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser, user} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
    return (
        <div className='flex items-center justify-center py-10'>
            <div className='bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md'>
                <h2 className='text-4xl font-bold text-center text-gray-800 mb-10'>Login</h2>
                
                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className='flex flex-col items-center'>
                        <label className='text-sm font-medium text-gray-700 mb-3 w-full'>Username</label>
                        <input 
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder='Enter your username'
                            className='w-full px-5 py-3 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300 text-center'
                        />
                    </div>
                    
                    <div className='flex flex-col items-center'>
                        <label className='text-sm font-medium text-gray-700 mb-3 w-full'>Password</label>
                        <input 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Enter your password'
                            className='w-full px-5 py-3 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300 text-center'
                        />
                    </div>
                    
                    <div className='flex justify-center pt-4'>
                        <button 
                            type='submit'
                            className='bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-10 rounded-full transition duration-200 transform hover:scale-105 active:scale-95 shadow-lg'
                        >
                            Submit
                        </button>
                    </div>
                </form>

                <div className='mt-4'>
                    {!user ? (
                        <div className='text-center text-lg text-gray-600'>Please Login</div>
                    ) : (
                        <div className='text-center text-2xl font-bold text-indigo-600'>Welcome {user.username}</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Login