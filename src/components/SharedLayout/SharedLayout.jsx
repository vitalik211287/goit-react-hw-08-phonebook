import { Outlet } from 'react-router-dom';
import {
  Header,
  Logo,
  Container,
  Link,
  Title,
  StyledLink,
} from './SharedLayout.styled';
import telephoneImg from '../../img/telephone.png';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <div>
            <StyledLink to="/login">
              <span role="img" aria-label="telephone icon">
                <img
                  src={telephoneImg}
                  alt="telephone"
                  style={{ height: 35, width: 40 }}
                ></img>
              </span>
              Phonebook
            </StyledLink>
            {/* <Title>Phonebook</Title> */}
          </div>
        </Logo>
        <nav>
          <Link to="/Contacts">Contacts</Link>
          <Link to="/">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
