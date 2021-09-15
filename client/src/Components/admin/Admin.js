import React from 'react'
import { useSelector } from 'react-redux'

const Admin = () => {
    const user = useSelector(state => state.userReducer.user)
    return (
        <div>
            {
                 user._id = "606b10ac0e58092aa030ff13" ? 
                <h2>Hello Admin</h2> :  <h1>Admin Zone</h1>
            }
        </div>
    )
}

export default Admin
