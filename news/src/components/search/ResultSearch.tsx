import React, {useState} from 'react';
import styles from './Search.module.css'; // Sử dụng CSS Module

interface SearchResult {
    title: string;
    link: string;
    img: string;
    description: string;
}

interface ResultComponentProps {
    results: SearchResult[];
}
const ResultComponent: React.FC<ResultComponentProps> = ({ results }) => {
    return (
        <div className={styles.resultsContainer}>
            <h1 className={styles.title}>KẾT QUẢ TÌM KIẾM</h1>
            {results.map((result, index) => (
                <div key={index} className={styles.feedContainer}>
                    <img src={result.img} alt={result.title} className={styles.feedImage}/>
                    <div className={styles.feedContent}>
                        <h2><a href={result.link} target="_blank" rel="noopener noreferrer">{result.title}</a></h2>
                        <p>{result.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ResultComponent;
