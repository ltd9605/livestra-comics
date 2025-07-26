import React from 'react';
import './profile.css';

const Profile = () => {
    const user = {
        name: "libraa",
        avatarText: "TÔI BỊ NGU",
        joined: "16/6/2025",
        stats: [
            { label: "Chương đã tham gia", value: 50 },
            { label: "Đang theo dõi", value: 90 },
            { label: "Bình luận", value: 1000000 }
        ],
        views: 100000,
        bio: "",
        title: ""
    };

    return (
        <div className="profile-main">
            <div className="profile-header-card">
                <div className="profile-avatar">
                    <span>{user.avatarText}</span>
                </div>
                <div className="profile-header-info">
                    <div className="profile-username">{user.name}</div>
                    <div className="profile-stats">
                        {user.stats.map((stat, i) => (
                            <div className="profile-stat" key={i}>
                                <div className="profile-stat-value">{stat.value}</div>
                                <div className="profile-stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                    <div className="profile-meta">
                        <span className="profile-meta-item">
                            <i className="fa fa-clock-o"></i> Tham gia: {user.joined}
                        </span>
                        <span className="profile-meta-item">
                            <i className="fa fa-eye"></i> Lượt ghé thăm: {user.views}
                        </span>
                    </div>
                </div>
            </div>
            <div className="profile-content-row">
                <div className="profile-info-card">
                    <div className="profile-info-title">
                        Giới thiệu
                        <button className="profile-edit-btn"><i class="fa-solid fa-pen-to-square"></i>Sửa</button>
                    </div>
                    <div className="profile-info-content">
                        {user.bio ? user.bio : <span className="profile-info-empty">Chưa có giới thiệu. Nhấn "Sửa" để thêm giới thiệu về bản thân.</span>}
                    </div>
                    <div className="profile-info-title">
                        Chức danh
                        <button className="profile-edit-btn"><i class="fa-solid fa-pen-to-square"></i>Sửa</button>
                    </div>
                    <div className="profile-info-content">
                        {user.title ? user.title : <span className="profile-info-empty">Chưa có chức danh nào. Nhấn "Sửa" để thêm chức danh.</span>}
                    </div>
                </div>
                <div className="profile-progress-container">
                    <div className="profile-progress-card">
                        <div className="profile-progress-header in-progress">
                            <span className="profile-progress-count">0</span>
                            Đang tiến hành
                            <button className="profile-progress-refresh">
                                <i className="fa fa-refresh"></i>
                            </button>
                        </div>
                        <div className="profile-progress-content">
                            <span className="profile-progress-empty">Không có tập đang tiến hành</span>
                        </div>
                    </div>
                    <div className="profile-progress-card">
                        <div className="profile-progress-header completed">
                            <span className="profile-progress-count">0</span>
                            Đã hoàn thành
                        </div>
                        <div className="profile-progress-content">
                            <span className="profile-progress-empty">Không có tập đã hoàn thành</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;