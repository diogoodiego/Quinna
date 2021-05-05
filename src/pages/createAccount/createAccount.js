import { Link } from "react-router-dom";
import "./createAccount.css";
import Logo from "../../svg/logo.svg"
import Illustration from "../../svg/create-account.svg";


function CreateAccount() {
    return (
            <div id="create-account" className="w-100 h-100">
                <div className="side text-white">
                    <img src={Illustration} alt="" />
                    <p>Already have an Account?</p>
                    <Link to="/login" className="btn btn-secondary mx-auto">Login</Link>
                </div>
                <div className="form-area">
                    <div className="logo">
                        <img src={Logo} alt="logo" />
                    </div>

                    <h1 className="title">Create account</h1>
                    <div className="form-div">
                        <input type="text" required />
                        <label htmlFor="">Name</label>
                    </div>
                    <div className="form-div">
                        <input type="text" required />
                        <label htmlFor="">Email</label>
                    </div>
                    <div className="form-div">
                        <input type="password" required />
                        <label htmlFor="">Password</label>
                    </div>


                    <button className="btn btn-primary">Sign up</button>
                </div>
            </div>
    )
}
export default CreateAccount;
