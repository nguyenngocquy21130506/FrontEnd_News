import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';
import styles from '../detail/Detail.module.css';
import useEffectOnce from '../useEffectOne';
import { useParams } from 'react-router-dom';

// Định nghĩa interface cho chi tiết bài viết
interface DetailContent {
    title: string;
    demo: string;
    content: string;
    dateUp: string;
    navItems: string[];
}

interface FeedItem {
    title: string;
    link: string;
    description: string;
    subDescription: string;
    imageUrl: string;
}

const Detail: React.FC = () => {
    const { link } = useParams<{ link: string }>();
    const [detail, setDetail] = useState<DetailContent | null>(null);
    const [feedItems, setFeedItems] = useState<FeedItem[]>([]);

    useEffect(() => {
        async function fetch() {
            try {
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
                console.log('nav : ' + nav)
                const navItems = nav.splice(1);  // Bỏ dấu `,` đầu tiên và tách chuỗi thành mảng
                console.log('navItems : ' + navItems)
                setDetail({ title, demo, content, dateUp, navItems });

                const items = $('.horizontal-item').toArray().map(item => {
                    const itemTitle = $(item).find('.horizontalTitle').text().trim();
                    const itemLink = $(item).find('a').attr('href') || '';
                    const itemDescription = $(item).find('.horizontalTitle').text().trim();
                    const itemImageUrl = $(item).find('img').attr('src') || '';
                    const subDescription = $(item).find('br').get(0)?.nextSibling?.nodeValue?.trim() || '';

                    return {
                        title: itemTitle,
                        link: itemLink,
                        description: itemDescription,
                        subDescription,
                        imageUrl: itemImageUrl
                    };
                });
                console.log('items.length :  '+ items.length)
                setFeedItems(items);
            } catch (error) {
                console.error('Error fetching the HTML:', error);
            }
        }

        fetch();
    }, [link]);

    return (
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <div className={styles.breadCrumbDetail}>
                    <ul>
                        {detail?.navItems.map((navItem, index) => (
                            <li key={index}>
                                {index > 0 ? `> ${navItem}` : navItem}
                            </li>
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
                    {feedItems.map((item, index) => (
                        <div className={styles.horizontalItem} key={index}>
                            <div className={styles.horizontalImage}><img src={item.imageUrl} alt={item.title}/></div>
                            <div className={styles.horizontalTitle}><h3><a href={item.link}
                                                                           title={item.title}>{item.title}</a></h3>
                            </div>
                            <p>{item.description}</p>
                            <p>{item.subDescription}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.comments}>
                <span className={styles.title}>Bình luận</span><br/>
                <textarea className={styles.inputComment} maxLength={500}/><br/>
                <button className={styles.btnComment}>
                    Bình luận
                </button>
                <span className="comment-bg emptyComment" style={{display: 'none'}}>
                <img src="https://static.vnncdn.net/v1/icon/chat(1).svg"/>
            </span>
                <span className="comment-number vnn-comment-count-detail"></span>
            </div>
        </div>
    );
};

export default Detail;
