import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card } from 'react-bootstrap';

export default function BarGraph() {
    // data for bar graph
    const series = [
        {
            name: 'Customer',
            // data for x axis
            data: [20, 45, 51, 58, 59, 58, 61, 35, 61],
        },
    ];
    const options = {
        chart: {
            type: 'bar',
        },
        // legend: {
        //     position: 'right',
        //     verticalAlign: 'top',
        //     containerMargin: {
        //         left: 35,
        //         right: 60,
        //     },
        // },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '35%',
                endingShape: 'rounded',
                // distributed: true,
                enableShades: false,
            },
        },
        colors: ['#634FD1'],
        fill: {
            type: 'solid',
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
        },
        xaxis: {
            // X axis data
            categories: ['15', '16', '17', '18', '19', '20', '21', '22', '23'],
        },
        yaxis: {
            title: {
                text: '(Customer) per date',
            },
        },
        // fill: {
        //     opacity: 1,
        // },
        title: {
            text: 'Customer Flow',
            align: 'center',
        },
        tooltip: {
            y: {
                formatter(val) {
                    return `${val}k`;
                },
            },
        },
        // responsive: [
        //     {
        //         breakpoint: 1000,
        //         options: {
        //             plotOptions: {
        //                 bar: {
        //                     horizontal: false,
        //                 },
        //             },
        //             legend: {
        //                 position: 'bottom',
        //             },
        //         },
        //     },
        // ],
    };

    return (
        <Card className="m-auto p-3 shadow bd-radius">
            <ReactApexChart
                options={options}
                series={series}
                type="bar"
                height="280px"
                width="100%"
            />
        </Card>
    );
}
