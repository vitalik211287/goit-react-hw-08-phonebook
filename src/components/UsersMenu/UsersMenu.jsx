import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';

import {
  Link,
  UserMenu,
  Button,
  UserName,
  UserMenuContacts,
} from 'components/SharedLayout/SharedLayout.styled';

export const UsersMenu = () => {
  const name = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <UserMenu>
      <UserMenuContacts>
        <Link to="/contacts">Contacts</Link>
      </UserMenuContacts>
      <div className="user__menu">
        <UserName>Welcome, {name}</UserName>
        <Button type="button" onClick={handleLogOut}>
          Sign Out
        </Button>
      </div>
    </UserMenu>
  );
};
