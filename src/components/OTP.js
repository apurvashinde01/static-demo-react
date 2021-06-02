import React from "react";
import { Link } from "react-router-dom";
import MySVG from "./otp.svg";

function OTP() {
  // var msg91 = require("msg91")("API_KEY");

  // // Mobile No can be a single (XXXXXXXXXX) number or csv string (XXXXXXXXXX, XXXXXXXXXX)
  // // Variables with the same name defind in SMS template

  // var args = {
  //   flow_id: "EnterflowID",
  //   sender: "EnterSenderID",
  //   mobiles: "Enter Mobile Number/Numbers separated by comma",
  //   VAR1: "VALUE1",
  //   VAR2: "VALUE2",
  // };

  // msg91.sendSMS(args, function (err, response) {
  //   console.log(err);
  //   console.log(response);
  // });

  return (
    <>
      <form>
        <div class="svg-container">
          <img src={MySVG} style={{ width: "25em" }} />
        </div>

        <div class="container form-group col-md-6">
          <label for="inputPassword4">Please enter OTP</label>
          <input
            type="password"
            class="form-control"
            id="inputotp"
            placeholder="otp"
          />
          <br />
          {/* Redirect to homepage or give succes msg popup if OTP is correct,
              Else redirect to SignUp page after 2 OTP attempts (timer of 30s each) */}
          <Link to="/">
            <button type="submit" class="btn btn-primary">
              Verify
            </button>
          </Link>
        </div>
      </form>
    </>
  );
}

export default OTP;
