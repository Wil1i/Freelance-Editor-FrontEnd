import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx"
import Home from "./pages/Home/Home.jsx"
import Register from "./pages/Register/Register.jsx"

const routes = [
  { path: '/', element: <Home /> },
  {
    path: '/register',
    element: <PrivateRoute reDirectPath='/' privateRole={'isUserNotLoggedIn'}> <Register /> </PrivateRoute>
  },
]

export { routes }