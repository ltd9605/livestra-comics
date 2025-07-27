import React, { useState } from "react";
import "../style/header.css";

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const openLoginModal = () => setShowLoginModal(true);
  const closeLoginModal = () => setShowLoginModal(false);
  const openRegisterModal = () => setShowRegisterModal(true);
  const closeRegisterModal = () => setShowRegisterModal(false);
  return (
    <>
      <div className="header">
        <div className="logo">
          <img className="logo" src="src/assets/img/icon3.png" alt="Logo" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Tìm kiếm truyện ... " />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="r-buttons">
          <button className="re-btn" onClick={openRegisterModal}>
            Đăng kí
          </button>
          <button className="lg-btn" onClick={openLoginModal}>
            Đăng nhập
          </button>
        </div>
      </div>
      {showLoginModal && (
        <div className="modal-overlay" onClick={closeLoginModal}>
          <div className="login-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeLoginModal}>
              ×
            </button>
            <h2>Đăng nhập</h2>
            <input type="text" placeholder="Tên đăng nhập hoặc Email (*)" />
            <input type="password" placeholder="Mật khẩu (*)" />
            <div className="options">
              <label>
                <input type="checkbox" /> Nhớ đăng nhập
              </label>
              <a href="#" className="forgot-password">
                Quên mật khẩu?
              </a>
            </div>
            <button className="login-btn">Đăng nhập</button>
            <div className="signup-text">
              Không có tài khoản?{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  closeLoginModal();
                  openRegisterModal();
                }}
              >
                Đăng ký ngay!
              </a>
            </div>
          </div>
        </div>
      )}
      {showRegisterModal && (
        <div className="modal-overlay" onClick={closeRegisterModal}>
          <div className="login-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeRegisterModal}>
              ×
            </button>
            <h2>Đăng ký</h2>
            <input type="text" placeholder="Tên đăng nhập (*)" />
            <input type="email" placeholder="Email (*)" />
            <input type="password" placeholder="Mật khẩu (*)" />
            <input type="password" placeholder="Nhập lại mật khẩu (*)" />
            <button className="login-btn">Tạo tài khoản</button>
            <div className="signup-text">
              Đã có tài khoản?{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  closeRegisterModal();
                  openLoginModal();
                }}
              >
                Đăng nhập!
              </a>
            </div>
          </div>
        </div>
      )}
      <nav className="nav-list">
        <div className="nav-l-list">
          <ul>
            <li>Trang chủ</li>
            <li>Danh sách truyện</li>
            <li>Truyện sáng tác</li>
            <li>Bảng yêu cầu</li>
          </ul>
        </div>
        <div className="nav-r-list">
          <button className="remain-monney">0 : <i className="fa-solid fa-coins"></i></button>
          <button className="pay-monney">Nạp thêm</button>
          <button className="theme" id="theme">Tắt đèn</button>
        </div>
      </nav>
      <div className="nav-discord">
        <button className="btn-discord"><i className="fa-brands fa-discord"></i> Tham gia discord</button>
      </div>
    </>
  );
};

export default Header;
