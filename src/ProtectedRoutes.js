import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoutes = ({component: Component, ...rest}) => {
    const isAuthenticated = localStorage.getItem('dataAdmin')
    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/auth/login" />
                )
            }
        />
    )
}

export default ProtectedRoutes;