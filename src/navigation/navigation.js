import { NavLink, Outlet } from "react-router-dom";

function Navigation() {
  return (
    <>
      <header>
        <nav>
          <ul>

            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink  to="/about">About Us</NavLink></li>
            <li><NavLink to="/about/inder">Inder</NavLink></li>
            <li><NavLink to="/about/ekum">Ekum</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </>
  );
}

export default Navigation;
