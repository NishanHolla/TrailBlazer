"use client"

import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';
import dotenv from 'dotenv';
dotenv.config();

const accessToken = process.env.YT_ACCESS_TOKEN;

var api_key = 'AIzaSyAokjGvGI6OT9CnTBi0KYfkkFRDUf-sZQQ'

function ChannelAnalyticsComponent() {
  const [userName, setName] = useState("kanyewest");
  const [views, setViews] = useState("Loading...");
  const [user, setUser] = useState("Loading...");
  const [subs, setSubs] = useState("Loading...");
  const [url, setUrl] = useState("https://www.youtube.com/kanyewest");
  useEffect(() => {
    const sos = async () => {
      const response = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&forUsername=${userName}&key=${api_key}`);
      const json = await response.json();
      const stats = json.items[0].statistics;
      console.log(stats);
      setUser(json.items[0].snippet.title)
      setViews(stats.viewCount);
      setSubs(stats.subscriberCount);  
    }
    sos();

  }, [userName]); 

  return (
    <div className='p-10 font-bold text-xl'>
      <h1 className=''>Enter YouTube channel URL <input type='text' className='font-bold text-xl border ml-10' onChange={(e)=>{setName(e.target.value),setUrl("https://www.youtube.com/"+e.target.value);}}></input></h1>
      <h1 className=''>Channel Name : <a target='_blank' href={url} className='text-blue-400 italic'>{userName}</a></h1>
      <h1 className=''>Total views : {views}</h1>
      <h1 className=''>Subscribers : {subs}</h1>
      <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={data}
    />
      {/* <h1 className=''> : {}</h1> */}
      
    </div>
  );
}

// export const data = [
//   ["Country", "Popularity"],
//   ["Germany", 200],
//   ["United States", 300],
//   ["Brazil", 400],
//   ["Canada", 500],
//   ["France", 600],
//   ["RU", 700],
// ];

export const data = [
  ["Country", "CPM ($USD)"],
  ["Norway", 43.15],
  ["Germany", 38.85],
  ["United States", 13.00],
  ["Canada", 29.15],
  ["Brazil", 6.65],
  ["Singapore", 17.75],
  ["Turkey", 3.08],
  ["France", 15.53],
  ["RU", 1.45],
  ["India", 0.7],
  ["Japan", 10.53],
  ["Mexico", 9.51],
  ["United Arab Emirates", 8.13],
  ["Ukraine", 1.27],
  ["Iceland", 4.33],
  ["Kyrgystan", 1.23],
  ["South Korea", 8.88],
  ["China", 1.00],
  ["Israel", 14.08],
  ["Kazakhstan", 1.77],
  ["Tajikistan", 1.67],
  ["Mongolia", 5.87]
];

export default ChannelAnalyticsComponent;
