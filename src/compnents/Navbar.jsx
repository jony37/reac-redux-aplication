import { Link } from "react-router-dom";
import { logo } from "../constants";
const Navbar = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3 text-light">
      <Link to={"/"} style={{display: "flex", alignItems: "center"}}>
          <img src={logo} alt="" style={{ width: "60px", height: "60px", borderRadius: "20px", marginRight: "12px" }} />
          <span className="fs-4 text-dark">JONY</span>
      </Link>
      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <Link className="me-3 py-2 link-body-emphasis text-decoration-none" to={'/login'}> Login</Link>
        <Link className="me-3 py-2 link-body-emphasis text-decoration-none" to={'/register'}> Register</Link>
      </nav>
    </div>
  );
};

export default Navbar;
