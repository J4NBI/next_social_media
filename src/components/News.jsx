"use client";
import React, { useEffect, useState } from 'react'


export default function News() {
  const [news, setNews] = useState([]);
  const [articleNum , setArticleNum] = useState(3);
  const apiKey = 'RMZdXDqNm6C5xddFpXqC7Q==3i6ZQndYYKuHmAum';

  useEffect(() => {
    fetch('https://thequoteshub.com/api/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      // console.log('Success:', data);
      const quoteText = data.text;
      const quoteAuthor = data.author;
      const quote = [quoteText, quoteAuthor];
      console.log(quote);
      setNews(quote);
    })
    .catch(error => console.error('Fehler:', error));
  }, []);

  return (
    <>
    <div className='mt-4'>
      {news && (
        <>
        <div className='bg-yellow-200 p-4 rounded-lg shadow-md font-bold'>
          <p className='text-lg'>
            "{news[0]}"
          </p>
          <p className='font-thin'> - {news[1]}</p>
        </div>
        </>
        
      )}
    </div>
    </>
    
  )
}