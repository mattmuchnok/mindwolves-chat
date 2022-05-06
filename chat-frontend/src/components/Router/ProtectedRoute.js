import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ component: Component, ...props }) => {

    const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn)

    return (
        <Route {...props}
            render={(props) => (
                isLoggedIn
                    ? <Component {...props} />
                    : <Navigate to='/login' />
            )}
        />
    );
}

export default ProtectedRoute