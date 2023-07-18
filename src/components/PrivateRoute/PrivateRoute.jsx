import React from 'react'
import { Navigate } from 'react-router-dom'


function PrivateRoute({ reDirectPath, children, privateRole }) {
  const authContext = {
    isLogin: true,
    authContext: {
      userInfo: {
        role: [
          'admin',
          'supporter'
        ]
      }
    }
  }

  switch (privateRole) {
    case 'isUserLoggedIn': {
      return authContext.isLogin ? children : <Navigate to={reDirectPath} />
    }

    case 'isUserNotLoggedIn': {
      return authContext.isLogin ? children : <Navigate to={reDirectPath} /> // Reverse this section on production mode
    }

    case 'isSupporter': {
      return ['admin', 'supporter'].includes(authContext.userInfo.role) ? children : <Navigate to={reDirectPath} />
    }

    case 'isAdmin': {
      return authContext.userInfo.role === 'admin' ? children : <Navigate to={reDirectPath} />
    }

    default: {
      return children
    }
  }
}

export default PrivateRoute