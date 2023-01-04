import {
  Link,
  AuthNav,
} from 'components/SharedLayout/SharedLayout.styled';

export const Navigation = () => {
  return (
    <AuthNav>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </AuthNav>
  );
};
