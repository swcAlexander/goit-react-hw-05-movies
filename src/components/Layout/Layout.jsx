import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styles from 'components/Layout/Layout.module.css';
const Layout = () => {
  return (
    <div className="container">
      <header className="header">
        <nav>
          <ul className={styles.layout_list}>
            <li>
              <NavLink to="/" end className="home_movies">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" end className="home_movies">
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
export default Layout;
