import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice.js'
import authService from '../../appwrite/auth.js'


function LogoutBtn() {
  const dispatch = useDispatch()

  const logouthandlar = () => {
    authService.logout()
      .then(() => {
        dispatch(logout())
      })
      .catch((error) => {
        console.error("Logout error:", error)
        alert("Failed to log out. Please try again.")
      })
  }
  return (
    <button
      className="inline-block px-6 py-2 text-sm font-medium text-white bg-red-600 rounded-full shadow-md transition duration-200 hover:bg-blue-700 focus:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      onClick={logouthandlar}
    >
      Logout
    </button>

  )
}

export default LogoutBtn