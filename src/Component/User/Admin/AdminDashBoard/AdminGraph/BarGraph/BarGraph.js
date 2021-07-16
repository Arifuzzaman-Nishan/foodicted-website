import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card } from 'react-bootstrap';

export default function BarGraph() {
    const series = [
        {
            name: 'Customer',
            data: [20, 45, 51, 58, 59, 58, 61, 35, 61, 48, 39, 68, 41, 41],
        },
    ];
    const options = {
        chart: {
            type: 'bar',
            height: 350,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
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
            width: 2,
            colors: ['transparent'],
        },
        xaxis: {
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
        <div>
            <Card className="m-auto p-3 shadow bd-radius" style={{ width: '40rem' }}>
                <h5 className="text-center">Customer Flow</h5>
                <ReactApexChart options={options} series={series} type="bar" height={300} />
            </Card>
        </div>
    );
}