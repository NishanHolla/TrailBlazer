import React from "react";
import InstagramStats from './Instalytics/page';
import AnalyticsComponent from "./YTlytics/page";
import Link from "next/link";

function Dash(){
    return(
        <main>
            <div className="rounded-xl w-96 h-full bg-black p-10">
                <h1 className="italic text-white">TrailBlazer</h1>
                <ul className="font-light text-lg text-white ml-10 mt-10">
                    <li className="dash-button"><Link href="/Instalytics" className="dash-in">Instagram Analytics</Link></li>
                    <li className="dash-button"><Link href="/YTlytics" className="dash-in">Youtube Analytics</Link></li>
                    <li className="dash-button"><button className="dash-in">Github Analytics</button></li>
                    <li className="mt-10"><button className="dash-in">About</button></li>
                </ul>
            </div>
        </main>
    );
}

export default Dash;