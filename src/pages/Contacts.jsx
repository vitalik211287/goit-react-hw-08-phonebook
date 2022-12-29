
import Contact from 'components/Contact/Contact';
import { useGetContactsQuery } from 'redux/slice/Slice';


export const Contacts = () => {
  const contacts = useGetContactsQuery();
  return (
    <main>
      <Contact contacts={contacts} />
    </main>
  );
};
