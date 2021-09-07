import Chart from "react-apexcharts";

function BarChart() {       // componente react
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    const mockData = {
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]                   
            }
        ]
    };

    return(
        <Chart 
            options={{...options, xaxis: mockData.labels}}       // no react, quando colocamos uma variável entre chaves ela irá ser incorporada na definição do nosso JSX. O options entre chaves estamos referênciado nossa variável constante options acima. Os três pontos (...options), serve para pegarmos todo mundo do options(todo o objeto do jeito que está), reaproveitando ele e incluiremos mais coisas nesse objeto
            series={mockData.series}
            type="bar"
            height="240"
        />
    );
}

export default BarChart;