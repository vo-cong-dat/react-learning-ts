import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

export default function ProtectedRouter() {
  const isAuth = true;
  const navigation = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigation('/login');
    }
  }, []);

  return <>{isAuth && <Outlet />}</>;
}
