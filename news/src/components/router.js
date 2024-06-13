import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Main from './main';
import Test from './home/Test';
import Login from "../Login";
import Register from "../Register";
function RouterConfig() {
    return (
        <Router>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            
          </Route>
          <Route path='/test' element={<Test />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    );
  }
  
  export default RouterConfig;