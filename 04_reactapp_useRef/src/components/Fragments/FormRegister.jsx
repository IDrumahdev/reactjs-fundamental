import Button from '../Elements/Button';
import Input from '../Elements/Input';
import Label from '../Elements/Input/Label';

const FromRegister = () => {
    return (
        <form action="">
        <div className='mb-6'>
            <Label htmlFor="FullName">Full Name</Label>
            <Input type="text" placeholder="Full Name" name="FullName" />

            <Label htmlFor="email">Email</Label>
            <Input type="email" placeholder="mail@example.com" name="email" />

            <Label htmlFor="ConfirmPassword">Confirm Password</Label>
            <Input type="password" placeholder="********" name="ConfirmPassword"></Input>

            <Label htmlFor="password">Password</Label>
            <Input type="password" placeholder="********" name="password"></Input>
        </div>

        <Button classname="bg-blue-600 w-full">
          Register
        </Button>
      </form>
    )
}

export default FromRegister;