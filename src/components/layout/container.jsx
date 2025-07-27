import { useNavigate } from 'react-router-dom';
import React from "react";
import "../style/container.css";
const Container = () => {
    const navigate = useNavigate();
    const handleClick = () => {
     navigate("/truyen/1");
};


  return (
    <div className="main-container">
      <div className="update-section">
        <h2 className="section-title">MỚI CẬP NHẬT <span className="arrow">▼</span></h2>
        <div className="story-box" onClick={() => handleClick()} >
          <div className="story-header">
            <span className="story-title">Rebuild World</span>
          </div>
          <div className="story-content">
            <div className="story-cover">
              <img
                src="https://valvrareteam.b-cdn.net/novel-illustrations/punx5shvti6hunwwh2fs.webp?class=illustration"
                alt="Rebuild World"
              />
              <div className="status-tag">ĐANG TIẾN HÀNH</div>
            </div>
            <div className="story-info">
              <div className="tags">
                <span className="tag">Japanese Novel</span>
                <span className="tag">Shounen</span>
                <span className="tag">Seinen</span>
                <span className="tag">Mecha</span>
                <span className="tag">Character Growth</span>
              </div>
              <p className="desc">
                Trong một thế giới nơi nền văn minh nhân loại đã sụp đổ, chỉ còn lại đổ nát của “Thế Giới Cũ” – một di sản công nghệ huyền bí vượt xa sự hiểu biết của nhân loại hiện tại.
              </p>
              <a href="#" className="read-more">Đọc tiếp</a>
              <div className="chapter-list">
                <a href="#">Chương 248: Câu Hỏi Kỳ Lạ</a>
                <a href="#">Chương 247: Trà Được Nhiều Thì Trà</a>
                <a href="#">Chương 121: Chuyển Dời Sát Ý</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar">
        <h2 className="section-title">NỔI BẬT <span className="arrow">▼</span></h2>
        <div className="filter-tabs">
          <span className="active">Ngày</span>
          <span>Tuần</span>
          <span>Toàn thời gian</span>
        </div>
        <div className="highlight-list">
          <div className="highlight-item">
            <img src="https://valvrareteam.b-cdn.net/illustrations/1753340665478-6.webp?class=illustration" alt="" />
            <div>
              <p className="title">Bí mật của Phù Thủy Tĩnh Lặng</p>
              <p className="status">Đang tiến hành</p>
              <p className="desc">Lời bạt</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
