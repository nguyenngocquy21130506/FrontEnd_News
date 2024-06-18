// Header.tsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import styles from './header.module.css';
import {RootState} from "../reduxStore/Store";
import {useSelector} from "react-redux";

function Header() {
    const email = useSelector((state: RootState) => state.user.email);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <a href="/public">Trang Tin Tức</a>
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <li><a href="/public">Trang Chủ</a></li>
                        <li><a href="/news">Tin Tức</a></li>
                        <li><a href="/entertainment">Giải Trí</a></li>
                        <li><a href="/sport">Thể Thao</a></li>
                        <li><a href="/contact">Liên Hệ</a></li>
                        {email ? (
                            <li><a href="/profile">{email}</a></li>
                        ) : (
                            <li><a href="/login">Đăng nhập</a></li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
