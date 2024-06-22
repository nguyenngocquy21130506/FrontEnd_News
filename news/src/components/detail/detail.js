import React, {useEffect, useState} from 'react';
import axios from 'axios';
import fetchHTML from '../home/loadDOM';
import cheerio from 'cheerio';
import styles from '../detail/Detail.module.css';
import useEffectOnce from '../useEffectOne';
import {BrowserRouter as Router, Routes, Route, useParams, Link} from 'react-router-dom';

function Detail() {
    const {link} = useParams();
    const [detail, setDetail] = useState(null)
    useEffectOnce(() => {
        async function fetch() {
            let html = await fetchHTML(`https://vietnamnet.vn/${link}`);
            const $ = cheerio.load(html);

            // Extract content from the HTML as per your requirement
            const content = $('#maincontent').html(); // Adjust the selector as per the structure of the page
            setDetail(content);
        }

        fetch()
    }, [link]); // Gọi chỉ một lần khi component được render lần đầu tiên
    return (
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <div className={styles.breadCrumbDetail}>
                    <ul>
                        <li>
                            <a href="/kinh-doanh" title="Kinh doanh">
                                Kinh doanh
                            </a>
                        </li>
                        <li>
                            <a href="/kinh-doanh/tai-chinh" title="Tài chính">
                                Tài chính
                            </a>
                        </li>
                    </ul>
                    <div className="bread-crumb-detail__time">
                        Thứ Tư, 19/06/2024 - 09:46
                    </div>
                </div>
                <div className="content-detail content-mobile-change">
                    <h1 className={styles.contentDetailTitle}>Vingroup của tỷ phú Phạm Nhật Vượng lọt top 50 ASEAN, bất
                        ngờ về DN
                        Việt đứng nhất bảng</h1>
                    <h2 className={styles.contentDetailSapo}>Vingroup và nhiều công ty khác của Việt Nam như Masan, Hòa
                        Phát,... lọt top 500 doanh nghiệp lớn nhất khu vực Đông Nam Á. Bất ngờ là vị trí đầu bảng của DN
                        Việt là một tập đoàn có lợi nhuận thấp hơn nhiều so với các DN khác.</h2>
                    <div className={styles.maincontent} id="maincontent">
                        <p>Tạp chí Fortune hôm 18/6 đã công bố danh sách Fortune SEA 500 - thống kê các doanh nghiệp lớn
                            nhất khu vực Đông Nam Á. Việt Nam có 70 doanh nghiệp góp mặt trong danh sách này.</p>
                        <p>Trong top 50 có nhiều cái tên quen thuộc như Agribank, BIDV, Vingroup, Vietinbank,...</p>
                        <p>Tuy nhiên, doanh nghiệp Việt Nam có vị trí cao nhất trong danh sách là Tập đoàn Xăng dầu Việt
                            Nam
                            - Petrolimex (PLX).&nbsp;</p>
                        <p>Petrolimex xếp thứ 23 về tổng thể và đứng đầu các doanh nghiệp Việt có mặt trong danh sách
                            Fortune SEA 500 dù có quy mô vốn hóa kém xa so với các ngân hàng và nhiều tập đoàn của
                            các <a
                                href="https://vietnamnet.vn/pham-nhat-vuong-tag12282852037801941372.html">tỷ phú USD
                                Việt
                                Nam</a>.</p>
                        <p>Agribank xếp thứ 37, BIDV xếp thứ 39, Vingroup số 45 và Vietinbank số 48.</p>
                        <p>Tính tới 18/6, quy mô vốn hóa của Petrolimex trên thị trường chứng khoán Việt Nam chỉ khoảng
                            52
                            nghìn tỷ đồng (2 tỷ USD), so với mức 161 nghìn tỷ đồng của Vingroup (VIC), 265 nghìn tỷ đồng
                            của
                            Ngân hàng BIDV (BID), 188 nghìn tỷ đồng của Tập đoàn Hòa Phát (HPG), hay 115 nghìn tỷ đồng
                            của
                            Masan Group (MSN)...</p>
                        <p>Petrolimex cũng có lợi nhuận khiêm tốn, chỉ khoảng 120 triệu USD trong năm 2023, so với các
                            ngân
                            hàng và tập đoàn như Hòa Phát.</p>
                        <p>Dù vậy, Petrolimex có doanh thu ấn tượng với 11,5 tỷ USD trong năm 2023, vượt khá xa so với
                            mức
                            gần 6,8 tỷ USD của Vingroup và mức 4,7 tỷ USD của Hòa Phát.</p>
                        <p>Ngoài ra trong top 500 còn có Masan Group, Hoà Phát, VPBank, MBBank, Đầu tư Thế Giới Di Động,
                            FPT, Vietnam Airlines...</p>
                        <p>Petrolimex, Vingroup, BIDV, Vietinbank, VPBank, MBBank, Masan Group, Hoà Phát, Đầu tư Thế
                            Giới Di
                            Động (MWG), FPT, Vietnam Airlines,... đều là các doanh nghiệp niêm yết trên thị trường chứng
                            khoán Việt Nam.&nbsp;</p>
                        <p>Tuy nhiên, Petrolimex, BIDV, Vietinbank, Vietnam Airlines ghi nhận Nhà nước nắm cổ phần chi
                            phối.
                            Ủy ban Quản lý vốn Nhà nước tại doanh nghiệp (SCIC) hiện nắm gần 77,3% cổ phần tại
                            Petrolimex.</p>
                        <p>Trong khi đó, Vingroup của tỷ phú Phạm Nhật Vượng, Masan của ông Nguyễn Đăng Quang, Hòa Phát
                            của
                            ông Trần Đình Long, MWG của ông Nguyễn Đức Tài và FPT của ông Trương Gia Bình là các công ty
                            tư
                            nhân.</p>
                        <p>Vingroup của tỷ phú Vượng được kỳ vọng bứt phá và có thể lên top đầu khu vực nếu hãng xe
                            VinFast
                            (VFS) thành công trên thị trường xe điện thế giới.</p>
                        <p>Indonesia (280 triệu dân) là quốc gia có nhiều doanh nghiệp trong top 500 Fortune SEA nhất,
                            với
                            110 cái tên. Thái Lan (70 triệu dân) có 107 doanh nghiệp. Singapore (5,6 triệu dân) có 84
                            công
                            ty.</p>
                        <p>Trong năm 2023, các công ty trong danh sách Fortune 500 Đông Nam Á đã thu về 1,79 nghìn tỷ
                            USD
                            doanh thu, giảm 2,5% so với năm trước. Tổng lợi nhuận giảm 9,6% xuống còn 130 tỷ USD.</p>
                        <p>Gần đây, hầu hết doanh nghiệp lớn trong khu vực Đông Nam Á gặp khó khăn vì chịu ảnh hưởng bởi
                            các
                            cuộc xung đột địa chính trị, cú sốc chuỗi cung ứng và sự bất ổn ở các thị trường như Trung
                            Quốc
                            và châu Âu.</p>
                        <p>Giá cả leo thang khiến chi phí sản xuất gia tăng. Trong khi đó, sức cầu tiêu dùng trên toàn
                            cầu
                            khá yếu, nhất là tại Trung Quốc và châu Âu. Nước Mỹ và châu Âu đối mặt với lạm phát cao. Gần
                            đây, kinh tế Trung Quốc ghi nhận những tín hiệu tích cực trở lại nhưng có thể chưa qua giai
                            đoạn
                            khó khăn nhất, lo ngại về giảm phát vẫn còn.</p>
                    </div>
                </div>
            </div>
            <div className="vnn-news-ai-suggest horizontal-box-wrapper sticky top-65 pb-15">
                <h2 className={styles.horizontalHeading}>CÓ THỂ BẠN QUAN TÂM</h2>
                <div>
                    <div className={styles.horizontalItem}>
                        <div className={styles.horizontalImage}><h3>A</h3></div>
                        <div className={styles.horizontalTitle}><h3><a href="#" title={'A'}></a></h3></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;