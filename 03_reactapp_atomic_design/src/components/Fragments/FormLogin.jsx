import { login } from '../../services/auth.service';
import Button from '../Elements/Button';
import Input from '../Elements/Input';
import Label from '../Elements/Input/Label';
import { useEffect, useRef, useState } from 'react';

const FromLogin = () => {

  const [loginFailed, setLoginFailed] = useState("");

  const HandleLogin = (event) => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    }
    login(data, (status, res) => {
      if(status) {
        localStorage.setItem('token', res);
        window.location.href = '/products';
      } else {
        setLoginFailed(res.response.data);
      }
    });
  }

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  },[])

  return (
        <form onSubmit={HandleLogin}>
          <div className='mb-6'>
              <Label htmlFor="username">Username</Label>
              <Input label="username" type="text" placeholder="Mukidi" name="username" ref={usernameRef} />

              <Label htmlFor="password">Password</Label>
              <Input label="Password" type="password" placeholder="********" name="password"></Input>
          </div>

          <Button classname="bg-blue-600 w-full" type="submit">
            Login
          </Button>

          {loginFailed && <p className='text-red-500 text-center mt-3'>{loginFailed}</p>}
      </form>
    )
}

export default FromLogin;