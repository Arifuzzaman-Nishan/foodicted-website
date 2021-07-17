/* eslint-disable no-unused-vars */
/* eslint-disable object-shorthand */
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card } from 'react-bootstrap';

export default function LineGraph({ graphData }) {
    console.log(graphData);
    if (graphData == null) return null;

    const { categories, color, yData, valueName, title } = graphData;

    const series = [
        {
            name: 'Order',
            data: yData,
        },
    ];
    const options = {
        chart: {
            type: 'area',
            responsive: [
                {
                    breakpoint: 500,
                    options: {
                        height: 200,
                    },
                },
            ],
            toolbar: {
                tools: {
                    download: true,
                    selection: false,
                    zoom: false,
                    zoomin: false,
                    zoomout: false,
                    pan: false,
                    reset: false,
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
            colors: color,
        },
        xaxis: {
            type: 'category',
            categories: categories,
        },
        tooltip: {
            y: {
                formatter: (value) => `${value} ${valueName}`,
            },
        },
        colors: color,
    };

    return (
        <div>
            <Card className="m-auto p-3 shadow bd-radius">
                <h5 className="text-center">{title}</h5>
                <ReactApexChart
                    options={options}
                    series={series}
                    type="area"
                    height="250px"
                    width="100%"
                />
            </Card>
        </div>
    );
}
