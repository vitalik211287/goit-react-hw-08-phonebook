import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Contacts } from 'pages/Contacts/Contacts';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Login } from 'pages/Login/Login';
import { Register } from 'pages/Register/Regiser';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { fetchCurrentUser } from 'redux/auth/auth-operations';

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  const IsLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div className="ggggg">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {!IsLoggedIn ? (
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
