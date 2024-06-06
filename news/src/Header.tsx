import React from 'react';
import styles from './header.module.css'
function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <a href="/">Trang Tin Tức</a>
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <li><a href="/">Trang Chủ</a></li>
                        <li><a href="/news">Tin Tức</a></li>
                        <li><a href="/entertainment">Giải Trí</a></li>
                        <li><a href="/sport">Thể Thao</a></li>
                        <li><a href="/contact">Liên Hệ</a></li>
                        <li><a href="/login">Đăng nhập</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
