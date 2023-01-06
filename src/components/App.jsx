import React from 'react';
import { Navigate,  Route, Routes } from 'react-router-dom';
import { Contacts } from 'pages/Contacts/Contacts';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Login } from 'pages/Login/Login';
import { Register } from 'pages/Register/Regiser';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

export function App() {
  const fetchCurrentUser = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div className="ggggg">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {!fetchCurrentUser ? (
            <>
              <Route path="login" element={<Login />} />
              <Route index element={<Register />} />
            </>
          ) : (
            <Route index element={<Contacts />} />
          )}
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}
