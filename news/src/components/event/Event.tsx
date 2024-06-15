import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';
import styles from './Event.module.css'; // Đảm bảo bạn có file CSS hoặc thay đổi đường dẫn cho phù hợp

interface FeedItem {
    title: string;
    link: string;
    description: string;
    imageUrl?: string;
}

function Event() {
    const [feedItems, setFeedItems] = useState<FeedItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
        const rssUrl = 'https://vietnamnet.vn/rss/to-chuc-le-ky-niem-200-nam-ngay-sinh-danh-nhan-nguyen-dinh-chieu-2032244.rss';

        const fetchRSS = async () => {
            try {
                const response = await axios.get(CORS_PROXY + rssUrl);
                const $ = cheerio.load(response.data);
                const items: FeedItem[] = [];

                $('item').each((index, element) => {
                    const title = $(element).find('title').text();
                    const link = $(element).find('link').text();
                    const description = $(element).find('description').text();
                    const imageUrl = $(element).find('enclosure').attr('url');

                    items.push({
                        title,
                        link,
                        description,
                        imageUrl
                    });
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

    return (
        <div className="App">
            <h1>Lễ kỷ niệm 200 năm ngày sinh danh nhân Nguyễn Đình Chiểu</h1>
            {loading && <p>Loading...</p>}
            {!loading && (
                <div className={styles.feedContainer}>
                    {feedItems.map((item, index) => (
                        <div key={index} className={styles.feedItem}>
                            <h2>{item.title}</h2>
                            {/*{item.imageUrl && <img src={item.imageUrl} alt={item.title} />}*/}
                            <p>{item.description}</p>
                            <a href={item.link}>Read more</a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Event;
