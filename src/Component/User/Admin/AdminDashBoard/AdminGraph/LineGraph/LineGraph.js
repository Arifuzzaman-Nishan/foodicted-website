/* eslint-disable object-shorthand */
import React from 'react';
import ReactApexChart from 'react-apexcharts';

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
            height: 350,
            type: 'area',
            toolbar: {
                // show: false,
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
            // x: {
            //     format: 'dd/MM/yy HH:mm',
            // },
            y: {
                formatter: (value) => `${value} ${valueName}`,
            },
        },
        // fill: {
        //     gradient: {
        //         enabled: true,
        //         opacityFrom: 0.9,
        //         opacityTo: 0,
        //     },
        // },
        colors: color,
    };

    return (
        <div>
            <h5>{title}</h5>
            <ReactApexChart options={options} series={series} type="area" height={350} />
        </div>
    );
}
