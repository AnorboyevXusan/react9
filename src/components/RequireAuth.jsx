import {Navigate, Outlet} from "react-router";

function RequireAuth() {
  const values = Object.keys(localStorage)
  return (
    values.includes('token') ?
        <Outlet/>
        :<Navigate to='/login'/>
  )
}

export default RequireAuth