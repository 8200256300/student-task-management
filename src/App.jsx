import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

const DefaultRoute =() => {
  const authData = JSON.parse(localStorage.getItem('authData'));
  if(authData){
      return<Navigate to = "/Login" replace/>;
  }
  return <Navigate to = "/Register" replace/>;
}
  
function App() {
const route = createBrowserRouter([
  {
    path:"/",
    element: <DefaultRoute/>
  },
    {
      path: "/Login",
      element: <Login />
    },
    {
      path: "/Register",
      element: <Register />
    }
  ])

  return <RouterProvider router={route}/>
}

export default App