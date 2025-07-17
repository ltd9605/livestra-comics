import "./App.css";

function App() {
  return (
    <>
    <div></div>
      <div class='header'>
        <div  class='logo'> <img class='logo' src="src/assets/img/logo.png" alt="" /></div>
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
