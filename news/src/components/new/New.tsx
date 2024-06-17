import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';
import styles from './New.module.css';

interface FeedItem {
    title: string;
    link: string;
    description: string;
    imageUrl?: string;
    subDescription?: string;
}

const Event: React.FC = () => {
    const [feedItems, setFeedItems] = useState<FeedItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const rssUrl = 'https://vietnamnet.vn/tin-tuc-24h.rss';
        const fetchRSS = async () => {
            try {
                const response = await axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`);
                const data = response.data.contents;

                // Parse RSS feed
                const parser = new DOMParser();
                const xml = parser.parseFromString(data, 'application/xml');

                const items = Array.from(xml.querySelectorAll('item')).map(item => {
                    const title = item.querySelector('title')?.textContent || '';
                    const link = item.querySelector('link')?.textContent || '';
                    const description = item.querySelector('description')?.textContent || '';

                    // Use cheerio to parse the description HTML and extract the image URL
                    const $ = cheerio.load(description);
                    const imageUrl = $('img').attr('src') || '';
                    // Extract the text after <br> by splitting the HTML content
                    const htmlContent = $.html();
                    const subDescription = $('br').get(0).nextSibling.nodeValue.trim();
                    return {
                        title,
                        link,
                        description,
                        subDescription,
                        imageUrl
                    };
                });
                console.log(items);

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
        <div className={styles.app}>
            <h1 className={styles.title}>TIN TỨC 24H</h1>
            {loading && <p>Loading...</p>}
            {!loading && (
                <div className={styles.feedContainer}>
                    {feedItems.map((item, index) => (
                        <div key={index} className={styles.verticalPost}>
                            <div className={styles.verticalPost__avt}>
                                <a href={item.link} title={item.title}>
                                    {item.imageUrl && (
                                        <img src={item.imageUrl} alt={item.title} className={styles.image}/>
                                    )}
                                    <h3 className={styles.verticalPost__mainTitle}>{item.title}</h3>
                                </a>
                            </div>
                            <p className={styles.description}>{item.subDescription}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Event;
