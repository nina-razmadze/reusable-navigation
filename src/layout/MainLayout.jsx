import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../pages/SideBarPage';

export function MainLayout() {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
}
