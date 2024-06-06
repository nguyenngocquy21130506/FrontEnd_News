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
    const [top3Story, setTop3Story] = useState([]);
    const [centerStory, setCenterStory] = useState(null);

    useEffectOnce(() => {
        async function fetch() {
            const html = await fetchHTML('https://vietnamnet.vn/')
            const $ = cheerio.load(html);
            const posts = $('.sectionTopstory__left').find('div.horizontalPost');
            // setLeftStory([])
            await posts.each(function (index, element) {
                // element là mỗi thẻ div con
                const $post = $(element);
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
        }
        fetch()
    }, []); // Gọi chỉ một lần khi component được render lần đầu tiên
    useEffectOnce(() => {
        async function fetch() {
            const html = await fetchHTML('https://vietnamnet.vn/')
            const $ = cheerio.load(html);
            const posts = $('.topStory_3nd').find('.verticalPost');
            // setLeftStory([])
            await posts.each(function (index, element) {
                // element là mỗi thẻ div con
                const $post = $(element);
                setTop3Story((state) => [
                    ...state, {
                        content: $post.find('.verticalPost__main').find('a').text(),
                        url: $post.find('.verticalPost__avt').find('a').attr('href'),
                        img: $post.find('.verticalPost__avt').find('a').find('picture').find('img').attr('src'),
                    }
                ])
            });
        }
        fetch()
    }, []); // Gọi chỉ một lần khi component được render lần đầu tiên
    useEffectOnce(() => {
        async function fetch() {
            const html = await fetchHTML('https://vietnamnet.vn/')
            const $ = cheerio.load(html);
            const post = $('.topStory');
            console.log(post.html())
            const img = post.find('img').attr('src');
            const url = post.find('.verticalPost__avt').find('a').attr('href');
            const content = post.find('img').attr('alt');
            const desc = post.find('.verticalPost__main-desc').text();
            setCenterStory({
                img: img,
                url: url,
                content: content,
                desc: desc
            })
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
            <div className={styles.sectionTopstory__center}>
                {centerStory && <div class="group-reverse"><div data-pr="False" data-pin="False" class="verticalPost version-news sm:lineSeparates topStory">
                    <div className={styles.verticalPost__avt} >
                        <a href={centerStory.url} title={centerStory.content} data-utm-source="#vnn_source=trangchu&amp;vnn_medium=tieudiem3">
                            <picture>
                                <source srcset={centerStory.img} media="(max-width: 1023px)" />
                                <img data-original={centerStory.content} src={centerStory.img} alt={centerStory.content} />
                            </picture>
                        </a>
                    </div>
                    <div className={styles.verticalPost__main} >
                        <h2 className={styles['verticalPost__main-title'] + " vnn-title"} data-id="2287426">
                            <a href={centerStory.url} title={centerStory.content} data-utm-source="#vnn_source=trangchu&amp;vnn_medium=tieudiem3">
                                {centerStory.content}
                            </a>
                        </h2>
                        <div className={styles['verticalPost__main-desc'] + " font-noto"} >{centerStory.desc}</div>
                    </div>
                </div>
                </div>}
                <div className={styles.topStory_3nd} >
                    {top3Story.map((item, index) => (
                        <div data-pr="False" data-pin="False" className={styles.verticalPost + " version-news sm:lineSeparates"} >
                            <div className={styles.verticalPost__avt} >
                                <a href={item.url} title={item.content} data-utm-source="#vnn_source=trangchu&amp;vnn_medium=tieudiem2">
                                    <picture>
                                        <source srcset={item.img} media="(max-width: 1023px)" />
                                        <img data-original={item.content} src={item.img} alt={item.content} />
                                    </picture>
                                </a>
                            </div>
                            <div className={styles.verticalPost__main} >
                                <h3 data-id="2288775">
                                    <a href={item.url} title={item.content} data-utm-source="#vnn_source=trangchu&amp;vnn_medium=tieudiem2">
                                        Bộ Chính trị: Cán bộ né tránh trách nhiệm sẽ bị tạm đình chỉ công tác
                                    </a>
                                </h3>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <div className={styles.sectionTopstory__right}>3</div>
            <div className={styles.sectionTopstory__bottom}>4</div>
        </div>
    );
}
export default Home;