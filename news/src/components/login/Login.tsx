import React, { useState } from 'react';
import styles from './register.module.css';
import {Link} from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Xử lý đăng nhập
    };

    return (
        <div className={styles.bigContainer}>
            <div className={styles.imageContainer}>
            </div>
            <div className={styles.authContainer}>
                <h2>Đăng Nhập</h2>
                <form onSubmit={handleLogin}>
                    <div className={styles.formGroup}>
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Mật Khẩu</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.btn} style={{marginBottom: '10px'}}>Đăng Nhập</button>
                    <label>Chưa có tài khoản ? </label><Link to={'http://localhost:3000/register'}> Đăng ký</Link>
                </form>
            </div>

        </div>
    );
}

export default Login;
