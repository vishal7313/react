import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext); // setUser define in UserContext from '../context/UserContext'

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input 
            type='text'
            value={username} 
            onChange={(e) => setusername(e.target.value)}
            placeholder='Username' 
        />
        {""}
        <input
            type='text'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
        />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login