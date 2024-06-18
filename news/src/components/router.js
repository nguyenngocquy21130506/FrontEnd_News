import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Main from './main';
import Test from './home/Test';
import Category from './category/category';
import Login from "./login/Login";
import Register from "./login/Register";
import Event from "./event/Event";
import New from "./new/New";
function RouterConfig() {
    return (
        <Router>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path='/:category' element={<Category />}></Route>
            <Route path='/:category/:subcategory' element={<Category />}></Route>
          </Route>
          <Route path='/test' element={<Test />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/event' element={<Event />} />
          <Route path='/new24h' element={<New />} />
        </Routes>
      </Router>
    );
  }
  
  export default RouterConfig;
