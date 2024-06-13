import React, { useState } from 'react';
import styles from './register.module.css';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        // Xử lý đăng ký
    };

    return (
        <div className={styles.authContainer}>
            <h2>Đăng Ký</h2>
            <form onSubmit={handleRegister}>
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
                <div className={styles.formGroup}>
                    <label>Xác Nhận Mật Khẩu</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className={styles.btn}>Đăng Ký</button>
            </form>
        </div>
    );
}

export default Register;
