import React from "react";
import MySVG from "./signin_auth.svg";

function SignIn() {
  return (
    <>
      <form>
        <div class="svg-container">
          <img src={MySVG} style={{ width: "25em" }} />
        </div>

        <div class="container form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail4"
            placeholder="Email"
          />

          <label for="inputPassword4">Password</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword4"
            placeholder="Password"
          />
          <br />
          <button type="submit" class="btn btn-primary">
            Sign In
          </button>
        </div>
      </form>
    </>
  );
}

export default SignIn;
