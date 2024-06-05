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
                        <li><a href="/tin-tuc">Tin Tức</a></li>
                        <li><a href="/giai-tri">Giải Trí</a></li>
                        <li><a href="/the-thao">Thể Thao</a></li>
                        <li><a href="/lien-he">Liên Hệ</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
