import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card } from 'react-bootstrap';

export default function BarGraph() {
    // data for bar graph
    // const series = [
    //     {
    //         name: 'Customer',
    //         // data for x axis
    //         data: [20, 45, 51, 58, 59, 58, 61, 35, 61, 48, 39, 68, 41, 41],
    //     },
    // ];

    const series = [
        {
            name: 'Customer',

            // Y axis data
            data: [20, 45, 51, 58, 59, 58, 61, 35, 61, 48, 39, 68, 41, 41],
        },
    ];

    const options = {
        chart: {
            type: 'bar',
            // width: '100%',
            responsive: [
                {
                    breakpoint: 500,
                    options: {
                        height: 200,
                    },
                },
            ],
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '40%',
                endingShape: 'rounded',
                distributed: true,
            },
        },
        colors: ['#FAB502', '#008FFB'],
        fill: {
            type: 'solid',
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 1,
            colors: ['transparent'],
        },
        xaxis: {
            // X axis data
            categories: ['15', '16', '17', '18', '19', '20', '21', '22', '23'],
        },
        yaxis: {
            title: {
                text: '(Customer) per day',
            },
        },
        // fill: {
        //     opacity: 1,
        // },
        tooltip: {
            y: {
                formatter(val) {
                    return `${val}k`;
                },
            },
        },
    };

    return (
        <Card className="border border-danger p-3 bd-radius">
            <h5 className="text-center">Customer Flow</h5>
            <ReactApexChart options={options} series={series} type="bar" height="250px" />
        </Card>
    );
}
