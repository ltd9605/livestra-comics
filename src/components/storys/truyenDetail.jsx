
import React from "react";
import "./detail.css";
import { useParams } from 'react-router-dom';
const TruyenDetail = () => {
  return (
    <div>
        <h1>
            Rebuild World
            <button className="btn-status">ĐANG TIẾN HÀNH</button>
        </h1>
    <div className="truyen-detail">
      <div className="detail-left">
        <div className="header-bar">
          <div className="chapter-count">SỐ CHƯƠNG <strong>131</strong></div>
        </div>

        <div className="main-info">
          <div className="cover-block">
            <img src="https://valvrareteam.b-cdn.net/novel-illustrations/punx5shvti6hunwwh2fs.webp?class=illustration" />
            <div className="badge">TRUYỆN DỊCH</div>
          </div>

          <div className="meta-block">
            <p><strong>Tên khác:</strong> Tái Thiết Thế Giới, リビルドワールド</p>
            <p><strong>Tác giả:</strong> <span className="highlight">NAFSE</span></p>
            <p><strong>Họa sĩ:</strong> <span className="highlight">GIN</span></p>
            <p><strong>Thể loại:</strong></p>
            <div className="tags">
              <span className="tag tag-main">Japanese Novel</span>
              <span className="tag">Shounen</span>
              <span className="tag">Seinen</span>
              <span className="tag">Mecha</span>
              <span className="tag">Character Growth</span>
              <span className="tag">Action</span>
              <span className="tag">Adventure</span>
              <span className="tag">Science Fiction</span>
              <span className="tag tag-more">(...)</span>
            </div>
          </div>
        </div>

        <div className="gift-box">
          <h3>🎁 Tặng Quà</h3>
          <div className="gift-list">
            <div className="gift-item">Hoa anh đào <span>🌸 10</span></div>
            <div className="gift-item">Cà phê <span>☕ 50</span></div>
            <div className="gift-item">Bánh ngọt <span>🍰 100</span></div>
            <div className="gift-item">Gấu bông <span>🧸 500</span></div>
            <div className="gift-item">Kim cương <span>💎 1000</span></div>
          </div>
        </div>

        <div className="stats-row">
          <div className="stat-item">👁️ 2.719<br />Lượt xem</div>
          <div className="stat-item">📄 859.151<br />Từ</div>
          <div className="stat-item">❤️ 8<br />Lượt thích</div>
          <div className="stat-item">⭐ 5.0/5, 3<br />Lượt đánh giá</div>
        </div>

        <div className="chapter-buttons">
          <button className="btn-start">📘 Chương đầu tiên</button>
          <button className="btn-latest">📙 Chương mới nhất</button>
          <button className="btn-bookmark">🔖 Đánh dấu (28)</button>
        </div>
      </div>

      <div className="detail-right">
        <div className="side-box">
          <h4>👤 NHÂN SỰ</h4>
          <p className="active-status">Đang hoạt động</p>
          <ul>
            <li><span className="label purple">📕 Dịch giả:</span> LittleKai</li>
            <li><span className="label blue">✏️ Biên tập:</span> Không có</li>
            <li><span className="label orange">✔ Hiệu đính:</span> Không có</li>
          </ul>
        </div>

        <div className="side-box">
          <h4>📢 THÔNG BÁO</h4>
          <ul>
            <li>Thời gian đăng định kỳ mỗi tuần 1 chương vào chủ nhật, bắt đầu từ Tập 4.</li>
            <li>Những chương được khoá lúa sẽ mở 1 chương mỗi 2 tuần.</li>
          </ul>
        </div>

        <div className="side-box">
          <h4>💸 ĐÓNG GÓP</h4>
          <p>Nếu bạn yêu thích bộ truyện này, hãy ủng hộ nhóm dịch nhé!</p>
          <button className="btn-donate">Ủng hộ ngay</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TruyenDetail;
