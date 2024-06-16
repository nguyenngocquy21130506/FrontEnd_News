import { Outlet } from 'react-router-dom';
import Header from "../Header";
import Footer from "../Footer";

function Layout() {
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('http://localhost:3000/')}`;
  return (
    <div>
      <h1>Header</h1>
      <a href={facebookShareUrl}>Share</a>
      <Header/>
      <Outlet />
      <Footer/>
    </div>
  );
}

export default Layout;