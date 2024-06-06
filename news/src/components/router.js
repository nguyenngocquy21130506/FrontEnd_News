import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Main from './main';
import Test from './home/Test';
function RouterConfig() {
    return (
        <Router>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            
          </Route>
          <Route path='/test' element={<Test />} />
        </Routes>
      </Router>
    );
  }
  
  export default RouterConfig;