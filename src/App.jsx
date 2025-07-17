import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div class='header'>
        <div> Livestra Comics</div>
        <div class='search-bar'>
          <input type="text" placeholder="Tìm kiếm truyện ... " />
          <button> <i class="fa-solid fa-magnifying-glass"></i> </button>
        </div>
        <div class='r-buttons'>
          <button class='re-btn'> Đăng kí</button>
          <button class='lg-btn'> Đăng nhập</button>
        </div>
      </div>
    </>
  );
}

export default App;
