import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
//   max-width: 960px;
  margin: 0 auto;
//   padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 50px;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
//   width: 100%;
  > nav {
    display: flex;
  }
`;

export const Logo = styled.div`
  display: flex;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #26b9ff;
  }
`;
export const Title = styled.p`
  width: 100%;
  //   padding: 10px;
  font-size: 35px;
  text-align: center;
  color: #26b9ff;
  font-weight: bold;
  text-align: left;
  margin-left: 10px;
`;
export const StyledLink = styled(NavLink)`
  width: 100%;
  //   padding: 10px;
  font-size: 35px;
  text-align: center;
  color: #26b9ff;
  font-weight: bold;
  text-align: left;
  margin-left: 10px;
  text-decoration: none;
`;