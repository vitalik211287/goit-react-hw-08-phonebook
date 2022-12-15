import { Title } from 'components/App.styled';
import { ContactsItem, ContactsList } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/slice/Slice';
import getFilteredContacts from 'redux/filteredContacts.selector';

const { Message, Button } = require('components/Form/Form.styled');

const Contact = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const removeContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <div>
      {contacts.length > 0 ? (
        <ContactsList>
                  {contacts.map(({ name, number, id }) => {
              console.log(contacts);
            return (
              <ContactsItem key={id}>
                <Button onClick={() => removeContact(id)} type="button">
                  Delete
                </Button>
                <Message>
                  {name}: {number}
                </Message>
              </ContactsItem>
            );
          })}
        </ContactsList>
      ) : (
        <Title>Contact list is empty</Title>
      )}
    </div>
  );
};
export default Contact;
