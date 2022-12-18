import { Title } from 'components/App.styled';
import { ContactsItem, ContactsList } from './Contacts.styled';
import { useGetContactsQuery } from 'redux/slice/Slice';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact } from '../../redux/slice/Slice';
// import getFilteredContacts from 'redux/filteredContacts.selector';

const { Message, Button } = require('components/Form/Form.styled');

const Contact = () => {
        const { contacts = [] } = useGetContactsQuery();
        console.log(contacts);
//         return data.map(el => {
//           return el.name;
//         });
//   const contacts = useSelector(getFilteredContacts);
//   const dispatch = useDispatch();
//   const removeContact = id => {
//     dispatch(deleteContact(id));
//   };
  return (
    <div>
          {contacts.length > 0 ? (
        <ContactsList>
          {contacts.map(({ name, phone, id }) => {
            return (
              <ContactsItem key={id}>
                {/* <Button onClick={() => removeContact(id)} type="button">
                  Delete
                </Button> */}
                <Message>
                  {name}: {phone}
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
