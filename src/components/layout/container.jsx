import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import "../style/container.css";
const Container = () => {
  const [truyens, setTruyens] = useState([]);
  const [truyenFull, setTruyenFull] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTruyen = async () => {
      try {
        const response = await fetch('https://otruyenapi.com/v1/api/home', {
          method: 'GET',
          headers: {
            accept: 'application/json',
          },
        });
        const data = await response.json();
        console.log('Updating object :', data);
        setTruyens(data.data);
        const response1 = await fetch('https://otruyenapi.com/v1/api/danh-sach/hoan-thanh?page=1', {
          method: 'GET',
          headers: {
            accept: 'application/json',
          },
        });
        const data1 = await response1.json();
        console.log('Finished object:', data1);
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
  return (
    <div className="main-container">
      <div className="update-section">
        <h2 className="section-title">MỚI CẬP NHẬT <span className="arrow">▼</span></h2>
        {truyens.items.map((truyen, index) => (
          <div className="story-box" key={index}>
            <div className="story-header">
              <span className="story-title">{truyen.name}</span>
            </div>
            <div className="story-content">
              <div className="story-cover">
                <img
                  src={`${DOMAIN_IMAGE}/${truyen.thumb_url}`}
                  alt={truyen.name}
                />
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
      </div>
      <div className="sidebar">
        <h2 className="section-title">Truyện đã hoàn thành <span className="arrow">▼</span></h2>
        <div className="filter-tabs">
          <span className="active">Ngày</span>
          <span>Tuần</span>
          <span>Toàn thời gian</span>
        </div>
        <div className="highlight-list">
          {truyenFull.items.map((item, index) => (
            <div key={index} className="highlight-item">
              <img src={`${DOMAIN_IMAGE}/${item.thumb_url}`} alt={item.name}/>
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
          ))};
        </div>
      </div>
    </div>
  );
};

export default Container;
