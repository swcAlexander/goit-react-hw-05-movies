import { Routes, Route, NavLink } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Home from 'pages/Home';

const App = () => {
  return (
    <div className="container">
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
