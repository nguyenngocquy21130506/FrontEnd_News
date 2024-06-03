import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Main from './main';
function RouterConfig() {
    return (
        <Router>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    );
  }
  
  export default RouterConfig;