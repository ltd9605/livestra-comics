import React, { useEffect, useState } from "react";
import "./container.css";
import axios from "axios";
const Container = () => {
    const [truyenList, setTruyenList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/truyen")
            .then(res => {
                setTruyenList(res.data);
            })
            .catch(err => console.error("Lỗi khi lấy dữ liệu:", err));
    }, []);

    return (
        <>
            <div className="container">
                <nav className="l-nav">
                    <div className="menu-bar">
                        Mới cập nhật <i className="fa-duotone fa-solid fa-paperclip"></i>
                    </div>
                    {truyenList.map((truyen, index) => {
                        console.log(truyen);
                        return (
                            <div className="item" key={index}>
                                <h2 className="item-name">{truyen.ten}</h2>
                                <div className="infor">
                                    <div className="item-img">
                                        <img src={truyen.imageURL} alt={truyen.ten} />
                                    </div> 
                                    <div className="description">
                                        <span className="de-types">{truyen.theloai}</span>
                                        <h4>Tác giả :{truyen.author}</h4>
                                        <h4>Số chương : {truyen.so_chuong}</h4>
                                        <h5>{truyen.description}</h5>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </nav>
                <nav className="r-nav">
                    <div className="r-nav1">
                        <ul className="r-nav-filter">
                            <li className="active">Ngày</li>
                            <li className="active">Tuần</li>
                            <li className="active">Toàn thời gian</li>
                        </ul>
                    </div>
                    <div className="r-list">
                        <div className="r-item">
                            <img src="https://valvrareteam.b-cdn.net/illustrations/1751016467425-clean.webp" alt="cover" />
                            <div className="r-info">
                                <h3 className="r-title">Bí mật của Phù Thủy Tĩnh Lặng</h3>
                                <p className="r-status">Đang tiến hành</p>
                                <p className="r-desc">Mở đầu: Trò Chơi Đã Bắt Đầu Từ Trước Cả K...</p>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
export default Container;