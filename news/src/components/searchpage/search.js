import styles from './search.module.css'
import categoryStyles from '../category/category.module.css'
import { BrowserRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
// import fetchHtml from './loadDOM'
import axios from 'axios';
import fetchHTML from '../home/loadDOM';
import { Cheerio } from 'cheerio';
import useEffectOnce from '../useEffectOne';
import { useHistory, useLocation } from 'react-router-dom';
import SpeechRecognitionComponent from '../voice/voice';
const cheerio = require('cheerio');
function useQuery() {
    return new URLSearchParams(useLocation().search);
}
function Search() {
    const [top15Story, setTop15Story] = useState([]);
    const location = useLocation()

    const [pageList, setPageList] = useState([]);
    const [prepage, setPrePage] = useState(null);
    const [nextpage, setNextPage] = useState(null);

    const [q,setQ] = useState([''])
    const [od,setOd] = useState(['1'])
    const [newstype,setNewstype] = useState(['1'])
    const [bydayerang,setBydaterang] = useState(['1'])

    useEffectOnce(() => {
        async function fetch() {
            let html = await fetchHTML('https://vietnamnet.vn/' + location.pathname.replace("/searchPage", "") + location.search);
            const $ = cheerio.load(html);
            const data = $('.newsStream').find('.horizontalPost');
            setTop15Story([])
            await data.each(function (index, element) {
                const $post = $(element);
                setTop15Story((state) => [
                    ...state, {
                        img: $post.find('.horizontalPost__avt').find('a').find('picture').find('img').attr('data-srcset'),
                        title: $post.find('.horizontalPost__avt').find('a').attr('title'),
                        url: $post.find('.horizontalPost__avt').find('a').attr('href'),
                        content: $post.find('.horizontalPost__main').find('.horizontalPost__main-desc').find('p').text()
                    }
                ])
            });
        }
        fetch()
    }, []);

    useEffectOnce(() => {
        async function fetch() {
            let html = await fetchHTML('https://vietnamnet.vn/' + location.pathname.replace("/searchPage", "") + location.search);
            const $ = cheerio.load(html);
            const data = $('.pagination__list').find('li').not('.block');
            const pre = $('.pagination__list').find('.pagination-prev');
            const next = $('.pagination__list').find('.pagination-next');
            setPrePage({
                url: pre.find('a').attr('href'),
            })
            setNextPage({
                url: next.find('a').attr('href'),
            })
            setPageList([])
            await data.each(function (index, element) {
                const $page = $(element);
                setPageList((state) => [
                    ...state, {
                        index: $page.find('a').text(),
                        url: $page.find('a').attr('href'),
                        isActive: $page.hasClass('active')
                    }
                ])
            });
        }
        fetch()
    }, []);
    const handleChange = (event) => {
        event.target.form.submit();
    };
    const query = useQuery();
    useEffectOnce(() => {
        setQ(query.get('q'))
        setOd( query.get('od'))
        setNewstype(query.get('newstype'))
        setBydaterang(query.get('bydaterang'))
        
    },[])
    return (
        <div className={styles.main}>
            <div className={`${styles.container} ${styles.typeFull}`}>
                <div class="formSearch mt-5">
                    <div className={styles['formSearch__head']} >
                        <h1>Kết quả tìm kiếm</h1>
                    </div>
                    <SpeechRecognitionComponent setQuery={setQ}/>
                    <form className={styles['formSearch__main']} action='/searchPage/tim-kiem' >
                        <div className={styles.field} >
                            <input class="keyword" type="text" defaultValue={q} name="q" placeholder="Keyword tìm kiểm (VD: Văn Mai Hương)" />
                            <button type="submit">
                                <span class="icon-search"></span>
                            </button>
                           
                        </div>
                        <div className={styles.fields} >
                            <div className={styles.field}>
                                <label for="">Sắp xếp theo</label>
                                <select value={od} filter="select" name="od" onChange={handleChange}>
                                    <option value="1">Cũ nhất</option>
                                    <option selected="" value="2">Mới nhất</option>
                                </select>
                            </div>
                            <div  value={od} className={styles.field}>
                                <label for="">Thời gian</label>
                                <select  value={bydayerang}  filter="select" name="bydaterang" onChange={handleChange}>
                                    <option value="all">Tất cả</option>
                                    <option value="1">Theo Ngày</option>
                                    <option value="2">Theo Tuần</option>
                                    <option value="3">Theo Tháng</option>
                                    <option value="4">Theo Năm</option>
                                </select>
                            </div>
                            <div className={styles.field}>
                                <label for="">Loại tin bài</label>
                                <select  value={newstype} filter="select" name="newstype" onChange={handleChange}>
                                    <option value="all">Tất cả</option>
                                    <option value="1">Bài thường</option>
                                    <option value="2">Bài ảnh</option>
                                    <option value="3">Bài video</option>
                                    <option value="4">Bài Podcast</option>
                                    <option value="5">Bài EMagazine</option>
                                    <option value="6">Bài StoryScroll</option>
                                    <option value="7">Bài Infographic</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
                {top15Story.length == 0 && <div>Không tìm thấy kết quả</div>}
                <div className={categoryStyles['topStory-15nd']}>
                    {top15Story.map((item, index) => (
                        <div className={` ${categoryStyles.horizontalPost} ${categoryStyles['version-news']} ${'mb-20'}  `}  >
                            <div className={` ${categoryStyles['horizontalPost__avt']} ${categoryStyles['avt-240']} `} >
                                <a href={"/detail" + item.url} title={item.title} data-utm-source="#vnn_source=bongdavietnam&amp;vnn_medium=listtin1">
                                    <picture>
                                        <source data-srcset={item.img} media="(max-width: 767px)" srcset={item.img} />
                                        <source data-srcset={item.img} media="(max-width: 1023px)" srcset={item.img} />
                                        <img src={item.img} class=" lazy-loaded" data-srcset={item.img} alt={item.title} srcset={item.img} />
                                    </picture>
                                </a>
                            </div>
                            <div className={categoryStyles['horizontalPost__main']} >
                                <h3 className={` ${categoryStyles['horizontalPost__main-title']} ${categoryStyles['vnn-title']} ${categoryStyles['title-bold']} `} data-id="2291894" ispr="False">
                                    <a href={"/detail" + item.url} title={item.title} data-utm-source="#vnn_source=bongdavietnam&amp;vnn_medium=listtin1" data-limit="">
                                        {item.title}
                                    </a>
                                </h3>
                                <div className={categoryStyles['horizontalPost__main-desc']} data-limit="">
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <div className={categoryStyles.pagination} >
                <ul className={categoryStyles['pagination__list']} >
                    {prepage && (<li className={`${categoryStyles['pagination__list-item']} ${categoryStyles['pre-page']}`} >
                        <a href={"/searchPage" + prepage.url}>
                            <img src="https://static.vnncdn.net/v1/icon/icon-pagination.svg" alt="icon prev" />
                        </a>
                    </li>)}

                    {pageList.map((item, index) => (
                        <li className={`${categoryStyles['pagination__list-item']} ${item.isActive ? categoryStyles.active : ''}`} >
                            <a href={"/searchPage" + item.url}>{item.index}</a>
                        </li>
                    ))}
                    {nextpage && <li className={`${categoryStyles['pagination__list-item']}`}>
                        <a href={"/searchPage" + nextpage.url}>
                            <img src="https://static.vnncdn.net/v1/icon/icon-pagination.svg" alt="icon next" />
                        </a>
                    </li>}

                </ul>
            </div>

        </div>
    )
}
export default Search;