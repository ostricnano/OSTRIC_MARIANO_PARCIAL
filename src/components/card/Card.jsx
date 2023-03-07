import React from 'react'
import './Card.css'

export default function Card({user}) {
  return (
    <div className='display-card'>
      <h3>Datos de la cuenta</h3>
      <p>Nombre: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
    </div>
  )
}
