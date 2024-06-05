import React from 'react';
import styles from './footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerSection}>
                    <h4>Về Chúng Tôi</h4>
                    <p>Trang tin tức cung cấp những thông tin mới nhất và chính xác nhất.</p>
                </div>
                <div className={styles.footerSection}>
                    <h4>Liên Hệ</h4>
                    <p>Email: contact@trangtintuc.com</p>
                    <p>Điện thoại: 0123-456-789</p>
                </div>
                <div className={styles.footerSection}>
                    <h4>Theo Dõi Chúng Tôi</h4>
                    <ul className={styles.socialMedia}>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
