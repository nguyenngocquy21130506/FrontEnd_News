import React, { useEffect, useState } from 'react';
import axios from 'axios';
import fetchHTML from '../home/loadDOM';
import { Cheerio } from 'cheerio';
import styles from '../home/home.module.css';
import useEffectOnce from '../useEffectOne';
import { BrowserRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom';
const cheerio = require('cheerio');
function Detail() {
    const { link } = useParams();
    const [detail, setDetail] = useState(null)
    useEffectOnce(() => {
        async function fetch() {
            let html = await fetchHTML('https://vietnamnet.vn/' + link);
            const $ = cheerio.load(html);
            setDetail();
        }
        fetch()
    }, [link]); // Gọi chỉ một lần khi component được render lần đầu tiên
    return (
        <div>{detail}</div>
    )
}
export default Detail;