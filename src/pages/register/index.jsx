import React from 'react'
import s from "./register.module.scss"
import avatar from "../../assets/img/avatarAdd.png"

const RegisterPage = () => {
  return (
    <div className={s.root}>
      <div className={s.wrapper}>
        <span className={s.logo}>Strange Chat</span>
        <span>Register</span>

        <form>
          <input type="text" placeholder='name'/>
          <input type="email"  placeholder='email'/>
          <input type="password" placeholder='password'/>
          <input style={{display: "none"}} type="file" id='file'/>
          <label htmlFor="file">
            <img src={avatar} alt="" />
            <span>Add avatar</span>
          </label>
          <button>Sign Up</button>
        </form>

        <p>Already have an account? Login</p>
      </div>
    </div>
  )
}

export default RegisterPage