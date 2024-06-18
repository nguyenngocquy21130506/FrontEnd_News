import React, { useState } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';
import SearchComponent from "./SearchBar";
import ResultComponent from "./ResultSearch";

// Định nghĩa giao diện cho kết quả tìm kiếm
interface SearchResult {
    title: string;
    link: string;
    img: string;
    description: string;
}

function Search() {
    // Sử dụng giao diện để xác định kiểu dữ liệu cho trạng thái results
    const [results, setResults] = useState<SearchResult[]>([]);
    const rssUrl = 'https://vietnamnet.vn/tin-tuc-24h.rss';

    const handleSearch = async (query: string) => {
        try {
            const response = await axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`);
            const data = response.data.contents;

            // Parse RSS feed
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, 'application/xml');

            const items = Array.from(xml.querySelectorAll('item'));

            // Filter results
            const filteredResults = items.filter((item) => {
                const titleElement = item.querySelector('title');
                return titleElement && titleElement.textContent && titleElement.textContent.toLowerCase().includes(query.toLowerCase());
            });

            // Map filtered results to a readable format
            const mappedResults: SearchResult[] = filteredResults.map((item) => {
                const title = item.querySelector('title')?.textContent || '';
                const link = item.querySelector('link')?.textContent || '';
                const description = item.querySelector('description')?.textContent || '';

                // Use cheerio to parse the description HTML and extract the image URL
                const $ = cheerio.load(description);
                const img = $('img').attr('src') || '';

                // Extract the text after <br> by splitting the HTML content
                const subDescription = $('br').get(0).nextSibling.nodeValue.trim();

                return {
                    title,
                    link,
                    img,
                    description: subDescription
                };
            });
            console.log("mappedResults : " + mappedResults[1].description)

            setResults(mappedResults);
        } catch (error) {
            console.error('Error fetching the RSS feed:', error);
        }
    };

    return (
        <div>
            <SearchComponent onSearch={handleSearch} />
            <ResultComponent results={results} />
        </div>
    );
}

export default Search;
