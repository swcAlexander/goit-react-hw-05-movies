import { NavLink } from 'react-router-dom';
const Loyout = () => {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/movies" end>
        Movies
      </NavLink>
    </nav>
  );
};
export default Loyout;
