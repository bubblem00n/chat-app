import React from 'react'
import s from "./register.module.scss"

const RegisterPage = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <span className={s.logo}>Strange Chat</span>
        <span>Register</span>

        <form>
          <input type="text" placeholder='name'/>
          <input type="email"  placeholder='email'/>
          <input type="password" placeholder='password'/>
          <input type="file"/>
          <button>Sign Up</button>
        </form>

        <p>Already have an account? Login</p>
      </div>
    </div>
  )
}

export default RegisterPage