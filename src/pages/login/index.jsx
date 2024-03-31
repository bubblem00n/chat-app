import React from 'react'
import s from "./login.module.scss"

const LoginPage = () => {
  return (
    <div>
    <div className={s.root}>
      <div className={s.wrapper}>
        <span className={s.logo}>Strange Chat</span>
        <span>Login</span>

        <form>
          <input type="email"  placeholder='email'/>
          <input type="password" placeholder='password'/>
          <button>Sign In</button>
        </form>

        <p>Don't have an account? Register</p>
      </div>
    </div>
    </div>
  )
}

export default LoginPage