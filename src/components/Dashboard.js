import { useEffect, useState } from "react";
import StatasticalCards from "./StatasticalCards";
import LineCharts from "./LineChart";
import PieCharts from "./PieChart";

const Dashboard = () => {

    let [country, setCountry] = useState('USA');
    let [dataHistory, setDataHistory] = useState({});
    let [fetchCountry, setFetchCountry] = useState([]);
    let [startDate, setStartDate] = useState('2020-10-24');
    let [endDate, setEndDate] = useState('2023-12-08');


    const getData = async (changeCountry) => {
        try {
            let response = await fetch(`https://disease.sh/v3/covid-19/historical/${changeCountry}?lastdays=1500`);
            let data = await response.json();
            console.log(data);
            setDataHistory(data.timeline);
        } catch (error) {
            console.log('fail to fetch data', error)
        }
    }

    const getCountryOptions = async () => {
        try {
            let response = await fetch('https://restcountries.com/v3.1/all');
            let data = await response.json();
            let options = data.map(country => ({
                name: country.name.common,
                code: country.cca2
            }));
            setFetchCountry(options)
        } catch (error) {
            console.log(`fail to fetch country ${error}`);
        }
    }

    useEffect(() => {
        getData('USA');
        getCountryOptions();
    }, [])


    const inputCountry = (event) => {
        setCountry(event.target.value)
        getData(event.target.value)
    }

    const getStartDate = (e) => {
        setStartDate(e.target.value)
    }

    const getEndDate = (e) => {
        setEndDate(e.target.value)
    }


    return (<>

        <div className="container">
            <p>COVID-19 and Population Dashboard</p>

            <div className="inputBoxes">

                <div className="inputSelect">
                    <select value={country} onChange={inputCountry}>
                        <option >{country}</option>
                        {
                            fetchCountry.map(option => (
                                <option key={option.code} value={option.code}>{option.name}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="inputFilter">
                    <span>Filter by date</span>
                    <div className="dates">
                        <input type="date" onChange={getStartDate} value={startDate} />
                        <input type="date" onChange={getEndDate} value={endDate} />
                    </div>
                </div>
            </div>
        </div>

        {/* StatasticalCards Container */}

        <StatasticalCards data={dataHistory} startDate={startDate} endDate={endDate} />


        <div className="chartContainer">
            <div className="chart">
                <LineCharts data={dataHistory} />
            </div>
            <div className="chart">
                <PieCharts data={dataHistory} />
            </div>
        </div>
    </>)
};

export default Dashboard;