// Header.tsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import { RootState } from '../reduxStore/Store';

function Header() {
    const currentUser = useSelector((state: RootState) => state.user.currentUser);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link to="/">Trang Tin Tức</Link>
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <li><Link to="/public">Trang Chủ</Link></li>
                        <li><Link to="/about">Giới thiệu</Link></li>
                        <li><Link to="/contact">Liên Hệ</Link></li>
                        {currentUser ? (
                            <li><Link to="/profile">{currentUser.email}</Link></li>
                        ) : (
                            <li><Link to="/login">Đăng nhập</Link></li>
                        )}
                    </ul>
                </nav>
                <div className={styles.search}>
                    <form className={styles.formSearch} action="/tim-kiem" method="get">
                        <input className={styles.inputSearch} name="q" type="text" placeholder="Nhập nội dung tìm kiếm....."/>
                        <button className={styles.btnSearch} type="submit" title={'Tìm kiếm'}>
                            <img src="https://static.vnncdn.net/v1/icon/search.png" alt="search icon"/>
                        </button>
                    </form>
                </div>
                <div className={styles.socialIcons}>
                    <a href={'#'} title={'Facebook'}><FaFacebook/></a>
                    <a href={'#'} title={'Twitter'}><FaTwitter/></a>
                    <a href={'#'} title={'Instagram'}><FaInstagram/></a>
                </div>
            </div>
        </header>
    );
}

export default Header;
