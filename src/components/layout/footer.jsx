import "../style/footer.css";
const Footer = () => {
    return <>
    <footer className="footer">
  <div className="footer-container">
    <div className="footer-logo">
      <h2>Livestra comics</h2>
      <p>Đọc truyện online miễn phí với trải nghiệm mượt mà và giao diện tối ưu cho người đọc.</p>
    </div>
    <div className="footer-links">
      <h4>Liên kết</h4>
      <ul>
        <li><a href="/">Trang chủ</a></li>
        <li><a href="/theloai">Thể loại</a></li>
        <li><a href="/timkiem">Tìm kiếm</a></li>
        <li><a href="/lienhe">Liên hệ</a></li>
      </ul>
    </div>

    <div className="footer-social">
      <h4>Theo dõi</h4>
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-discord"></i></a>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <p>&copy; 2025 Livestra comics . All rights reserved.</p>
  </div>
</footer>

    </>;
}
export default Footer;