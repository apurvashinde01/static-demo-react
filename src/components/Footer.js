import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer class="page-footer font-small blue pt-4 bg-primary">
        <div class="container-fluid text-center">
          <h5>Thanks for visiting us! ❤️</h5>
          <p>
            Website developed by -
            <a href="https://github.com/apurvashinde01" class="text-dark">
              Apurva
            </a>
          </p>
          <p>
            PS: Backend disabled, contact for full stack sample. Except Auth,
            user can perform CRUD on blogs for demonstration
          </p>
        </div>

        <div class="footer-copyright text-center py-3">© 2019 Copyright</div>
      </footer>
    </div>
  );
}

export default Footer;
