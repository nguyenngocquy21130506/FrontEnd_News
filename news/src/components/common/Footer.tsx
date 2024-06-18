import React from 'react';
import styles from './footer.module.css';
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.preContainer}>
                <ul className={styles.category}>
                    <li><a href="#">Giáo dục</a></li>
                    <li><a href="#">Chính trị</a></li>
                    <li><a href="#">Văn hóa</a></li>
                    <li><a href="#">Thể thao</a></li>
                    <li><a href="#">Đời sống</a></li>
                    <li><a href="#">Sức khỏe</a></li>
                    <li><a href="#">Du lịch</a></li>
                    <li><a href="#">Kinh doanh</a></li>
                    <li><a href="#">Talks</a></li>
                    <li><a href="/event">Sự kiện</a></li>
                    <li><a href="#">Podcast</a></li>
                    <li><a href="/new24h">Tin tức 24h</a></li>
                </ul>
            </div>
            <div className={styles.container}>
                <div className={styles.footerSection}>
                    <h4>Về Chúng Tôi</h4>
                    <p>Trang cung cấp những thông tin mới mẻ và chính xác nhất. Đáp ứng nhu cầu theo dõi thông tin xã
                        hội trong và ngoài nước.</p>
                </div>
                <div className={styles.footerSection}>
                    <h4>Liên Hệ</h4>
                    <p>Email: nhom33@trangtintuc.com</p>
                    <p>Điện thoại: 0931-000-821</p>
                    <p>Địa chỉ: Phường Linh Trung, Thành Phố Thủ Đức</p>
                </div>
                <div className={styles.footerSection}>
                    <h4>Theo Dõi Chúng Tôi</h4>
                    <ul className={styles.socialMedia}>
                        <li><a href="#"><FaFacebook/> Facebook</a></li>
                        <li><a href="#"><FaTwitter/> Twitter</a></li>
                        <li><a href="#"><FaInstagram/> Instagram</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
