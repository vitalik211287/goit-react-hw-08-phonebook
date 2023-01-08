import React, { useEffect, lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
// import { Contacts } from 'pages/Contacts/Contacts';
import { SharedLayout } from './SharedLayout/SharedLayout';
// import { Login } from 'pages/Login/Login';
// import { Register } from 'pages/Register/Regiser';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { refreshUser } from 'redux/auth/auth-operations';
import { PublicRoute } from './PublicRoute';
import { PrivatRoute } from './PrivatrRoute';
   

const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Regiser'));

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);
  return (
    <div className="ggggg">
      {!isRefreshing && (
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route
                path="login"
                element={
                  <PublicRoute redirect="contacts">
                    <Login />
                  </PublicRoute>
                }
              />
              <Route
                index
                element={
                  <PublicRoute redirect="contacts">
                    <Register />
                  </PublicRoute>
                }
              />
              <Route
                path="contacts"
                element={
                  <PrivatRoute redirect="login">
                    <Contacts />
                  </PrivatRoute>
                }
              />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      )}
    </div>
  );
}
