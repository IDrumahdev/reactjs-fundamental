import Button from '../Elements/Button';
import Input from '../Elements/Input';

const FromLogin = () => {
    return (
        <form action="">
        <div className='mb-6'>
            <Input label="Email" type="email" placeholder="mail@example.com" name="email" />
            <Input label="Password" type="password" placeholder="********" name="password"></Input>
        </div>

        <Button classname="bg-blue-600 w-full">
          Login
        </Button>
      </form>
    )
}

export default FromLogin;