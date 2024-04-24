import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Legend, Tooltip } from 'recharts';

const LineCharts = ({ data }) => {
    try {
        const calculateYearlyCases = () => {
            let yearlyData = {};

            for (let date in data.cases) {
                const year = new Date(date).getFullYear();
                if (!yearlyData[year]) {
                    yearlyData[year] = { cases: 0, deaths: 0, recovered: 0 };
                }
                yearlyData[year].cases += data.cases[date] || 0;
                yearlyData[year].deaths += data.deaths[date] || 0;
                yearlyData[year].recovered += data.recovered[date] || 0;
            }
            return yearlyData;
        }

        const yearlyData = calculateYearlyCases();
        const maxCases = Math.max(...Object.values(yearlyData).map(year => year.cases));

        // Convert maxCases to millions
        const maxCasesInMillions = maxCases / 1000000;

        const chartData = Object.keys(yearlyData).map((year) => ({
            year,
            cases: Math.round((yearlyData[year].cases / 1000000) * 10) / 10, // Convert to millions
            deaths: Math.round((yearlyData[year].deaths / 1000000) * 10) / 10, // Convert to millions
            recovered: Math.round((yearlyData[year].recovered / 1000000) * 10) / 10, // Convert to millions
        }));

        return (
            <>
                <div className='linechartdata'>
                    <p>Line Chart</p>
                    <ResponsiveContainer width={"90%"} aspect={1.5}>
                        <LineChart data={chartData} margin={{ top: 20, left: 25, bottom: 10, right: 10 }} >
                            <XAxis dataKey={"year"} interval={"preserveStartEnd"} />
                            <YAxis tickFormatter={(value) => `${value}M`} />
                            <Tooltip formatter={(value) => `${value}M`} />
                            <Legend />
                            <Line dataKey={"cases"} stroke='#7380cf' activeDot={{ r: 4 }} />
                            <Line dataKey={"deaths"} stroke='#DB4D69' activeDot={{ r: 4 }} />
                            <Line dataKey={"recovered"} stroke='#57C147' activeDot={{ r: 4 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </>
        );
    } catch (error) {
        console.error("An error occurred:", error);
        return <div style={{ "color": "red" }}>Data not Available please select other country</div>;
    }
};

export default LineCharts;
