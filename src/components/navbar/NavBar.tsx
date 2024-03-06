import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="top-nav">
      <div className="nav-text-large">My App</div>
      <ul className="nav-list">
        <li>
          <Link to="userTable">Users</Link>
        </li>
      </ul>
    </nav>
  );
}
