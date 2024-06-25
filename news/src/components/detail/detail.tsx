import React, {useEffect, useState} from 'react';
import axios from 'axios';
import cheerio from 'cheerio';
import styles from '../detail/Detail.module.css';
import useEffectOnce from '../useEffectOne';
import {BrowserRouter as Router, Routes, Route, useParams, Link} from 'react-router-dom';

// Định nghĩa interface cho chi tiết bài viết
interface DetailContent {
    title: string;
    demo: string;
    content: string;
    dateUp: string;
    nav: string[];
}

interface FeedItem {
    title: string;
    link: string;
    description: string;
}

const Detail: React.FC = () => {
    const {link} = useParams<{ link: string }>();
    const [detail, setDetail] = useState<DetailContent | null>(null);
    const [feedItems, setFeedItems] = useState<FeedItem[]>([]);
    useEffect(() => {
        async function fetch() {
            const response = await axios.get(`https://api.allorigins.win/get?url=https://vietnamnet.vn/${link}`);
            const html = response.data.contents;
            const $ = cheerio.load(html);

            // Extract content from the HTML as per your requirement
            const title = $('.content-detail-title').text().trim(); // Adjust the selector as per the structure of the page
            const content = $('#maincontent').html() || ''; // Adjust the selector as per the structure of the page
            const dateUp = $('.bread-crumb-detail__time').text();
            const demo = $('.content-detail-sapo').text();
            const navElements = $('.bread-crumb-detail ul li').toArray();
            const nav = navElements.map((li) => $(li).text().trim());
            setDetail({title, demo, content, dateUp, nav});

            const items = Array.from(html.querySelectorAll('horizontal-item')).map(item => {
                const title = item.querySelector('title')?.textContent || '';
                const link = item.querySelector('link')?.textContent || '';
                const description = item.querySelector('description')?.textContent || '';
                const imageUrl = $('img').attr('src') || '';
                // Extract the text after <br> by splitting the HTML content
                const subDescription = $('br').get(0)?.nextSibling?.nodeValue?.trim() || '';

                return {
                    title,
                    link,
                    description,
                    subDescription,
                    imageUrl
                };
            });
            setFeedItems(items);
        }

        fetch();
    }, [link]);

    return (
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <div className={styles.breadCrumbDetail}>
                    <ul>
                        {detail?.nav.map((navItem, index) => (
                            <li key={index}>{navItem}</li>
                        ))}
                    </ul>
                    <div className="bread-crumb-detail__time">{detail?.dateUp}</div>
                </div>
                <div className="content-detail content-mobile-change">
                    <h1 className={styles.contentDetailTitle}>{detail?.title || 'Loading...'}</h1>
                    <h2 className={styles.contentDetailSapo}>{detail?.demo}</h2>
                    <div className={styles.maincontent} id="maincontent"
                         dangerouslySetInnerHTML={{__html: detail?.content || ''}}></div>
                </div>
            </div>
            <div className="vnn-news-ai-suggest horizontal-box-wrapper sticky top-65 pb-15">
                <h2 className={styles.horizontalHeading}>CÓ THỂ BẠN QUAN TÂM</h2>
                <div>
                    <div className={styles.horizontalItem}>
                        <div className={styles.horizontalImage}><h3>A</h3></div>
                        <div className={styles.horizontalTitle}><h3><a href="#" title={'A'}></a>a</h3></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
