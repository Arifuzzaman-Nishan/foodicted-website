import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './OrderReviewGraph.css';

export default function OrderReviewGraph() {
    const series = [
        {
            name: 'Order',
            data: [200, 445, 351, 258, 359, 558, 461],
        },
        // {
        //     name: 'series2',
        //     data: [11, 32, 45, 32, 34, 52, 41],
        // },
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
            colors: ['#E66430'],
        },
        xaxis: {
            type: 'category',
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        tooltip: {
            // x: {
            //     format: 'dd/MM/yy HH:mm',
            // },
            y: {
                formatter: (value) => `${value} total`,
            },
        },
        // fill: {
        //     gradient: {
        //         enabled: true,
        //         opacityFrom: 0.9,
        //         opacityTo: 0,
        //     },
        // },
        colors: ['#E66430'],
    };

    return (
        <div className="mt-5">
            <ReactApexChart options={options} series={series} type="area" height={350} />
        </div>
    );
}
