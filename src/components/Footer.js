import React from 'react';


export default function Footer() {

  return (
    <footer style={{ height: "100px"}}class="page-footer fixed-bottom font-small   grey darken-5 pt-4">
        <div class="container">
          <ul class="list-unstyled list-inline text-center">
            <li class="list-inline-item">
              <a
                class="btn-floating btn-fb mx-1"
                href="https://github.com/Addeeze"
              >
                <i style={{ fontSize: "30px", color: "green"}} class="fab fa-github">
                  github
                </i>
              </a>
            </li>
            <li class="list-inline-item">
              <a
                class="btn-floating btn-li mx-1"
                href="https://www.linkedin.com/in/nicholas-veen-76679a8a/"
              >
                <i style={{ fontSize: "30px", marginLeft: "80px", color: "blue" }} class="fab fa-linkedin-in">
                  linkedin
                </i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
}