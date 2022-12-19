import { Title } from 'components/App.styled';
import { ContactsItem, ContactsList, MessageText } from './Contacts.styled';
import {
  useGetContactsQuery,
  useDeleteContactsMutation,
} from 'redux/slice/Slice';

const { Button } = require('components/Form/Form.styled');

const Contact = ({ filter }) => {
  const { data = [] } = useGetContactsQuery();
  const [removeContact] = useDeleteContactsMutation();

  const normalizedFilter = filter.toLowerCase();

  const contacts = data.filter(contact => {
    return contact.name.toLowerCase().includes(normalizedFilter);
  });

  const handleDeleteContact = async id => {
    await removeContact(id);
  };
  return (
    <div>
      {contacts.length > 0 ? (
        <ContactsList>
          {contacts.map(({ name, phone, id }) => {
            return (
              <ContactsItem key={id}>
                <Button onClick={() => handleDeleteContact(id)} type="button">
                  Delete
                </Button>
                <MessageText>
                  {name}: {phone}
                </MessageText>
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
