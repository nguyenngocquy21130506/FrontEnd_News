import React, { useEffect, useState } from 'react';
// import fetchHtml from './loadDOM'
import axios from 'axios';
import fetchHTML from './loadDOM';
function Home() {
    const [HtmlContent, setHtmlContent] = useState(null);
    useEffect(() => {
        fetchHTML('https://vietnamnet.vn/')   
    }, []); // Gọi chỉ một lần khi component được render lần đầu tiên
  
    return (
      <div>
       
      </div>
    );
}
export default Home;