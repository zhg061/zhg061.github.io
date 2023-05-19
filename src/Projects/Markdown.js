import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import exampleMd from './blog-post.1.md';
import axios from 'axios';



export default function MarkdownDisplay() {
  // const [markdown, setMarkdown] = useState('');

  // useEffect(() => {
  //   const url = new URL(import.meta.url);
  //   const path = url.pathname.split('/').slice(0, -1).join('/');
  //   console.log(path)
  //   axios.get('./blog-post.1.md')
  //     .then(response => setMarkdown(response.data))
  //     .catch(error => console.error(error));
  // }, []);
  return (
    <div>
      <ReactMarkdown>{exampleMd}</ReactMarkdown>
    </div>
  );
}
