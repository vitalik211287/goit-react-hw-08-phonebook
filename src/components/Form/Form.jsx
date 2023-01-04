import { Label, Forma, FormContainer } from './Form.styled';
import { Button } from '../LoginForm/LoginForm.styled';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useAddContactsMutation } from 'redux/slice/Slice';
import { ReactComponent as Name } from '../../img/user.svg';
import { ReactComponent as Phone } from '../../img/telephone.svg';
import {
  InputContainer,
  Title,
} from 'components/RegisterForm/RegisterForm.styled';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/contacts-selectors';

export function Form() {
  const [addContact] = useAddContactsMutation();
  //   const { data } = useGetContactsQuery();
  const handleSubmit = async e => {
    e.preventDefault();
    reset();
    await addContact({ name: name, phone: number, id: id });
  };

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
//   const dispatch = useDispatch();
  const { data } = useSelector(getContacts);

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
    setId(nanoid(4));
    data.forEach(contact => {
      const { name, phone } = contact;
      if (phone === value) {
        alert(`${name} is already in contacts`);
        reset();
      }
    });
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormContainer>
      <Title>Create new contact</Title>
      <Forma onSubmit={handleSubmit}>
        <InputContainer>
          <Label>
            Name
            <input
              className="input__form-input"
              name="name"
              value={name}
              onChange={handleInputChange}
              type="text"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <span className="span__icon-container">
              <Name className="icon" width="20" height="20"></Name>
            </span>
          </Label>
        </InputContainer>
        <InputContainer>
          <Label>
            Number
            <input
              className="input__form-input"
              name="number"
              value={number}
              onChange={handleInputChange}
              type="tel"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <span className="span__icon-container">
              <Phone className="icon" width="20" height="20"></Phone>
            </span>
          </Label>
        </InputContainer>
        <Button type="submit">Add contact</Button>
      </Forma>
    </FormContainer>
  );
}
export default Form;
