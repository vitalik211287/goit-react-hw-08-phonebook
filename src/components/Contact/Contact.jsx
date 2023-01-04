import {
  Title,
  Avatar,
  ContactContainer,
  ContactsItem,
  ContactsList,
  Container,
  Message,
  MessageText,
} from './Contacts.styled';
import {
  useGetContactsQuery,
  useDeleteContactsMutation,
} from 'redux/slice/Slice';
// import { Button} from '../../pages/Login/Login.styled';
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
    <ContactContainer>
      {contacts.length > 0 ? (
        <ContactsList>
          <Title>CONTACTS</Title>
          {contacts.map(({ name, phone, id }) => {
            return (
              <ContactsItem key={id}>
                <Container>
                  <Avatar>
                    <Message color="white"> {name[0]}</Message>
                  </Avatar>
                  <MessageText>{name}:</MessageText>
                  <MessageText>{phone}</MessageText>
                  <Button onClick={() => handleDeleteContact(id)} type="button">
                    Delete
                  </Button>
                </Container>
              </ContactsItem>
            );
          })}
        </ContactsList>
      ) : (
        <Title>Contact list is empty</Title>
      )}
    </ContactContainer>
  );
};
export default Contact;
