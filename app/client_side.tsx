"use client"
import Chart from 'react-google-charts';

const Search = () =>{
    return(
        <div>
            <input style={{left:"500px",top:"-20px"}} type="text" placeholder="Search..." className="relative ml-24 top-7 pl-3 text-sm border-none rounded-lg font-extralight w-48 h-8"></input>
        </div>
    );
}

const Chart1 = () =>{
    const data = [
        ["Year", "Guest", "User"],
        ["Week1", 200, 400],
        ["Week2", 1000, 1400],
        ["Week3", 600, 300],
        ["Week4", 1330, 1340],
    ];

    const options = {
        curveType: "function"
    };
    return(
        <Chart chartType="LineChart" width="100%" height="100%" data={data} options={options}/>
    );
}

const Chart2 = () =>{
    const data = [
        ["Year", "Guest", "User"],
        ["Week1", 200, 400],
        ["Week2", 1000, 1400],
        ["Week3", 600, 300],
        ["Week4", 1330, 1340],
    ];

    const options = {
        curveType: "function"
    };
    return(
        <Chart chartType="PieChart" data={data} width={"500px"} height={"350px"}></Chart>
    );
}


export {Search, Chart1, Chart2};