import Button from '../Elements/Button';
import Input from '../Elements/Input';
import Label from '../Elements/Input/Label';

const FromLogin = () => {

  const HandleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem('email', event.target.email.value);
    localStorage.setItem('password', event.target.password.value);
    window.location.href='/products';
  }

    return (
        <form onSubmit={HandleLogin}>

          <div className='mb-6'>
              <Label htmlFor="email">Email</Label>
              <Input label="Email" type="email" placeholder="mail@example.com" name="email" />

              <Label htmlFor="password">Password</Label>
              <Input label="Password" type="password" placeholder="********" name="password"></Input>
          </div>

          <Button classname="bg-blue-600 w-full" type="submit">
            Login
          </Button>
      </form>
    )
}

export default FromLogin;