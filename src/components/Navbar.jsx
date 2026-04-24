import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>CarParts App</h2>
      <Link to="/">Home</Link>
      <Link to="/carparts">Repuestos</Link>
    </nav>
  );
}

export default Navbar;