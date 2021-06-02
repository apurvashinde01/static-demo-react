import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./components/Home";
import ReadBlog from "./components/ReadBlog";
import EditBlog from "./components/EditBlog";

import { BrowserRouter, HashRouter, Link, Route, Switch } from "react-router-dom";
import CreateBlog from "./components/CreateBlog";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import OTP from "./components/OTP";
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <NavbarComponent />
        <br />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={CreateBlog} />
          <Route path="/read/:blog_id" component={ReadBlog} />
          <Route path="/edit/:blog_id" component={EditBlog} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/otp" component={OTP} />
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
