'use client'

import dotenv from 'dotenv';
import { useEffect,useState } from 'react';

dotenv.config();

const accessToken = process.env.INSTA_ACCESS_TOKEN;

export default function Instalytics() {
  const [cap,setCap] = useState("Loading...");
  const [url,setUrl] = useState("Loading...");

  useEffect(()=>{
    const fetchInstagramPosts = async () => {
      const apiUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,likes_count&access_token=IGQWRQc29yWUFOYTlMWFlKVTJCdDFoME1pQUxqWmljR3dqVG9yYlczeWxIdzJHQWVJMmhsTUNSYlBiUEs5d1hmU01HVDlrdWJWa25Cb0habFZAlVFpjTmpYU25CakxDNkhXOERiUWZARUnExU0VDakQ2cWVPUU5lZADAZD`;
      const data = await fetch(apiUrl);
      var json = await data.json()
      for(let i=0;i<json.data.length;i++){
        console.log(json)
        setCap(json.data[i].caption)
        setUrl(json.data[i].media_url)
      }
    };
    fetchInstagramPosts();
  })
  return(
    <div>
      Hello
    </div>
  )
}
  
  