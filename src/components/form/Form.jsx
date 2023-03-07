import React from 'react'
import './Form.css'
import Card from '../card/Card'

export default function Form({user, show, handleChange, handleSubmit}) {
  return (
    <div>
        <form action="" onSubmit={handleSubmit} >
          <fieldset>
            <legend>Create user from</legend>
            <input 
              type="text" 
              placeholder='Nombre'
              name='name'
              value={user.name}
              onChange={handleChange}
            />
            <br />
            <input 
              type="email" 
              placeholder='Email'
              name='email'
              value={user.email}
              onChange={handleChange}
            />
            <br />
            <input 
              type="text" 
              placeholder='Password'
              name='password'
              value={user.password}
              onChange={handleChange}
            />
            <br />
            <button type='submit' >Send</button>
            <button type=''>Reset</button>
          </fieldset>
        </form>
        {show&& <Card user={user} />}
    </div>
  )
}
