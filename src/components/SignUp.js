import React from "react";
import { Link } from "react-router-dom";
import MySVG from "./signup.svg";

function SignUp() {
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

          <label for="inputPassword">Password</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            placeholder="Password"
          />

          <label for="inputPhone">Contact Number</label>
          <input
            type="tel"
            class="form-control"
            id="inputPhone"
            placeholder="Phone"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
          />

          <br />

          {/* Add condition to check if Email exists */}
          <Link to="/otp">
            <button type="submit" class="btn btn-primary">
              Sign Up
            </button>
          </Link>

          <br />
          <br />
          <br />
          <p>Note: Backend disabled contact for full stack sample</p>
        </div>
      </form>
    </>
  );
}

export default SignUp;
