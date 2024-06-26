import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';
import styles from './Event.module.css';
import {Link} from "react-router-dom"; // Đảm bảo bạn có file CSS hoặc thay đổi đường dẫn cho phù hợp

interface FeedItem {
    title: string;
    link: string;
    description: string;
    imageUrl?: string;
}

const Event: React.FC = () => {
    const [feedItems, setFeedItems] = useState<FeedItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const rssUrl = 'https://vietnamnet.vn/su-kien.rss';
        const fetchRSS = async () => {
            try {
                const response = await axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`);
                const data = response.data.contents;

                // Parse RSS feed
                const parser = new DOMParser();
                const xml = parser.parseFromString(data, "application/xml");

                const items = Array.from(xml.querySelectorAll("item")).map(item => {
                    const title = item.querySelector("title")?.textContent || "";
                    const link = item.querySelector("link")?.textContent || "";
                    const description = item.querySelector("description")?.textContent || "";

                    // Use cheerio to parse the description HTML and extract the image URL
                    const $ = cheerio.load(description);
                    const imageUrl = $('img').attr('src') || "";

                    return {
                        title,
                        link,
                        description,
                        imageUrl
                    };
                });

                setFeedItems(items);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchRSS();
    }, []);

    const extractLinkPath = (url: string) => {
        const parts = url.split('/');
        return parts[parts.length - 1];
    };

    return (
        <div className={styles.app}>
            <h1 className={styles.title}>DANH SÁCH SỰ KIỆN</h1>
            {loading && <p>Loading...</p>}
            {!loading && (
                <div className={styles.feedContainer}>
                    {feedItems.map((item, index) => (
                        <div key={index} className={styles.verticalPost}>
                            <div className={styles.verticalPost__avt}>
                                <Link to={`/detail/${extractLinkPath(item.link)}`} title={item.title}>
                                    {item.imageUrl &&
                                        <img src={item.imageUrl} alt={item.title} className={styles.image}/>}
                                    <h3 className={styles.verticalPost__mainTitle}>
                                        {item.title}
                                    </h3>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Event;
