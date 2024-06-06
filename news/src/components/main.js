import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <h1>Header</h1>
      <Outlet />
      <h2>Footer</h2>
    </div>
  );
}

export default Layout;