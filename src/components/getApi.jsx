import React, { useEffect, useState } from "react";

const GetApi = () => {
    const [onUpdateComics, setOnUpdateComics] = useState([]);
    const [newComics, setNewComics] = useState([]);
    const [currentlyComics, setCurrentlyComics] = useState([]);
    const [comingSoonComics, setComingSoonComics] = useState([]);
    const [finishedComics, setFinishedComics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const [
                    onUpdateRes,
                    newComicsRes,
                    currentlyRes,
                    comingSoonRes,
                    finishedRes
                ] = await Promise.all([
                    fetch("https://otruyenapi.com/v1/api/home"),
                    fetch("https://otruyenapi.com/v1/api/danh-sach/truyen-moi?page=1"),
                    fetch("https://otruyenapi.com/v1/api/danh-sach/dang-phat-hanh?page=1"),
                    fetch("https://otruyenapi.com/v1/api/danh-sach/sap-ra-mat?page=1"),
                    fetch("https://otruyenapi.com/v1/api/danh-sach/hoan-thanh?page=1")
                ]);

                const [
                    onUpdateData,
                    newComicsData,
                    currentlyData,
                    comingSoonData,
                    finishedData
                ] = await Promise.all([
                    onUpdateRes.json(),
                    newComicsRes.json(),
                    currentlyRes.json(),
                    comingSoonRes.json(),
                    finishedRes.json()
                ]);

                setOnUpdateComics(onUpdateData.data);
                setNewComics(newComicsData.data);
                setCurrentlyComics(currentlyData.data);
                setComingSoonComics(comingSoonData.data);
                setFinishedComics(finishedData.data);

            } catch (err) {
                console.error('Lỗi khi gọi API:', err);
                setError("Có lỗi xảy ra khi gọi API");
            } finally {
                setLoading(false);
            }
        };

        fetchAllData();
    }, []);