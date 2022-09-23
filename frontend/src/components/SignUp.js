import React from 'react'

export const SignUp = () => {
  return (
    <div>
        <div className="wrapper">

        <div className="login-div flex-column-centered">
            <div className="login-comps">
                <h1 className="text-center">Sign up</h1>
                    <form method="post" className="flex-column-centered">
                        <input type="text" name="username" id="user" placeholder="Username" required />
                        <input type="email" name="email" id="password" placeholder="Email" required />
                        <input type="text" name="password" id="user" placeholder="Password" required />
                        <input type="text" name="full_name" id="password" placeholder="Full Name" required />
                        <input type="number" name="sem" id="password" placeholder="Sem" required />
                        <input type="text" name="branch" id="password" placeholder="branch" required />
                        <input type="text" name="college_name" id="user" placeholder="College" required />
                        <input type="submit" value="Sign Up" />
                    </form>
                        <p style={{textAlign: 'center', color:'black'}}>Already have an account?</p>
                    <form action="/login" method="get" className="flex-column-centered">
                        <input type="submit" value="Login" />
                    </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SignUp;
