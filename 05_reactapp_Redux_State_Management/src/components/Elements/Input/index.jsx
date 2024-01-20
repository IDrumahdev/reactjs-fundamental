import Label from './Label';
import Input from './Input';
import { forwardRef } from 'react';

const InputForm = forwardRef((props, ref) => {
        const {lable, type, name, placeholder} = props;
        return (
            <div className='mb-6'>
                <Label htmlFor={name}>{lable}</Label>
                <Input name={name} type={type} placeholder={placeholder} ref={ref}/>
            </div>
        )
    }
);

export default InputForm;