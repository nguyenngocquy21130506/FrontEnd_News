import { Outlet } from 'react-router-dom';
import Header from "../Header";
import Footer from "../Footer";
import Nav from './nav/Nav';

function Layout() {
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('http://localhost:3000/')}`;
  return (
    <div>
      <a href={facebookShareUrl}>Share</a>
      <Header/>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;