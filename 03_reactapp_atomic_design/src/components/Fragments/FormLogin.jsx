import Button from '../Elements/Button';
import Input from '../Elements/Input';
import Label from '../Elements/Input/Label';

const FromLogin = () => {
    return (
        <form action="">
        <div className='mb-6'>
            <Label htmlFor="email">Email</Label>
            <Input label="Email" type="email" placeholder="mail@example.com" name="email" />

            <Label htmlFor="password">Password</Label>
            <Input label="Password" type="password" placeholder="********" name="password"></Input>
        </div>

        <Button classname="bg-blue-600 w-full">
          Login
        </Button>
      </form>
    )
}

export default FromLogin;