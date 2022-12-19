import { Button, Input, Label, Forma } from './Form.styled';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useAddContactsMutation, useGetContactsQuery } from 'redux/slice/Slice';

export function Form() {
  const [addContact] = useAddContactsMutation();
  const { data } = useGetContactsQuery();
    const handleSubmit = async e => {
        e.preventDefault();
        reset();
      await  addContact({ name: name, phone: number, id: id });
  };
 
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


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
    <div>
      <Forma onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            name="name"
            value={name}
            onChange={handleInputChange}
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            name="number"
            value={number}
            onChange={handleInputChange}
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Forma>
    </div>
  );
}
export default Form;
