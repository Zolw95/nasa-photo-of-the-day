import React from "react";
import PhotosInfo from "./components/PhotosInfo";

import "./App.css";

function App() {
  return (
      <div className="App">
        <div class="nav-container">
          <h1>NASA <span role="img" aria-label='go!'>🚀</span></h1>
          <nav>
            <a href="#">Home</a>
            <a href="#">Search</a>
          </nav>
        </div>
        <PhotosInfo />
        <div class="footer-container">
          <footer>
            <p>© 2020<br/>Milosz Samec</p>
            <div class="social-icons">
              <a href="#">GitHub</a>
              <a href="#">Linkedin</a>
              <a href="#">Facebook</a>
            </div>
          </footer>
        </div>
      </div>
  );
} 
 
export default App;
