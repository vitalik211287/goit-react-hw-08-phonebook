import {
  Logos,
  StyledLink,
  Img,
} from 'components/SharedLayout/SharedLayout.styled';
import telephoneImg from 'img/telephone.png';

export const Logo = () => {
  return (
    <Logos>
      <div>
        <StyledLink to="contacts">
          <span role="img" aria-label="telephone icon">
            <Img src={telephoneImg} alt="telephone"></Img>
          </span>
          Phonebook
        </StyledLink>
      </div>
    </Logos>
  );
};
