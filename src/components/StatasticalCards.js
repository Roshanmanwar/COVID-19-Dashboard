const StatasticalCards = ({ data, startDate, endDate }) => {

    const calculateCases = (startDate, endDate) => {
        try {
            let totalCase = 0;
            let totalRecovered = 0;
            let totalDeaths = 0;

            for (let date in data.cases) {
                if (new Date(date) >= new Date(startDate) && new Date(date) <= new Date(endDate)) {
                    totalCase += data.cases[date] || 0;
                    totalRecovered += data.recovered[date] || 0;
                    totalDeaths += data.deaths[date] || 0;
                }
            }

            // Convert to million units
            totalCase /= 1000000;
            totalRecovered /= 1000000;
            totalDeaths /= 1000000;

            return { totalCase, totalRecovered, totalDeaths }

        } catch (error) {
            console.log(`fail to calculate cases ${error}`);
            return { totalCase: 0, totalRecovered: 0, totalDeaths: 0 };
        }
    }

    const { totalCase, totalRecovered, totalDeaths } = calculateCases(startDate, endDate);

    return (
        <>
            <div className="statisticalCard">
                <div className="card">
                    <p className="name" style={{ "backgroundColor": "#7380cf" }}>Total Cases</p>
                    <p className="value">{totalCase.toFixed(0)} M</p>
                </div>
                <div className="card">
                    <p className="name" style={{ "backgroundColor": "#50d03a" }}>Recoveries</p>
                    <p className="value">{totalRecovered.toFixed(0)} M</p>
                </div>
                <div className="card">
                    <p className="name" style={{ "backgroundColor": "#f0545f" }}>Deaths</p>
                    <p className="value">{totalDeaths.toFixed(0)} M </p>
                </div>
            </div>
        </>
    );
};

export default StatasticalCards;
