import { useState, type ChangeEvent, type FormEvent } from 'react';
import { type Variants } from 'motion/react';
import { TelIndexes } from './TelIndexes';
import { useRegistrationContext } from '@/features/registration/model/RegistrationContext';
import { useNavigate } from 'react-router';
import Field from '@/shared/ui/Field/Field';
import ErrorMessage from '@/shared/ui/ErrorMessage/ErrorMessage';
import ButtonSubmit from '@/shared/ui/ButtonSubmit/ButtonSubmit';
import FormTemplate from '../FormTemplate/FormTemplate';
import styles from './TelForm.module.css';
import type { TelDataTypes } from '@/features/registration/model/registration.types';

interface TelFormProps {
  variants?: Variants
}

const TelMaxLength = 15;
const TelMinLength = 9;

const TelForm = (props: TelFormProps) => {
  const { variants } = props
  const { addTel } = useRegistrationContext()

  const [hasError, setHasError] = useState(false)
  const [telValue, setTelValue] = useState('');
  const navigate = useNavigate();
  
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (telValue.length < TelMinLength || telValue.length > TelMaxLength) return;

    const formData = new FormData(event.currentTarget)
    const UserTel: TelDataTypes = {
        telIndex: String(formData.get('telIndex')) || '',
        tel: String(formData.get('tel')) || '',
        status: 'unconfirm',
    }
    
    addTel(UserTel, () => setTelValue(''));
    navigate('/confirm');
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value.replace(/\D/g, '')
    setTelValue(inputValue)
    setHasError(inputValue.length < TelMinLength || inputValue.length > TelMaxLength)
  }

    return (
        <FormTemplate 
        id='tel-form'
        formInnerStyles={`${styles.formInner} grid grid-cols-[auto,1fr] relative gap-x-4 gap-y-[inherit]`}
        variants={variants}
        onSubmit={onSubmit} 
        buttonSubmit={
          <ButtonSubmit disabled={hasError || telValue.length === 0} >Send code</ButtonSubmit>
        }>
          <p className={`${styles.formTitle} text-[0.88rem] leading-[143%] text-dark-24en6`}>Enter your phone number</p>
                <label htmlFor="phone-index" className='visually-hidden'>Phone index</label>
                <select className={`${styles.formSelect} py-2 px-4 border-b border-gray-e2 max-w-30`} 
                name="telIndex" 
                id="phone-index">
                  {Object.entries(TelIndexes).map(([key, value]) => (
                     <option key={key} value={value}>{value}</option>
                  ))}
                </select>
                <label htmlFor='base-tel' className='visually-hidden'>Enter your phone number</label>
                <Field labelClassName='visually-hidden' 
                  id='base-tel' 
                  name='tel' 
                  className={styles.formField} 
                  inputMode='numeric'
                  autoComplete='off'
                  type='tel'
                  pattern='\d*'
                  placeholder='Enter your phone...' 
                  onChange={onChange}
                  value={telValue}
                  minLength={9}
                  maxLength={15}
                >
                    Enter your phone number
                </Field>
                <ErrorMessage hasError={hasError} className='-bottom-5'>
                    {`Phone number must be from ${TelMinLength} to ${TelMaxLength} numbers`}
                </ErrorMessage>
        </FormTemplate>
    )
}

export default TelForm;