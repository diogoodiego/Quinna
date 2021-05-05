import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { CreateAccount, Login } from "./pages";

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <CreateAccount />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;