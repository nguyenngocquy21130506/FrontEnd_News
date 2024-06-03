import React, { useEffect, useState } from 'react';
// import fetchHtml from './loadDOM'
import axios from 'axios';
import fetchHTML from './loadDOM';
import { Cheerio } from 'cheerio';
import styles from '../home/home.module.css';
import useEffectOnce from '../useEffectOne';



const cheerio = require('cheerio');

function Home() {
    const [leftStory, setLeftStory] = useState([]);

    useEffectOnce(() => {
        async function fetch() {
            const html = await fetchHTML('https://vietnamnet.vn/')
            const $ = cheerio.load(html);
            const posts = $('.sectionTopstory__left').find('div.horizontalPost');
            // setLeftStory([])
            await posts.each(function (index, element) {
                // element là mỗi thẻ div con
                const $post = $(element);
                console.log($post.find('.horizontalPost__avt').find('a').attr('title'))
                setLeftStory((state) => [
                    ...state, {
                        detail: $post.find('.horizontalPost__avt').find('a').attr('href'),
                        title: $post.find('.horizontalPost__avt').find('a').attr('title'),
                        source: $post.find('.horizontalPost__avt').find('a').find('picture').find('source').attr('srcset'),
                        img: $post.find('.horizontalPost__avt').find('a').find('picture').find('img').attr('src'),

                        desc: $post.find(".horizontalPost__main").find('h3').find('a').text()
                    }
                ])
            });
            console.log(leftStory)
        }
        fetch()
    }, []); // Gọi chỉ một lần khi component được render lần đầu tiên

    return (
        <div className={styles.sectionTopstory}>
            <div className={styles.sectionTopstory__left}>
                {leftStory.map((item, index) => (
                    <div className={`${styles.horizontalPost} ` + " mb-20"}>
                        <div className={styles.horizontalPost__avt + " avt-140"} >
                            <a href={item.detail} title={item.title}>
                                <picture>
                                    <source srcset={item.source} />
                                    <img data-original={item.title} src={item.img} />
                                </picture>
                            </a>
                        </div>
                        <div className={styles.horizontalPost__main}>
                            <h3 data-id="2287137" className={styles['horizontalPost__main-title']}>
                                <a href={item.detail} title={item.title} data-utm-source="#vnn_source=trangchu&amp;vnn_medium=tieudiem4" data-limit="80">
                                    {item.desc}
                                </a>
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.sectionTopstory__center}>2</div>
            <div className={styles.sectionTopstory__right}>3</div>
            <div className={styles.sectionTopstory__bottom}>4</div>
        </div>
    );
}
export default Home;