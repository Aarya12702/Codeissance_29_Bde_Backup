import React from 'react'

export const Login = () => {
  return (

    <div className="wrapper">

        <div className="login-div flex-column-centered">
            <div className="login-comps">
                <h1 className="text-center">Login</h1>
                <form method="post" className="flex-column-centered">
                    <input type="text" name="username" id="user" placeholder="Username" required />
                    <input type="password" name="password" id="password" placeholder="Password" required />
                    <input type="submit" value="Login" />
                </form>
                    <p style={{textAlign:'centre', color: 'black'}}>Don't have an account?</p>
                <form action="/signup" method="get" className="flex-column-centered">
                    <input type="submit" value="Signup" />
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login;