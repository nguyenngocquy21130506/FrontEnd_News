import { Outlet } from 'react-router-dom';

function Layout() {
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('http://localhost:3000/')}`;
  return (
    <div>
      <h1>Header</h1>
      <a href={facebookShareUrl}>Share</a>
      <Outlet />
      <h2>Footer</h2>
    </div>
  );
}

export default Layout;