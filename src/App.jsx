import { useState } from 'react'
import Form from './components/form/Form';
import './App.css'




function App() {
  const [user, setUser] = useState({})
  const [show, setShow] = useState(false)
  const [messege, setMessege] = useState('')
  
  const validateUser = (userName) => {
    const withoutSpaces = userName.trim();
    if(withoutSpaces.length > 3){
      return true;
    } else {
      return false;
    }
  }
  
  const validatePassword = (password) => {
    const withoutSpace = password.trim();
    const passwordArray = password.split('');
    const hasNumer = (character) => {
      if(isNaN(character)){
        return false;
      } else {
        return true;
      }
    }
    if (withoutSpace.length > 5 && hasNumer){
      return true;
    } else {
      return false;
    }
  }

  const handleChange = ({ target }) => {
    const {name, value} = target;
    setUser((prev) => ({
      ...prev,
      id: Date.now(),
      [name]: value
    }))
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const validName = validateUser(user.name);
    const validPassword = validatePassword(user.password)
    if(!validName || !validPassword){
      setMessege('Verifique los datos ingresados')
    } else {
      setShow( () =>show ? false : true)
      setMessege('')
    }
  }
  

  return (
    <div className="App">
      <Form
        user={user}
        show={show}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <p className='error'>{messege}</p>
    </div>
  )
}

export default App
