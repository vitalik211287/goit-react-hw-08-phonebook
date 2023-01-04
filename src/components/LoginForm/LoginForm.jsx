import { Container, Img, StyledLink, Title } from 'components/RegisterForm/RegisterForm.styled';
import { Forma, Button, Label, Text } from './LoginForm.styled';
import telephoneImg from '../../img/telephone.png';
import { ReactComponent as Email } from '../../img/email.svg';
import { ReactComponent as Password } from '../../img/password-p.svg';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from '../../redux/auth/auth-operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <Forma onSubmit={handleSubmit}>
      <Img src={telephoneImg} alt="telephone"></Img>
      <Title>LOGIN</Title>
      <Text>Please enter your login and password</Text>
      <Label>
        Email
        <input
          className="input__form-input"
          name="email"
          value={email}
          onChange={handleChange}
          type="email"
        />
        <span className="span__icon-container">
          <Email className="icon" width="20" height="20"></Email>
        </span>
      </Label>
      <Label>
        Password
        <input
          className="input__form-input"
          name="password"
          value={password}
          onChange={handleChange}
          type="password"
        />
        <span className="span__icon-container">
          <Password className="icon" width="20" height="20"></Password>
        </span>
      </Label>
      <Button type="submit">Log in</Button>
      <Container>
        <p>Don't have a profile?</p>
        <StyledLink to="/register">Sign up</StyledLink>
      </Container>
    </Forma>
  );
};
