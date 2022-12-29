import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Img = styled.img`
  display: block;
  margin: 0 auto;
  height: 55px;
  width: 60px;
`;
export const Title = styled.p`
  text-align: center;
  width: 95%;
  padding: 10px;
  font-size: 32px;
  color: #26b9ff;
  font-weight: 400;
  margin: 0;
`;
export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 15px;
  color: #26b9ff;
  font-weight: 400;
  margin: 0;
`;
export const Container = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;`
