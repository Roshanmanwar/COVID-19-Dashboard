import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const PieCharts = ({ data }) => {
    try {
        const calculateTotal = () => {
            let totalCases = 0;
            let totalDeaths = 0;
            let totalRecovered = 0;

            for (let date in data.cases) {
                totalCases += data.cases[date] || 0;
                totalDeaths += data.deaths[date] || 0;
                totalRecovered += data.recovered[date] || 0;
            }

            return { totalCases, totalDeaths, totalRecovered };
        }

        const { totalCases, totalDeaths, totalRecovered } = calculateTotal();

        const chartData = [
            { name: 'Total Cases', value: totalCases },
            { name: 'Total Deaths', value: totalDeaths },
            { name: 'Total Recovered', value: totalRecovered }
        ];

        // Define colors for different categories
        const colors = ['#E6E69E', '#FC4C5E', '#46CF23'];

        return (
            <>
                <div className='piachartdata'>
                    <p>Pie Chart</p>

                    <ResponsiveContainer width={"90%"} aspect={1.5}>
                        <PieChart margin={{ left: 50, bottom: 10 }}>
                            <Pie
                                data={chartData}
                                dataKey="value"
                                nameKey="name"
                                fill="#8884d8"
                                blendStroke="#E6E69E"
                                innerRadius="40%">
                                {
                                    chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                    ))
                                }
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

            </>
        );
    } catch (error) {
        console.error("An error occurred:", error);
        return <div style={{ "color": "red" }}>Data not Available please select other country</div>;
    }
};

export default PieCharts;
