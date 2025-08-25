import React, { useEffect, useState } from "react";
import "../style/container.css";

const Container = () => {
  const [truyens, setTruyens] = useState([]);
  const [truyenFull, setTruyenFull] = useState([]);
  const [loading, setLoading] = useState(true);

  // phân trang cho MỚI CẬP NHẬT
  const [currentPageUpdate, setCurrentPageUpdate] = useState(1);
  const itemsPerPageUpdate = 5;

  // phân trang cho TRUYỆN HOÀN THÀNH
  const [currentPageFull, setCurrentPageFull] = useState(1);
  const itemsPerPageFull = 5;

  useEffect(() => {
    const fetchTruyen = async () => {
      try {
        const response = await fetch('https://otruyenapi.com/v1/api/home');
        const data = await response.json();
        setTruyens(data.data);

        const response1 = await fetch('https://otruyenapi.com/v1/api/danh-sach/hoan-thanh?page=1');
        const data1 = await response1.json();
        setTruyenFull(data1.data);
      } catch (error) {
        console.error('Lỗi API:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTruyen();
  }, []);

  if (loading) {
    return (
      <div className="loading-overlay">
        <div className="loading-spinner"></div>
        <p>Đang tải dữ liêu... Độc giả xin chờ xíu ^^ </p>
      </div>
    );
  }

  const DOMAIN_IMAGE = "https://img.otruyenapi.com/uploads/comics";

  // ====== MỚI CẬP NHẬT ======
  const totalPagesUpdate = Math.ceil(truyens.items.length / itemsPerPageUpdate);
  const currentUpdateItems = truyens.items.slice(
    (currentPageUpdate - 1) * itemsPerPageUpdate,
    currentPageUpdate * itemsPerPageUpdate
  );

  // ====== TRUYỆN HOÀN THÀNH ======
  const totalPagesFull = Math.ceil(truyenFull.items.length / itemsPerPageFull);
  const currentFullItems = truyenFull.items.slice(
    (currentPageFull - 1) * itemsPerPageFull,
    currentPageFull * itemsPerPageFull
  );

  return (
    <div className="main-container">

      {/* --- PHẦN MỚI CẬP NHẬT --- */}
      <div className="update-section">
        <h2 className="section-title">MỚI CẬP NHẬT <span className="arrow">▼</span></h2>
        {currentUpdateItems.map((truyen, index) => (
          <div className="story-box" key={index}>
            <div className="story-header">
              <span className="story-title">{truyen.name}</span>
            </div>
            <div className="story-content">
              <div className="story-cover">
                <img src={`${DOMAIN_IMAGE}/${truyen.thumb_url}`} alt={truyen.name} />
                <div className="status-tag">{truyen.status}</div>
              </div>
              <div className="story-info">
                <p className='desc'>
                  {(truyen.origin_name?.[0] || '').trim() || 'Không rõ tên gốc'}
                </p>
                <div className="tags">
                  {truyen.category.map((cat, i) => (
                    <span className="tag" key={i}>{cat.name}</span>
                  ))}
                </div>
                <p className="update-time ">
                  Update at: {new Date(truyen.updatedAt).toLocaleDateString('vi-VN')}
                </p>
                <div className="chapter-list">
                  {truyen.chaptersLatest?.[0] && (
                    <a href={truyen.chaptersLatest[0].chapter_api_data}>
                      Chương {truyen.chaptersLatest[0].chapter_name}: {truyen.chaptersLatest[0].filename}
                    </a>
                  )}
                </div>
                <div className='dt-btn'>
                  <button> More detail </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* phân trang */}
        <div className="pagination">
          {Array.from({ length: totalPagesUpdate }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPageUpdate(i + 1)}
              className={currentPageUpdate === i + 1 ? "active" : ""}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* --- PHẦN TRUYỆN HOÀN THÀNH --- */}
      <div className="sidebar">
        <h2 className="section-title">Truyện đã hoàn thành <span className="arrow">▼</span></h2>
        <div className="highlight-list">
          {currentFullItems.map((item, index) => (
            <div key={index} className="highlight-item">
              <img src={`${DOMAIN_IMAGE}/${item.thumb_url}`} alt={item.name} />
              <div>
                <p className="title">{item.name}</p>
                <p className='desc'>{(item.origin_name?.[0] || '').trim() || 'Không rõ tên gốc'}</p>
                <p className="status">{item.status}</p>
                <div className="tags">
                  {item.category.slice(0, 3).map((cat, i) => (
                    <span className="tag" key={i}>{cat.name}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* phân trang */}
        <div className="pagination">
          {Array.from({ length: totalPagesFull }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPageFull(i + 1)}
              className={currentPageFull === i + 1 ? "active" : ""}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Container;
