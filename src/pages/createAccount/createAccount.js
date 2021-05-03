import "./createAccount.css";
import Logo from "../../svg/logo.svg"
import Illustration from "../../svg/create-account.svg";


function CreateAccount() {
    return (
        <>
            <div id="create-account" className="w-100 h-100">
                <div className="side">
                    <img src={Illustration} alt=""/>
                </div>
                <div className="form-area">
                    <div className="logo">
                        <img src={Logo} alt="logo" />
                    </div>

                    <h1 className="title">Create account</h1>


                    <button className="btn btn-primary">Sign up</button>
                </div>
            </div>
        </>
    )
}
export default CreateAccount;
