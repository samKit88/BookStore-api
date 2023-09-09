import { Link } from "react-router-dom";
import { useLogout } from "../hook/useLogout";

export const Navbar = () => {
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };
  return (
    

    <header>
      <div className="container">
        <Link to="/">
          <h1>BookWise</h1>
        </Link>
        <nav>
          {
<div>
            <button onClick={handleClick}>Logout</button>
          </div>
          }
          
          <div>
                 <Link to="/login"> Login </Link>
            <Link to="/signup"> Signup</Link>
           
          </div>
        </nav>
      </div>
    </header>
  );
};