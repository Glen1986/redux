import { useState } from 'react';
import {useHistory} from 'react-router-dom';

const Login =({setIsAllowed})=>{

  const history = useHistory()

  const  [email, setEmail] = useState("")
  const  [password, setPassword] = useState("")
  const  [error, setError] = useState(false)

  const handleLogin =()=>{
    const mockedEmail = "glen@gmail.com"
    const mockedPassword = "123456"

    if( email === mockedEmail && password === mockedPassword ){
      setIsAllowed(true)
    setError(false)
      history.push("/home")
    }else{
      setError(true)
    }
  }

  return(
    <>
      <input value={email} onChange={e=>setEmail(e.target.value)}/>
      <input value={password} onChange={e=>setPassword(e.target.value)}/>
      <button onClick={handleLogin}>Entrar</button>
      {error && <span>email o seña no encontrado</span> }
    </>
  )
} 
export default Login;
