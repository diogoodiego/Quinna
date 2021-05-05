import { Link } from "react-router-dom";
import "./login.css";
import Logo from "../../svg/logo.svg"
import Illustration from "../../svg/login.svg"

function Login() {
  return (
    <div id="login">
      <div className="main">
        <div className="form">

          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>

          <h1 className="title">Sign in to Quinna</h1>
          <div className="form-div">
            <input type="text" required />
            <label htmlFor="">Email</label>
          </div>

          <div className="form-div">
            <input type="password" required />
            <label htmlFor="">Password</label>
          </div>
          
          <div className="form-div">
            <p>forgot you password?</p>
          </div>

          <button className="btn btn-primary">Login</button>
        </div>
      </div>
      <div className="side text-white">
        <img src={Illustration} alt="" />
        <p>Not registered yet?</p>
        <Link to="/" className="btn btn-secondary">Create an Account</Link>
      </div>
    </div>
  );
}

export default Login;
