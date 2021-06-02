import React from "react";
import { Link } from "react-router-dom";
import BlogList from "./BlogList";
import TypeWriter from "./TypeContent";
import S1 from "./s1.svg";
import S2 from "./s2.svg";
import S3 from "./s3.svg";
import S4 from "./s4.svg";
import Footer from "./Footer";

function Home() {
  let msgs = [
    "Love Writing?",
    "Love Reading?",
    "Love like-minded community too?",
  ];

  return (
    <div>
      <div class="container-fluid" style={{ margin: "0", padding: "0" }}>
        <div class="jumbotron bg-light">
          <h1 class="display-4">
            <TypeWriter
              //   heading={"Welcome to Bloggie!"}
              messages={msgs}
            />
          </h1>
          <br />
          <p class="lead">You'll love us then! 💙</p>
          <br />
          <p class="lead">
            <Link to="/signup">
              <a class="btn btn-primary btn-lg" href="#" role="button">
                Join Us now
              </a>
            </Link>
          </p>
        </div>
      </div>

      <div class="jumbotron text-center row bg-light">
        <div class="jumbotron text-center col-md-6 bg-light">
          <div class="svg-container">
            {/* <img src={S1} style={{ width: "25em" }} /> */}
            <h3> Explore articles for free!</h3>
            <br />
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </p>
          </div>
        </div>
        <div class="jumbotron text-center col-md-6 bg-light">
          <div class="svg-container">
            <img src={S3} style={{ width: "25em" }} />
          </div>
        </div>
      </div>

      <div class="jumbotron text-center row bg-light">
        <div class="jumbotron text-center col-md-6 bg-light">
          <div class="svg-container">
            <img src={S4} style={{ width: "25em" }} />
          </div>
        </div>
        <div class="jumbotron text-center col-md-6 bg-light">
          <div class="svg-container">
            {/* <img src={S1} style={{ width: "25em" }} /> */}
            <h3> Share your articles for free!</h3>
            <br />
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </p>
          </div>
        </div>
      </div>

      <div class="jumbotron text-center row bg-light">
        <div class="jumbotron text-center col-md-6 bg-light">
          <div class="svg-container">
            {/* <img src={S1} style={{ width: "25em" }} /> */}
            <h3> Engage with community</h3>
            <br />
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </p>
          </div>
        </div>
        <div class="jumbotron text-center col-md-6 bg-light">
          <div class="svg-container">
            <img src={S1} style={{ width: "25em" }} />
          </div>
        </div>
      </div>

      <div class="jumbotron text-center row bg-light">
        <div class="jumbotron text-center col-md-6 bg-light">
          <div class="svg-container">
            <img src={S2} style={{ width: "25em" }} />
          </div>
        </div>
        <div class="jumbotron text-center col-md-6 bg-light">
          <div class="svg-container">
            {/* <img src={S1} style={{ width: "25em" }} /> */}
            <h3> Build an audience, have fun! </h3>
            <br />
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </p>
          </div>
        </div>
      </div>

      <h2>Trending Blogs</h2>
      <BlogList />
     
    </div>
  );
}

export default Home;
